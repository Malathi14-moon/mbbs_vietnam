import express from "express";
import cors from "cors";
import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import pool from "./db.js";
import dotenv from "dotenv";
import nodemailer from 'nodemailer';


dotenv.config();

/* =========================
   CRASH HANDLING (IMPORTANT)
========================= */
process.on("uncaughtException", (err) => {
  console.error("❌ UNCAUGHT EXCEPTION:", err);
});

process.on("unhandledRejection", (err) => {
  console.error("❌ UNHANDLED PROMISE:", err);
});

/* =========================
   PATH SETUP
========================= */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);




/* =========================
   APP INIT
========================= */
const app = express();
const PORT = process.env.PORT || 5000;

/* =========================
   MIDDLEWARE
========================= 
app.use(cors());*/

app.use(cors({
  origin: "*"
}));
app.use(express.json());

/* =========================
   DB CONNECTION CHECK
========================= */
/*pool.connect()
  .then(() => console.log("✅ Database Connected"))
  .catch(err => console.error("❌ DB Connection Error:", err));*/

  pool.query("SELECT 1")
  .then(() => console.log("✅ Database Connected"))
  .catch(err => console.error("❌ DB Connection Error:", err));

/* =========================
   STATIC FILES
========================= */
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}
app.use("/uploads", express.static(uploadsDir));

/* =========================
   MULTER SETUP
========================= */
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsDir),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `uni_${Date.now()}${ext}`);
  },
});

const fileFilter = (req, file, cb) => {
  const allowed = ["image/jpeg", "image/png", "image/webp", "image/gif"];
  if (allowed.includes(file.mimetype)) cb(null, true);
  else cb(new Error("Invalid file type"), false);
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 },
});

/* =========================
   HELPERS
========================= */
function parseHighlights(highlights) {
  try {
    return Array.isArray(highlights)
      ? highlights
      : JSON.parse(highlights || "[]");
  } catch {
    return [];
  }
}

function buildImageUrl(req, filename) {
  if (!filename) return null;
  return `${req.protocol}://${req.get("host")}/uploads/${filename}`;
}

function normalizeImageUrl(req, image) {
  if (!image || typeof image !== "string") return null;
  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }
  const normalized = image.startsWith("/") ? image : `/${image}`;
  return `${req.protocol}://${req.get("host")}${normalized}`;
}

function createEmailTransporter() {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}

/* =========================
   AUTH MIDDLEWARE
========================= */
function verifyAdmin(req, res, next) {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  if (token !== "admin-token") {
    return res.status(403).json({ error: "Invalid token" });
  }

  next();
}

/* =========================
   ROUTES
========================= */

// Test
app.get("/", (req, res) => {
  res.send("✅ API is running...");
});

/* ===== IMAGE UPLOAD ===== */
app.post("/upload-image", verifyAdmin, upload.single("image"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No image uploaded" });
    }

    const imageUrl = buildImageUrl(req, req.file.filename);

    res.json({
      success: true,
      imageUrl,
      filename: req.file.filename,
    });
  } catch (err) {
    console.error("UPLOAD ERROR:", err);
    res.status(500).json({ error: "Upload failed" });
  }
});

/* ===== GET UNIVERSITIES ===== */
app.get("/universities", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM universities ORDER BY id DESC"
    );

    const data = result.rows.map((row) => ({
      ...row,
      highlights: parseHighlights(row.highlights),
      image: normalizeImageUrl(req, row.image),
    }));

    res.json(data);
  } /*catch (err) {
    console.error("GET ERROR:", err);
    res.status(500).json({ error: "Server error" });
  }*/

    catch (err) {
  console.error("GET UNIVERSITIES ERROR:", err);
  res.status(500).json({
    error: err.message,
    detail: err
  });
}
});

