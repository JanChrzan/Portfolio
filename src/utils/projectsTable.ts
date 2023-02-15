import sample from "../assets/images/sample.svg";

type ProjectTable = {
  img: string;
  name: string;
  technologies: string;
  githubLink: string;
  liveLink: string;
};

export const projectsTable: ProjectTable[] = [
  {
    img: sample,
    name: "Portfolio",
    technologies: "Typescript, React, Tailwind, Express, MongoDB",
    githubLink: "https://github.com",
    liveLink: "https://github.com",
  },
  {
    img: sample,
    name: "Sample",
    technologies: "Express, MongoDB",
    githubLink: "https://github.com",
    liveLink: "https://github.com",
  },
  {
    img: sample,
    name: "Sample",
    technologies: "React, Tailwind",
    githubLink: "https://github.com",
    liveLink: "https://github.com",
  },
  {
    img: sample,
    name: "Sample",
    technologies: "React, Tailwind",
    githubLink: "https://github.com",
    liveLink: "https://github.com",
  },
  {
    img: sample,
    name: "Sample",
    technologies: "HTML, CSS",
    githubLink: "https://github.com",
    liveLink: "https://github.com",
  },
];
