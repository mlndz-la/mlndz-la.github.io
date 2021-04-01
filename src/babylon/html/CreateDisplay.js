import { chance } from "./utilities/Utilities";
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

const evaluateDisplay = (name, eggs) => {
  if (name === "abilities") return abilities();
  else if (name === "about") return about(eggs);
  else if (name === "experience") return experience();
  else if (name === "projects") return projects();
  else if (name === "resume") return resume();
  else if (name === "credits") return credits();
};

const createDisplay = (displayName, discovery) => {
  const isPlayed = chance(20, 5);
  if (isPlayed) {
    const chatter = document.getElementById("open_modal");
    chatter.volume = 0.1;
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
        <div class='line ${isCredits}'>
          <div class='scanner'></div>
        </div>
        <image src='${tvStatic}' alt='tv static' class='tv_static'></image>
        <div class='blur'></div>
        <div class='info_card'>
          ${evaluateDisplay(displayName, discovery)}
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
};

export default createDisplay;
