import angular from "./angular.svg";
import bootstrap from "./bootstrap.svg";
import css from "./css.svg";
import html from "./html.svg";
import javascript from "./javascript.svg";
import nextJS from "./nextJS.svg";
import git from "./git.svg";
import react from "./react.svg";
import tailwind from "./tailwind.svg";
import typescript from "./typescript.svg";
import redux from "./redux.svg";
import trello from "./trello.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "css":
      return css;
    case "angular":
      return angular;
    case "javascript":
      return javascript;
    case "next js":
      return nextJS;
    case "react":
      return react;
    case "typescript":
      return typescript;
    case "bootstrap":
      return bootstrap;
    case "tailwind":
      return tailwind;
    case "git":
      return git;
    case "redux":
      return redux;
    case "trello":
      return trello;
    default:
      break;
  }
};
