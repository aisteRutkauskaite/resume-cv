import "./select.css";

function Select({ options = [], onChange }) {
  return (
    <select
      className="option"
      onChange={(event) => {
        onChange(event.target.value);
      }}
    >
      {options.map((optionData) => (
        <option key={optionData.value} {...optionData} />
      ))}
    </select>
  );
}

export default Select;
