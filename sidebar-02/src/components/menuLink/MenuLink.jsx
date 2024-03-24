const MenuLink = ({ link, text }) => {
  return (
    <a href={link}>
      <span className="icon"></span>
      <span className="text">{text}</span>
    </a>
  );
};

export default MenuLink;
