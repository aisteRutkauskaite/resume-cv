import "./index.css";

function JobPosition({ jobPosition, companyName, years }) {
  return (
    <div className="work_info">
      <span className="work_name">{jobPosition}</span>
      <span>{companyName}</span>
      <span>{years}</span>
    </div>
  );
}

export default JobPosition;
