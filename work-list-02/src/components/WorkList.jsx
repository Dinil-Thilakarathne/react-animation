import { useState, useEffect } from "react";
import "./worklist.css";
import {
  useAnimate,
  stagger,
  usePresence,
  AnimatePresence,
} from "framer-motion";

export default function WorkList() {
  const [scope, animate] = useAnimate();
  const [type, setType] = useState(0);
  const WorkListData = [
    {
      projectName: "EcoTech Website Redesign",
      companyName: "GreenTech Solutions",
      category: "Web Design",
      imgs: ["img-1.png", "img-2.png", "img-3.png", "img-4.png"],
    },
    {
      projectName: "eCommerce Platform Development",
      companyName: "Fashionista Boutique",
      category: "Web Development",
      imgs: ["img-1.png", "img-2.png", "img-3.png", "img-4.png"],
    },
    {
      projectName: "Creative Portfolio Website",
      companyName: "Artistic Designs Studio",
      category: "Web Design",
      imgs: ["img-1.png", "img-2.png", "img-3.png", "img-4.png"],
    },
    {
      projectName: "Custom CRM System",
      companyName: "Global Enterprises Inc.",
      category: "Web Development",
      imgs: ["img-1.png", "img-2.png", "img-3.png", "img-4.png"],
    },
    {
      projectName: "Responsive Mobile App Design",
      companyName: "Tech Innovations Ltd.",
      category: "Web Design",
      imgs: ["img-1.png", "img-2.png", "img-3.png", "img-4.png"],
    },
  ];

  useEffect(() => {
    if (type) {
      const enterAnimation = async () => {
        await animate(
          "li",
          { opacity: [0, 1], y: [100, 0] },
          { duration: 1.5, delay: stagger(0.1), ease: [0.6, 0.14, 0.15, 0.86] }
        );
      };
      enterAnimation();
    } else {
      const enterAnimation = async () => {
        animate(
          ".project-details",
          { opacity: [0, 1], y: [50, 0] },
          { duration: 1, delay: stagger(0.1), ease: [0.6, 0.14, 0.15, 0.86] }
        );
        await animate(
          ".project-img",
          { opacity: [0, 1], y: [50, 0] },
          { duration: 0.5, delay: stagger(0.1), ease: [0.6, 0.14, 0.15, 0.86] }
        );
      };
      enterAnimation();
    }
  }, [type]);

  return (
    <div>
      <div className="header">
        <button className="btn list-btn" onClick={() => setType(0)}>
          List
        </button>
        <button className="btn grid-btn" onClick={() => setType(1)}>
          Grid
        </button>
      </div>

      <ul
        className={"project-list" + (type == 0 ? " list" : " grid")}
        ref={scope}
      >
        {WorkListData.map((item) => {
          return <ProjectListItem key={item.projectName} data={item} />;
        })}
      </ul>
    </div>
  );
}

const ProjectListItem = ({ data }) => {
  const { projectName, category, imgs } = data;
  return (
    <li className="project-list__item">
      <div className="project-details">
        <span className="project-name">{projectName}</span>
        <span className="project-category">({category})</span>
      </div>
      <div className="project-imgs">
        {imgs.map((img) => (
          <img
            src={img}
            alt={projectName}
            key={projectName}
            className="project-img"
          />
        ))}
      </div>
    </li>
  );
};
