import "./index.css";

function ListEducation({ school, years, degree }) {
  return (
    <div className="school">
      <span>{school}</span>
      <span>{years}</span>
      <span>{degree}</span>
    </div>
  );
}

export default ListEducation;
