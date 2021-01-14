import "./index.css";

function Divider({ isFancy, isShort }) {
  const className = isFancy ? "divider_fancy" : "";
  const classShort = isShort ? "divider_simple" : "divider_fancy";
  return (
    <div className="divider_simple">
      <div className={classShort}></div>
    </div>
  );
}

export default Divider;
