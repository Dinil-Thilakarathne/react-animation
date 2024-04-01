const MenuLink = ({ link, text }) => {
  return (
    <a href={link} className="menu-link">
      <span className="text">{text}</span>
    </a>
  );
};

export default MenuLink;
