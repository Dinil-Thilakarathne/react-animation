import { useState, useRef, useEffect } from "react";
import "./dropdown.css";
import { motion } from "framer-motion";

function DropDown() {
  const dropDown = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const list = ["item1", "item2", "item3", "item4"];

  const itemAni = {
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.3,
      },
    }),
    hidden: {
      opacity: 0,
    },
  };

  function menuToggle() {
    setIsOpen(!isOpen);
    dropDown.current.classList.toggle("active");
  }

  useEffect(() => {}, [isOpen]);

  return (
    <div className="drop-down" ref={dropDown}>
      <div className="drop-down__header" onClick={menuToggle}>
        <span>Drop down</span>
        <span className="icon">
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="svg-icon"
          >
            <path
              d="M1.58921 0.744078C1.26378 0.418641 0.736141 0.418641 0.410704 0.744078C0.0852668 1.06951 0.0852668 1.59715 0.410704 1.92259L5.4107 6.92259C5.73614 7.24803 6.26378 7.24803 6.58921 6.92259L11.5892 1.92259C11.9147 1.59715 11.9147 1.06951 11.5892 0.744078C11.2638 0.418641 10.7361 0.418641 10.4107 0.744078L5.99996 5.15482L1.58921 0.744078Z"
              fill="#313144"
            />
          </svg>
        </span>
      </div>
      <ul className="drop-down__list">
        {isOpen &&
          list.map((item, i) => {
            return (
              <motion.li
                key={item}
                className="drop-down__list-item"
                custom={i}
                initial="hidden"
                animate="visible"
                variants={itemAni}
                onClick={menuToggle}
              >
                {item}
              </motion.li>
            );
          })}
      </ul>
    </div>
  );
}

export default DropDown;
