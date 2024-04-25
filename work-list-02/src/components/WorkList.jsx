export default function WorkList() {
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
  return (
    <div>
      <div className="header">
        <button className="btn list-btn">List</button>
        <button className="btn grid-btn">Grid</button>
      </div>

      <ul>
        {WorkListData.map((item) => {
          return <ProjectListItem key={item.projectName} data={item} />;
        })}
      </ul>
    </div>
  );
}

const ProjectListItem = ({ data }) => {
  const { projectName, category, imgs } = { data };
  return (
    <li className="project-list__item">
      <span className="project-category">{category}</span>
      <span className="project-name">{projectName}</span>
      <div className="project-imgs">
        {imgs.map((img) => (
          <img src={img} alt={projectName} key={projectName} />
        ))}
      </div>
    </li>
  );
};
