import html from "../assets/icon/html.svg";
import css from "../assets/icon/css.svg";
import sass from "../assets/icon/sass.svg";
import tailwind from "../assets/icon/tailwind.svg";
import js from "../assets/icon/js.svg";
import ts from "../assets/icon/ts.svg";
import net from "../assets/icon/net.svg";
import react from "../assets/icon/react.svg";
import nodejs from "../assets/icon/nodejs.svg";
import express from "../assets/icon/express.svg";
import mongodb from "../assets/icon/mongodb.svg";
import code from "../assets/icon/code.svg";
import webstorm from "../assets/icon/webstorm.svg";
import npm from "../assets/icon/npm.svg";
import github from "../assets/icon/github.svg";
import gitlab from "../assets/icon/gitlab.svg";
import photoshop from "../assets/icon/photoshop.svg";
import xd from "../assets/icon/xd.svg";
import jira from "../assets/icon/jira.svg";
import confluence from "../assets/icon/confluence.svg";
import insomnia from "../assets/icon/insomnia.svg";
import playwright from "../assets/icon/playwright.svg";
import vite from "../assets/icon/vite.svg";
import jest from "../assets/icon/jest.svg";

interface Skills {
  href: string;
  title: string;
  img: string;
}

export const skills: Skills[] = [
  { href: "#html_", title: "HTML", img: `${html}` },
  { href: "#css_", title: "CSS", img: `${css}` },
  { href: "#sass_", title: "SASS", img: `${sass}` },
  { href: "#tailwind_", title: "Tailwind", img: `${tailwind}` },
  { href: "#js_", title: "JavaScript", img: `${js}` },
  { href: "#ts", title: "TypeScript", img: `${ts}` },
  { href: "#net", title: ".NET Core", img: `${net}` },
  { href: "#react_", title: "React", img: `${react}` },
  { href: "#node_", title: "Node.js", img: `${nodejs}` },
  { href: "#express_", title: "Express", img: `${express}` },
  { href: "#mongodb_", title: "MongoDB", img: `${mongodb}` },
  { href: "#visualstudio_", title: "Visual Studio Code", img: `${code}` },
  { href: "#webstorm_", title: "Webstorm", img: `${webstorm}` },
  { href: "#npm_", title: "NPM", img: `${npm}` },
  { href: "#github_", title: "GitHub", img: `${github}` },
  { href: "#gitlab_", title: "GitLab", img: `${gitlab}` },
  { href: "#adobephotoshop_", title: "Photoshop", img: `${photoshop}` },
  { href: "#adobexd_", title: "XD", img: `${xd}` },
  { href: "#JIRA_", title: "JIRA", img: `${jira}` },
  { href: "#Confluence_", title: "Confluence", img: `${confluence}` },
  { href: "#Insomnia_", title: "Insomnia", img: `${insomnia}` },
  { href: "#Playwright_", title: "Playwright", img: `${playwright}` },
  { href: "#Vite_", title: "Vite", img: `${vite}` },
  { href: "#Jest_", title: "Jest", img: `${jest}` },
];
