import "./index.css";
import Divider from "../Divider/index.js";

function ContentBox({ children, title }) {
  return (
    <div className="content_box">
      <h3>{title}</h3>
      <Divider />
      <div className="content">{children}</div>
    </div>
  );
}

export default ContentBox;
