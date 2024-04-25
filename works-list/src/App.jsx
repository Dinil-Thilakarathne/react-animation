import { useState, useEffect } from "react";
import "./App.css";
import {
  useAnimate,
  stagger,
  usePresence,
  AnimatePresence,
} from "framer-motion";

function App() {
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();
  const [type, setType] = useState(0);
  const featuredWorkList = [
    {
      projectName: "EcoTech Website Redesign",
      companyName: "GreenTech Solutions",
      category: "Web Design",
    },
    {
      projectName: "eCommerce Platform Development",
      companyName: "Fashionista Boutique",
      category: "Web Development",
    },
    {
      projectName: "Creative Portfolio Website",
      companyName: "Artistic Designs Studio",
      category: "Web Design",
    },
    {
      projectName: "Custom CRM System",
      companyName: "Global Enterprises Inc.",
      category: "Web Development",
    },
    {
      projectName: "Responsive Mobile App Design",
      companyName: "Tech Innovations Ltd.",
      category: "Web Design",
    },
  ];

  const latestWorkList = [
    {
      projectName: "Corporate Website Revamp",
      companyName: "Corporate Solutions Ltd.",
      category: "Web Design",
    },
    {
      projectName: "SaaS Application Development",
      companyName: "CloudTech Solutions",
      category: "Web Development",
    },
    {
      projectName: "Personal Blog Redesign",
      companyName: "Blogger's World",
      category: "Web Design",
    },
    {
      projectName: "E-Learning Platform Development",
      companyName: "Education Hub Inc.",
      category: "Web Development",
    },
    {
      projectName: "Travel Agency Website",
      companyName: "Wanderlust Adventures",
      category: "Web Design",
    },
  ];

  useEffect(() => {
    console.log(isPresent);
    if (isPresent) {
      const enterAnimation = async () => {
        await animate(
          "li",
          { opacity: [0, 1], y: [100, 0] },
          { duration: 1.5, delay: stagger(0.1), ease: [0.6, 0.14, 0.15, 0.86] }
        );
      };
      enterAnimation();
    } else {
      const exitAnimation = async () => {
        await animate("li", { y: [0, 100] }, { duration: 1.5 });
        safeToRemove;
      };
      exitAnimation();
    }
  }, [type, isPresent]);

  return (
    <>
      <div className="btn-wrapper">
        <button
          className={"btn" + (type === 0 ? " active" : "")}
          onClick={() => {
            setType(0);
          }}
        >
          Latest
        </button>
        <span>/</span>
        <button
          className={"btn" + (type === 1 ? " active" : "")}
          onClick={() => setType(1)}
        >
          Featured
        </button>
      </div>
      <ul className="project-list" ref={scope}>
        {type === 0
          ? latestWorkList.map((item) => {
              return <ProjectListItem key={Math.random()} data={item} />;
            })
          : featuredWorkList.map((item) => {
              return <ProjectListItem key={Math.random()} data={item} />;
            })}
      </ul>
    </>
  );
}

export default App;

const ProjectListItem = ({ data }) => {
  const { projectName, companyName, category } = data;
  return (
    <AnimatePresence>
      <li className="project-list__item">
        <div className="project-company">
          <span className="text">{companyName}</span>
          <span className="cloned-text">{companyName}</span>
        </div>
        <div className="project-name">
          <span className="text">{projectName}</span>
          <span className="cloned-text">{projectName}</span>
        </div>
        <div className="project-tag">
          <span className="text">{category}</span>
          <span className="cloned-text">{category}</span>
        </div>
      </li>
    </AnimatePresence>
  );
};
