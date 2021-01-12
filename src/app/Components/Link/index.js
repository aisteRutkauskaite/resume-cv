import "./index.css";

function Link({ link, image = "", children }) {
  return (
    <div className="social_item">
      <a className="logo_text" href={link}>
        <img src={image} className="logo" alt="logo" />
        {children}
      </a>
    </div>
  );
}

export default Link;
