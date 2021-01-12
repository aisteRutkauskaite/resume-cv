import "./select.css";

function Select({ options = [] }) {
  return (
    <select className="option">
      {options.map((optionData) => (
        <option key={optionData.value} {...optionData} />
      ))}
    </select>
  );
}

export default Select;
