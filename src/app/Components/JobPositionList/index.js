import "./index.css";
import List from "../List/index.js";

function JobPosition({ jobPosition, companyName, years, children }) {
  return (
    <div className="work_position">
      <div className="work_info">
        <span className="work_name">{jobPosition}</span>
        <span>{companyName}</span>
        <span>{years}</span>
      </div>
      {children}
    </div>
  );
}

export default JobPosition;
