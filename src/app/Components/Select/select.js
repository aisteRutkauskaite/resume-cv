import "./select.css";

function Select({ options = [] }) {
  return (
    <select className="option">
      {options.map((optionData) => (
        <option {...optionData} />
      ))}
    </select>
  );
}

export default Select;
