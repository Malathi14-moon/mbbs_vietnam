--
-- PostgreSQL database dump
--

\restrict hFgeKDFOvBTGK7IZEluvSPfznN72tadfqnaqlVHmivwlSBKwSlUNlQcAb0Bul9Q

-- Dumped from database version 18.3
-- Dumped by pg_dump version 18.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: blog_sections; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.blog_sections (
    id integer NOT NULL,
    blog_id integer,
    heading text,
    content text
);


ALTER TABLE public.blog_sections OWNER TO postgres;

--
-- Name: blog_sections_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.blog_sections_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.blog_sections_id_seq OWNER TO postgres;

--
-- Name: blog_sections_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.blog_sections_id_seq OWNED BY public.blog_sections.id;


--
-- Name: blogs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.blogs (
    id integer NOT NULL,
    title text NOT NULL,
    slug text NOT NULL,
    author text,
    date text,
    image text
);


ALTER TABLE public.blogs OWNER TO postgres;

--
-- Name: blogs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.blogs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.blogs_id_seq OWNER TO postgres;

--
-- Name: blogs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.blogs_id_seq OWNED BY public.blogs.id;


--
-- Name: universities; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.universities (
    id integer NOT NULL,
    name text NOT NULL,
    short_name text,
    fee text,
    image text,
    highlights jsonb NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.universities OWNER TO postgres;

--
-- Name: universities_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.universities_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.universities_id_seq OWNER TO postgres;

--
-- Name: universities_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.universities_id_seq OWNED BY public.universities.id;


--
-- Name: blog_sections id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.blog_sections ALTER COLUMN id SET DEFAULT nextval('public.blog_sections_id_seq'::regclass);


--
-- Name: blogs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.blogs ALTER COLUMN id SET DEFAULT nextval('public.blogs_id_seq'::regclass);


--
-- Name: universities id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.universities ALTER COLUMN id SET DEFAULT nextval('public.universities_id_seq'::regclass);


--
-- Data for Name: blog_sections; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.blog_sections (id, blog_id, heading, content) FROM stdin;
1	1	A New Era of Medical Excellence at PCTU, Vietnam	Vietnam is becoming a top destination for Indian students seeking affordable, world-class MBBS education. On February 10, 2026, the Ministry of Health licensed the Newlife Tissue Bank at PCTU’s Research Center.
2	1	The First Licensed Tissue Bank in Central Vietnam	Families previously had to send biological samples abroad (Singapore, Thailand). Now, PCTU can receive, process, preserve, and store umbilical cord blood, adipose tissue, and cord tissue locally. Facilities include clean rooms, cryopreservation equipment, and stem cell production labs.
3	1	Why PCTU is the Ultimate Choice for Indian Students	PCTU offers an integrated university-hospital ecosystem with a stem cell research centre, medical museum, and simulation hospital. The US-integrated curriculum is taught by American professors, with strong preparation for NEXT (India) and USMLE (USA) exams.
4	1	Deep Dive: Newlife Tissue Bank & Stem Cell Research Centre	This is the first licensed tissue bank in Central Vietnam, built to international GMP standards with advanced tissue testing and exosome technologies. Stem cells can help treat more than 80 diseases, including leukemia, diabetes, COPD, osteoarthritis, and neurodegenerative conditions.
5	1	Impact on MBBS Students	Students gain hands-on exposure to regenerative medicine and biotechnology. Early clinical training provides a competitive edge for NEXT and USMLE. Professors actively research cellular therapies, enriching student learning.
6	1	Unmatched Practical Exposure	Simulation hospital for safe practice before treating real patients. Medical museum for anatomical and historical study. Access to 25+ cadavers for dissection (unlike silicon models used elsewhere).
7	1	USMLE-Integrated Curriculum	English-medium, NMC-compliant curriculum. Subjects taught by American professors. Designed to prepare students for both India and global medical careers.
8	1	Clinical Infrastructure: 9 Hospitals	PCTU operates 9 teaching hospitals with 1,500+ beds. Students gain exposure to diverse cases relevant to India’s disease spectrum. Collaborations with Stanford University and UCSF ensure world-class training.
9	1	Safety and Support	Vietnam is considered one of the safest countries for Indian students. Aieraa Overseas Studies is the only authorized company in India for MBBS admissions in Vietnam. Contact: +91 9344141424 for guidance.
10	2	Introduction: Why Vietnam for MBBS	Vietnam has emerged as one of the most promising destinations for Indian students pursuing MBBS abroad. With affordable tuition fees, tropical climate, cultural familiarity, and high safety standards, Vietnam offers a strong return on investment. All universities listed here are NMC-compliant, offering a 54-month course plus 12-month internship. Teaching is entirely in English, and Indian hostel and mess facilities ensure comfort for students.
11	2	Dai Nam University (DNU) – Hanoi Heavyweight	Located in the capital city Hanoi, Dai Nam University was established in 2007 and has quickly become a leading private medical institution. The university is affiliated with more than 16 hospitals across Hanoi, giving students extensive clinical exposure. It also partners with Hanoi Medical University, ranked among the top medical schools in Asia. DNU is equipped with advanced diagnostic technologies such as the 2560-slice CT Scan machine. The curriculum is NEXT-focused, with Indian faculty guiding students through exam preparation. Fees: Tuition ₹3,50,000/year, Hostel ₹80,000–1,00,000/year, Total package for 6 years ₹33–35 Lakhs.
12	2	Phan Chau Trinh University (PCTU) – Clinical & Research Leader	Situated in Da Nang, PCTU is renowned for its cutting-edge infrastructure and USMLE-integrated curriculum. It is the only university in Vietnam with a Simulation Hospital, allowing students to practice safely before treating real patients. The Medical Museum provides hands-on anatomical and pathology study, while the Stem Cell Research Centre offers exposure to regenerative medicine. PCTU owns 9 hospitals with over 1,500 beds, ensuring unmatched clinical training. Collaborations with Stanford University and UCSF bring global expertise to the classroom. Fees: Tuition ₹4,80,000/year, Hostel ₹1,50,000–1,90,000/year, Total package for 6 years ₹43–45 Lakhs.
13	2	Can Tho University of Medicine & Pharmacy (CTUMP) – Government Prestige	Established in 1979, CTUMP is a government-run institution located in Can Tho City, the heart of the Mekong Delta. With a sprawling 83-acre campus and more than 45 years of academic heritage, CTUMP is a symbol of prestige and stability. The university operates its own 500-bed teaching hospital, serving over 30,000 outpatients monthly. Clinical training begins as early as the second year, giving students early exposure to real-world cases. CTUMP also maintains strong international research collaborations. Fees: Tuition ₹5,20,000–5,50,000/year, Hostel ₹1,50,000–2,00,000/year, Total package for 6 years ₹47–50 Lakhs.
14	2	Buon Ma Thuot Medical University (BMU) – Modern Medical Hub	Located in Buon Ma Thuot in the Central Highlands, BMU is a modern private medical university with rapidly growing reputation. It operates a 500-bed multi-specialty hospital on campus, handling over 33,000 outpatients monthly and 20,000 surgeries annually. The university is affiliated with 12 hospitals, ensuring diverse internship opportunities. BMU has a strong Indian student community with more than 100 students already enrolled, and it offers merit-based scholarships to deserving candidates. Fees: Tuition ₹4,00,000/year, Hostel ₹1,00,000–1,20,000/year, Total package for 6 years ₹39–41 Lakhs.
15	2	Comparison & Decision Guide	Among the top four universities, Dai Nam University is the most budget-friendly option, ideal for students seeking affordability with capital city exposure. Phan Chau Trinh University stands out for advanced technology, simulation hospital, and USMLE preparation. Can Tho University offers government prestige and stability, making it attractive for students who value heritage and credibility. Buon Ma Thuot University provides modern infrastructure, high patient flow, and scholarships, making it a balanced choice for practical exposure. Students should choose based on career goals, financial planning, and desired clinical exposure.
16	3	Introduction: The 2026 MBBS Dilemma	Thousands of Indian students unable to secure government seats or afford private colleges look abroad. Russia, Georgia, and Uzbekistan have been traditional destinations, but Vietnam has emerged as a new contender. The choice is no longer about quantity but quality — Vietnam offers a niche, high-standard education with around 400 Indian students enrolled.
17	3	Clinical Exposure & Cadaver Training	Russia, Georgia, and Uzbekistan often restrict cadaver use due to legal or religious reasons, relying on silicon models and digital simulations. In contrast, Vietnam universities like PCTU and Can Tho offer real cadaver dissections from the first year, combined with 3D anatomy tables. This hands-on approach builds surgical confidence unmatched by simulation-only training.
18	3	NEXT Exam Readiness & Disease Spectrum	Russia and Georgia’s cold climates expose students to diseases like frostbite and tick-borne encephalitis, irrelevant to India. Vietnam shares a tropical climate similar to India, with cases of Malaria, Dengue, Typhoid, and Tuberculosis. This ensures students are NEXT-ready, as they train on the same disease spectrum they will face in Indian hospitals.
19	3	Language Barrier: English vs Bilingual	In Russia and CIS countries, courses are often bilingual — English in early years, but local languages (Russian, Mandarin) dominate clinical rotations. This weakens practical training. Vietnam offers 100% English-medium instruction, with textbooks, exams, and faculty all in English. Students learn basic Vietnamese for daily life, but academics remain fully English-focused.
20	3	Travel & Connectivity	Russia and Georgia require 10–15 hours of travel with costly tickets (₹60,000–90,000 round trip). Vietnam is only 4–4.5 hours away with affordable flights (₹18,000–25,000 round trip). Parents can easily visit, and Aieraa organizes dedicated Parents’ Tours for inspection of hostels and universities. Over six years, students save around ₹3 Lakhs in travel costs by choosing Vietnam.
21	3	Living Conditions & Hostel Facilities	In Russia and Georgia, students often face the “Cooking Trap” — living in private apartments, spending hours cooking, and surviving on poor nutrition. Vietnam eliminates this struggle with Aieraa-managed hostels. Indian chefs provide North Indian, South Indian, and Andhra-style menus daily, with vegetarian, non-vegetarian, and Halal options. Hostels are safe, separate for boys and girls, and equipped with modern amenities like Wi-Fi and air conditioning.
22	3	Geopolitics & Safety	Russia and Ukraine face instability, sanctions, and currency volatility, disrupting education. Vietnam, by contrast, is politically stable and safe, with strong India-Vietnam diplomatic ties. The Global Peace Index ranks Vietnam high for safety, especially for women. Students can focus on studies without geopolitical anxiety.
23	3	Financial Breakdown: Tuition & Hidden Costs	Vietnam tuition fees range from ₹21–30 Lakhs for the entire 6-year course, with no donations or capitation fees. Travel costs are significantly lower compared to Russia/Georgia. Aieraa offers a one-time processing package (~₹2.86 Lakhs) covering visa, flights, and documentation, avoiding recurring hidden charges. Overall, Vietnam is the most cost-effective option.
24	3	Conclusion: Why Vietnam is the Future	Vietnam offers US-aligned curriculum, real cadaver training, tropical disease exposure, English-medium teaching, affordable travel, safe living conditions, and political stability. While Russia and Georgia remain crowded with mass-education models, informed students are choosing Vietnam for quality, NEXT readiness, and financial advantage. In 2026, Vietnam is the smart choice for Indian MBBS aspirants.
\.


--
-- Data for Name: blogs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.blogs (id, title, slug, author, date, image) FROM stdin;
1	PCTU’s New Tissue Bank: A Revolution for MBBS at Phan Chau Trinh University	pctu-tissue-bank	AIERAA	January 2025	https://pctu.edu.vn/vnt_upload/admissions/04_2024/z6122825220636_14828c21337500c2943c44112c6a0468.jpg
2	Top 4 Medical Universities in Vietnam for Indian Students (2026): Fees, Ranking & Reviews	top-4-medical-universities-vietnam-2026	Barat Vasireddy	January 2026	https://www.aubsp.com/wp-content/uploads/2024/03/study-in-vietnam.jpg
3	MBBS in Vietnam vs Russia, Uzbekistan & Georgia: Comparison 2026	mbbs-vietnam-vs-russia-uzbekistan-georgia-2026	Bharat Vasireddy	January 2026	https://ichef.bbci.co.uk/news/1024/branded_news/339A/production/_132701231_ukraine_maps_piece_promo_976x549-2x-nc.png
\.


--
-- Data for Name: universities; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.universities (id, name, short_name, fee, image, highlights, created_at) FROM stdin;
11	Nam can tho university	NCTU	290000	http://localhost:5000/uploads/uni_1775824966864.webp	[{"icon": "📘", "text": "Wide range of courses"}, {"icon": "🏥", "text": "Strong focus on medical & health sciences"}, {"icon": "👩‍⚕️", "text": "Practical & industry-based learning"}, {"icon": "✈️", "text": "International & modern learning environment"}, {"icon": "🎓", "text": "Scholarship & financial support"}]	2026-04-10 18:12:46.986917
1	Can Tho University	CTUMP	₹4 Lakhs/Year	https://www.ctu.edu.vn/images/2022/08/12/hitech-2.jpg	[{"icon": "🎓", "text": "43-Year-Old University"}, {"icon": "✅", "text": "NMC-Recognised for Indian Students"}, {"icon": "📘", "text": "Indian Curriculum"}, {"icon": "🩺", "text": "Early Clinical Exposure from 1st Year"}, {"icon": "🏨", "text": "Luxurious Hostel with Indian Food"}]	2026-04-09 13:35:08.576612
2	Dai Nam University	DNU	₹3.5 Lakhs/Year	https://atm273446-s3user.vcos.cloudstorage.com.vn/dhdainam/asset/images/news/497529472_1116084437213279_3837768097926410454_n_1.jpg	[{"icon": "📜", "text": "NMC-compliant English-medium MBBS Program"}, {"icon": "🏥", "text": "Affiliated with 16+ Hospitals for Clinical Training"}, {"icon": "🧠", "text": "NEXT-Focused Curriculum & Indian Faculty Support"}, {"icon": "🍛", "text": "Hostel with Indian Food & Comfortable Living"}, {"icon": "✈️", "text": "Close to India — ~4-Hour Flight"}]	2026-04-09 13:35:08.576612
3	Buon Ma Thuot Medical University	BMU	₹3.8 Lakhs/Year	https://atlasmentor.com/wp-content/uploads/2024/07/Buon-Ma-Thuot-Medical-University-Vietnam.jpg	[{"icon": "🏥", "text": "500+ bed multi-specialty teaching hospital on campus"}, {"icon": "👩‍⚕️", "text": "Affiliated with 12+ hospitals"}, {"icon": "📘", "text": "English-medium MBBS aligned with NMC"}, {"icon": "✈️", "text": "Around 5 hrs flight from India"}, {"icon": "🍛", "text": "Separate hostels with Indian food"}]	2026-04-09 13:35:08.576612
4	Phan Chau Trinh University	PCTU	₹7.2 Lakhs/Year	https://medilearn.spatialdecisions.com/wp-content/uploads/2025/07/dai-hoc-phan-chau-trinh.jpg	[{"icon": "🏥", "text": "Multi-specialty hospitals with 1500+ beds"}, {"icon": "👩‍⚕️", "text": "Training in 9 hospitals + internships"}, {"icon": "📘", "text": "100% English medium MBBS"}, {"icon": "✈️", "text": "Around 4.5 hrs flight from India"}, {"icon": "🍛", "text": "Hostels with Indian food"}]	2026-04-09 13:35:08.576612
\.


--
-- Name: blog_sections_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.blog_sections_id_seq', 27, true);


--
-- Name: blogs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.blogs_id_seq', 5, true);


--
-- Name: universities_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.universities_id_seq', 11, true);


--
-- Name: blog_sections blog_sections_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.blog_sections
    ADD CONSTRAINT blog_sections_pkey PRIMARY KEY (id);


--
-- Name: blogs blogs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.blogs
    ADD CONSTRAINT blogs_pkey PRIMARY KEY (id);


--
-- Name: blogs blogs_slug_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.blogs
    ADD CONSTRAINT blogs_slug_key UNIQUE (slug);


--
-- Name: universities universities_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.universities
    ADD CONSTRAINT universities_pkey PRIMARY KEY (id);


--
-- Name: blog_sections blog_sections_blog_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.blog_sections
    ADD CONSTRAINT blog_sections_blog_id_fkey FOREIGN KEY (blog_id) REFERENCES public.blogs(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

\unrestrict hFgeKDFOvBTGK7IZEluvSPfznN72tadfqnaqlVHmivwlSBKwSlUNlQcAb0Bul9Q