/* ===== ADD UNIVERSITY ===== */
app.post("/universities", verifyAdmin, async (req, res) => {
  try {
    const { name, shortName, fee, image, highlights } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }

    const result = await pool.query(
      `INSERT INTO universities (name, short_name, fee, image, highlights)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [
        name,
        shortName || null,
        fee || null,
        image || null,
        JSON.stringify(highlights || []),
      ]
    );

    res.status(201).json({
      ...result.rows[0],
      highlights: parseHighlights(result.rows[0].highlights),
    });
  } catch (err) {
    console.error("POST ERROR:", err);
    res.status(500).json({ error: "Insert failed" });
  }
});

/* ===== DELETE ===== */
app.delete("/universities/:id", verifyAdmin, async (req, res) => {
  try {
    const result = await pool.query(
      "DELETE FROM universities WHERE id = $1 RETURNING *",
      [req.params.id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Not found" });
    }

    const image = result.rows[0].image;

    if (image) {
      const filename = path.basename(image);
      const filePath = path.join(uploadsDir, filename);

      try {
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      } catch (err) {
        console.error("File delete error:", err);
      }
    }

    res.json({ success: true });
  } catch (err) {
    console.error("DELETE ERROR:", err);
    res.status(500).json({ error: "Delete failed" });
  }
});

/* ===== UPDATE ===== */
app.put("/universities/:id", verifyAdmin, async (req, res) => {
  try {
    const { name, shortName, fee, image, highlights } = req.body;

    const result = await pool.query(
      `UPDATE universities
       SET name=$1, short_name=$2, fee=$3, image=$4, highlights=$5
       WHERE id=$6
       RETURNING *`,
      [
        name,
        shortName,
        fee,
        image,
        JSON.stringify(highlights || []),
        req.params.id,
      ]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Not found" });
    }

    res.json({
      ...result.rows[0],
      highlights: parseHighlights(result.rows[0].highlights),
    });
  } catch (err) {
    console.error("UPDATE ERROR:", err);
    res.status(500).json({ error: "Update failed" });
  }
});

/* ===== LOGIN ===== */
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const adminUser = process.env.ADMIN_USERNAME || "admin";
  const adminPass = process.env.ADMIN_PASSWORD || "admin123";

  if (username === adminUser && password === adminPass) {
    return res.json({ token: "admin-token" });
  }

  res.status(401).json({ error: "Invalid credentials" });
});






app.post("/send-email", async (req, res) => {
  const { fullName, email, phone, message } = req.body;

  // Validate required fields
  if (!fullName || !email || !phone) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const transporter = createEmailTransporter();

  // ✅ Verify SMTP connection first
  try {
    await transporter.verify();
  } catch (err) {
    console.error("SMTP VERIFY FAILED:", err.message);
    return res.status(500).json({ message: "Email config error: " + err.message });
  }

  const senderEmail = process.env.EMAIL_USER;
  const fromAddress = `"Vietnam MBBS" <${senderEmail}>`;

  const mailOptions = {
    from: fromAddress,
    replyTo: email,
    to: "malathimurugan1411@gmail.com",
    subject: `New Enquiry from ${fullName}`,
    text: `
      Name: ${fullName}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    console.error("SEND EMAIL ERROR:", err.message, err.response);
    res.status(500).json({ message: err.message });
  }
});





app.post("/api/enquiry", async (req, res) => {
  const { fullName, email, phone, state } = req.body;

  if (!fullName || !email || !phone) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const transporter = createEmailTransporter();

    // ✅ verify first
    await transporter.verify();

    const senderEmail = process.env.EMAIL_USER; // ✅ no hardcoded fallback
    const fromAddress = `"Vietnam MBBS" <${senderEmail}>`;

    const mailOptions = {
      from: fromAddress,
      replyTo: email,
      to: "malathimurugan1411@gmail.com",
      subject: "New MBBS Enquiry Form Submission",
      html: `
        <h3>New Enquiry Received</h3>
        <p><b>Name:</b> ${fullName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>State:</b> ${state}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("ENQUIRY EMAIL ERROR:", error.message, error.response);
    res.status(500).json({ message: error.message }); // ✅ return actual error
  }
});



// blogs

app.post("/api/blogs", async (req, res) => {
  const { title, slug, author, date, image, sections } = req.body;

  try {
    const blogResult = await pool.query(
      "INSERT INTO blogs (title, slug, author, date, image) VALUES ($1,$2,$3,$4,$5) RETURNING *",
      [title, slug, author, date, image]
    );

    const blog = blogResult.rows[0];

    for (let sec of sections) {
      await pool.query(
        "INSERT INTO blog_sections (blog_id, heading, content) VALUES ($1,$2,$3)",
        [blog.id, sec.heading, sec.content]
      );
    }

    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/blogs", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        b.*,
        COALESCE(
          json_agg(
            json_build_object(
              'heading', s.heading,
              'content', s.content
            )
          ) FILTER (WHERE s.id IS NOT NULL),
          '[]'
        ) AS sections
      FROM blogs b
      LEFT JOIN blog_sections s ON b.id = s.blog_id
      GROUP BY b.id
      ORDER BY b.id DESC
    `);

    console.log("BLOGS:", result.rows); // debug

    res.json(result.rows);
  } catch (err) {
    console.error("BLOG FETCH ERROR:", err);
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
});



app.delete("/api/blogs/:id", verifyAdmin, async (req, res) => {
  const { id } = req.params;

  try {
    await pool.query(
      "DELETE FROM blog_sections WHERE blog_id=$1",
      [id]
    );

    const deleteBlog = await pool.query(
      "DELETE FROM blogs WHERE id=$1 RETURNING *",
      [id]
    );

    if (deleteBlog.rows.length === 0) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.json({ success: true, deleted: deleteBlog.rows[0] });
  } catch (err) {
    console.error("BLOG DELETE ERROR:", err);
    res.status(500).json({ error: "Failed to delete blog" });
  }
});

app.get("/api/blogs/:slug", async (req, res) => {
  const { slug } = req.params;

  const blogRes = await pool.query(
    "SELECT * FROM blogs WHERE slug=$1",
    [slug]
  );

  if (blogRes.rows.length === 0) {
    return res.status(404).json({ error: "Blog not found" });
  }

  const blog = blogRes.rows[0];

  const sectionsRes = await pool.query(
    "SELECT * FROM blog_sections WHERE blog_id=$1",
    [blog.id]
  );

  blog.sections = sectionsRes.rows;

  res.json(blog);
});


/* =========================
   GLOBAL ERROR HANDLER
========================= */
app.use((err, req, res, next) => {
  console.error("GLOBAL ERROR:", err);
  res.status(500).json({ error: err.message || "Server error" });
});

/* =========================
   START SERVER
========================= */
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});