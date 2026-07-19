import cropbridge from "../assets/images/projects/cropbridge.png";
import placement from "../assets/images/projects/placement.png";
import portfolio from "../assets/images/projects/portfolio.png";

const projects = [
  {
    id: 1,
    title: "CropBridge",
    category: "Full Stack",
    image: cropbridge,
    description:
      "A platform that directly connects farmers with factories by eliminating middlemen.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "AWS"
    ],
    github: "https://github.com/vissamsettinarendra-hub/CropBridge",
    demo: ""
  },

  {
    id: 2,
    title: "Placement Management System",
    category: "React",
    image: placement,
    description:
      "Student placement management portal with company and student modules.",
    technologies: [
      "React",
      "CSS",
      "JavaScript"
    ],
    github: "https://github.com/vissamsettinarendra-hub/Placement-Management-System1",
    demo: ""
  },

  {
    id: 3,
    title: "Portfolio Website",
    category: "Frontend",
    image: portfolio,
    description:
      "Modern responsive portfolio built using React, Framer Motion and modern UI design.",
    technologies: [
      "React",
      "CSS",
      "JavaScript",
      "Framer Motion"
    ],
    github: "https://github.com/vissamsettinarendra-hub/FeaturePortfolio",
    demo: ""
  }
];

export default projects;