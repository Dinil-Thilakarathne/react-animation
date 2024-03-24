import MenuLink from "../menuLink/MenuLink";

function Sidebar() {
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  return (
    <aside className="sidebar">
      <div className="sidebar-wrapper">
        <ul>
          {links.map((item) => (
            <li key={item.name}>
              <MenuLink link={item.path} text={item.name} />
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
