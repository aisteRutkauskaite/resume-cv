import "./index.css";

function Pill({ children, color }) {
  const assignedColor = ["green", "yellow", "red"].includes(color)
    ? color
    : "grey";
  return <span className={`personal_skill ${assignedColor}`}>{children}</span>;
}

export default Pill;
