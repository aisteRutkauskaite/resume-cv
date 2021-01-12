import "./index.css";

function Contacts({ title, children }) {
  return (
    <div className="contact_block">
      <div className="contact_rectangle">
        <h1 className="contact_title">{title}</h1>
        <div className="contact_text_container">{children}</div>
      </div>
    </div>
  );
}

export default Contacts;
