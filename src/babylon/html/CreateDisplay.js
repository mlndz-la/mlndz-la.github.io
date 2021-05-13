import { chance, lowVolume } from "./utilities/Utilities";
import tvStatic from "./images/static_tv.gif";
import abilities from "./Abilities.js";
import about from "./About.js";
import experience from "./Experience.js";
import projects from "./Projects.js";
import resume from "./Resume.js";
import credits from "./Credits.js";
import "./styles/abilities.css";
import "./styles/about.css";
import "./styles/experience.css";
import "./styles/projects.css";
import "./styles/resume.css";
import "./styles/utilities.css";
import "./styles/credits.css";
import { listOfExperience } from "./data/ListOfExperience";
import { projectsData } from "./data/ProjectsData";

const evaluateDisplay = (name, eggs, index) => {
  if (name === "abilities") return abilities();
  else if (name === "about") return about(eggs);
  else if (name === "experience") return experience(index);
  else if (name === "projects") return projects();
  else if (name === "resume") return resume();
  else if (name === "credits") return credits();
};

const createDisplay = (displayName, discovery) => {
  let index = 0;
  const limit =
    displayName === "experience"
      ? listOfExperience.length - 1
      : projectsData.length - 1;
  const isExperience =
    displayName === "experience" || displayName === "projects"
      ? `
    <div class='button_container flex_row'>
      <image id='delete' class='cycle_button delete' alt='delete' src='https://raw.githubusercontent.com/mlndz-la/pwAssets/main/delete.svg'></image>
      <image id='add' class='cycle_button add' alt='add' src='https://raw.githubusercontent.com/mlndz-la/pwAssets/main/add.svg'></image>
    </div>
  `
      : "";
  const isPlayed = chance(20, 5);
  if (isPlayed) {
    const chatter = document.getElementById("open_modal");
    chatter.volume = lowVolume;
    chatter.play();
  }
  const isCredits = displayName === "credits" ? "line_teal" : "";
  // instantiate div with id of displayName
  const display = document.createElement("div");
  display.id = displayName;
  // create html
  display.innerHTML = `
      <div id='exit' class='fade_in fade_out'>
        <div id='button_remove' class='remove'></div>
        ${isExperience}
        <div class='line ${isCredits}'>
          <div class='scanner'></div>
        </div>
        <image src='${tvStatic}' alt='tv static' class='tv_static'></image>
        <div class='blur'></div>
        <div id="contents" class='info_card'>
          ${evaluateDisplay(displayName, discovery, index)}
        </div>
      </div>
    `;
  // add display to html
  document.querySelector("body").appendChild(display);
  // add ability to exit popup
  document.querySelector("#exit").addEventListener("click", (e) => {
    if (e.target.id === "exit" || e.target.id === "button_remove") {
      document.querySelector("#exit").style = "pointer-events: none;";
      document.querySelector("#button_remove").style = "pointer-events: none;";
      document.querySelector("body").removeChild(display);
    }
  });

  if (displayName === "experience" || displayName === "projects") {
    const parent = "#contents";
    const evaluateAction = displayName === "experience" ? experience : projects;

    document.querySelector("#add").addEventListener("click", (e) => {
      if (limit === 0) return;
      if (index === limit) {
        index = 0;
        document.querySelector(parent).innerHTML = evaluateAction(index);
      } else {
        index += 1;
        document.querySelector(parent).innerHTML = evaluateAction(index);
      }
    });
    document.querySelector("#delete").addEventListener("click", (e) => {
      if (limit === 0) return;
      if (index === 0) {
        index = limit;
        document.querySelector(parent).innerHTML = evaluateAction(index);
      } else {
        index -= 1;
        document.querySelector(parent).innerHTML = evaluateAction(index);
      }
    });
  }
};

export default createDisplay;
