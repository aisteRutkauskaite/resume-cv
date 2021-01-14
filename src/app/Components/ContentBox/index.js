import "./index.css";
import Divider from "../Divider";

function ContentBox({ children, title }) {
  return (
    <div className="content_box">
      <h3>{title}</h3>
      <Divider isFancy />
      <div className="content">{children}</div>
    </div>
  );
}

export default ContentBox;
