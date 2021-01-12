import "./index.css";

function Link({ link, image = "", children }) {
  return (
    <div className="link_block">
      <a className="link_text" href={link}>
        <img src={image} className="link_logo" alt="logo" />
        {children}
      </a>
    </div>
  );
}

export default Link;
