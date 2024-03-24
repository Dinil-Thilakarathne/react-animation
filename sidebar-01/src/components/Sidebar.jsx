import { useState } from "react";
import "./style.css";
import logo from "/logo.svg";
import { NAVLINKS } from "../data";

function Sidebar() {
  const [isHover, setIsHover] = useState(false);

  return (
    <aside className={`sidebar ${isHover ? "active" : ""}`}>
      <div className="open-btn" onClick={() => setIsHover((prev) => !prev)}>
        <span className="material-symbols-outlined">chevron_right</span>
      </div>
      <div className="wrapper">
        <div className="top__wrapper">
          <div className="header">
            <span className="header-logo">
              <img src={logo} alt="" />
            </span>
            <div className="header-details">
              <span className="header-name">Lorem, ipsum.</span>
              <span className="header-email">lorem@gmail.com</span>
            </div>
          </div>
          <div className="search-box">
            <span className=" material-symbols-outlined search-icon">
              search
            </span>
            <input type="text" name="searchBox" placeholder="Search..." />
          </div>
          <nav className="sidebar-nav">
            <ul className="nav-menu">
              {NAVLINKS.map((item) => {
                return (
                  <li key={item.name} className="nav-menu__item">
                    <a href={item.path} className="nav-menu__link">
                      <span className="material-symbols-outlined">
                        {item.icon}
                      </span>
                      <span className="text">{item.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="footer">
          <a href="/" className="nav-menu__link">
            <span className="material-symbols-outlined footer-icon">
              logout
            </span>
            <span className="footer-text">Logout</span>
          </a>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
