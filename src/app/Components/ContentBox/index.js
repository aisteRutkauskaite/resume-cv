import "./index.css";
import Divider from "../Divider/index.js";

function ContentBox({ children, title }) {
  return (
    <div className="skills">
      <h3>{title}</h3>
      <Divider />
      <div className="personal_skills">{children}</div>
    </div>
  );
}

export default ContentBox;
