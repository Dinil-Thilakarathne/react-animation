import { useState } from "react";
import { motion } from "framer-motion";
import MenuLink from "../menuLink/MenuLink";
import "./sidebar.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
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
    <>
      <div
        className="sidebar-btn"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span className="material-symbols-outlined icon">menu</span>
      </div>
      <motion.aside
        className="sidebar"
        initial={{ clipPath: "circle(0% at 0 0)" }}
        animate={
          isOpen
            ? { clipPath: "circle(200% at 0 0)" }
            : { clipPath: "circle(0% at 0 0)" }
        }
        transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
      >
        <div className="sidebar-wrapper">
          <nav className="sidebar-menu">
            <ul>
              {links.map((item) => (
                <li key={item.name}>
                  <MenuLink link={item.path} text={item.name} />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </motion.aside>
    </>
  );
}

export default Sidebar;
