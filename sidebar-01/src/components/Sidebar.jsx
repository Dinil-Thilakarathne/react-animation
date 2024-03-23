import { useState } from "react";
import "./style.css";

function Sidebar() {
  const [isHover, setIsHover] = useState(false);

  return (
    <aside className={`sidebar ${isHover ? "active" : ""}`}>
      <div className="open-btn" onClick={() => setIsHover((prev) => !prev)}>
        <svg
          width="10"
          height="18"
          viewBox="0 0 10 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.999828 17.7501C1.19889 17.751 1.38994 17.6717 1.52983 17.5301L9.52983 9.53009C9.82228 9.23727 9.82228 8.76291 9.52983 8.47009L1.52983 0.470091C1.23432 0.194732 0.773819 0.202857 0.488207 0.488469C0.202595 0.774081 0.194469 1.23458 0.469829 1.53009L7.93983 9.00009L0.469829 16.4701C0.177375 16.7629 0.177375 17.2373 0.469829 17.5301C0.609713 17.6717 0.800762 17.751 0.999828 17.7501Z"
            fill="black"
          />
        </svg>
      </div>
      <div className="wrapper">
        <div className="top__wrapper">
          <div className="header">
            <span className="header-logo">
              <img src="/logo.svg" alt="" />
            </span>
            <div className="header-details">
              <span className="header-name">Lorem, ipsum.</span>
              <span className="header-email">lorem@gmail.com</span>
            </div>
          </div>
          <div className="search-box">
            <span className="search-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                  stroke="#2A2A2E"
                  strokeWidth="1.5"
                />
                <path
                  d="M16.5303 15.4697L16 14.9393L14.9393 16L15.4697 16.5303L16.5303 15.4697ZM18.9697 20.0303C19.2626 20.3232 19.7374 20.3232 20.0303 20.0303C20.3232 19.7374 20.3232 19.2626 20.0303 18.9697L18.9697 20.0303ZM15.4697 16.5303L18.9697 20.0303L20.0303 18.9697L16.5303 15.4697L15.4697 16.5303Z"
                  fill="#2A2A2E"
                />
              </svg>
            </span>
            <input type="text" name="searchBox" placeholder="Search..." />
          </div>
          <ul className="nav-menu">
            <li className="nav-menu__item">
              <a href="/" className="nav-menu__link">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 19H3C1.89543 19 1 18.1046 1 17V10.2969C1 9.78521 1.19615 9.29295 1.54809 8.92146L8.54809 1.53257C9.33695 0.699887 10.663 0.699886 11.4519 1.53257L18.4519 8.92146C18.8038 9.29295 19 9.78521 19 10.2969V17C19 18.1046 18.1046 19 17 19H12M8 19V13.5C8 13.2239 8.22386 13 8.5 13H11.5C11.7761 13 12 13.2239 12 13.5V19M8 19H12"
                    strokeWidth="1.5"
                  />
                </svg>
                <span>Home</span>
              </a>
            </li>
            <li className="nav-menu__item">
              <a href="/" className="nav-menu__link">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="2"
                    stroke="#1F1F22"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M8 16V12"
                    stroke="#1F1F22"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 16V10"
                    stroke="#1F1F22"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M16 16V8"
                    stroke="#1F1F22"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span>Revenue</span>
              </a>
            </li>
            <li className="nav-menu__item">
              <a href="/" className="nav-menu__link">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.27956 10.0666C7.48354 7.58096 9.58375 5.60566 12.0777 5.59039C14.5489 5.57525 16.5664 7.53272 16.8165 9.99129C16.9705 11.5062 17.397 12.9015 18.2533 14.387C19.1224 15.8946 18.1936 18 16.4534 18H7.70427C5.95963 18 5.05153 15.842 5.93003 14.3346C6.77131 12.8912 7.15939 11.5308 7.27956 10.0666Z"
                    stroke="#1F1F22"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 3V5"
                    stroke="#1F1F22"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18"
                    stroke="#1F1F22"
                    strokeWidth="1.5"
                  />
                </svg>
                <span>Notifications</span>
              </a>
            </li>
            <li className="nav-menu__item">
              <a href="/" className="nav-menu__link">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.3552 22 21.7272 17.7905 21.9877 12.4999C22.0013 12.2241 21.7761 12 21.5 12H12.5C12.2239 12 12 11.7761 12 11.5V2.5C12 2.22386 11.7759 1.9987 11.5001 2.01228C6.20948 2.27276 2 6.64479 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#1F1F22"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M21.9846 9.49991C21.7367 5.47997 18.52 2.26332 14.5001 2.01538C14.2245 1.99838 14 2.22386 14 2.5V9.5C14 9.77614 14.2239 10 14.5 10H21.5C21.7761 10 22.0016 9.77553 21.9846 9.49991Z"
                    stroke="#1F1F22"
                    strokeWidth="1.5"
                  />
                </svg>
                <span>Analytics</span>
              </a>
            </li>
            <li className="nav-menu__item">
              <a href="/" className="nav-menu__link">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 10V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V10M3 10L4.58555 4.45056C4.83087 3.59196 5.61564 3 6.5086 3H12M3 10H12M21 10L19.4144 4.45056C19.1691 3.59195 18.3844 3 17.4914 3H12M21 10H12M12 3V10"
                    stroke="#1F1F22"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M5.5 17.5H12"
                    stroke="#1F1F22"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span>Inventory</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer">
          <a href="/" className="nav-menu__link">
            <span className="footer-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 12L19 12M19 12L17 10M19 12L17 14M15 16L15 19C15 20.1046 14.1046 21 13 21L7 21C5.89543 21 5 20.1046 5 19L5 5C5 3.89543 5.89543 3 7 3L13 3C14.1046 3 15 3.89543 15 5L15 8"
                  stroke="#1F1F22"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="footer-text">Logout</span>
          </a>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
