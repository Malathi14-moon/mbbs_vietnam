import { useParams } from "react-router-dom";

const UniversityDetails = () => {
  const { slug } = useParams();

  return (
    <div>
      <h1>University Page: {slug}</h1>
    </div>
  );
};

export default UniversityDetails;