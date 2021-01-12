import "./index.css";

function List({ li = [] }) {
  return (
    <ul>
      {li.map((liData, index) => (
        <li key={index} {...liData} />
      ))}
    </ul>
  );
}

export default List;
