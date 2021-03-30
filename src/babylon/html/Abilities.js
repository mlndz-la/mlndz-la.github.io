import {
  language,
  frontend,
  backend,
  database,
  testing,
  workFlow,
} from "./data/Techs.js";
import { chance, getRandomNumber, randomDivider } from "./utilities/Utilities.js";

const createHTMLListItem = (list) => {
  let html = "";

  list.forEach(({ name, image, invert }) => {
    const isInvert = invert ? "invert" : "";
    const isGlitched = chance(35, 3);
    html += `
      <div class='ability_info flex_row max_width_ability'>
        ${isGlitched ? `<p class='subtitle inline_flex glitch_paragraph' style='animation: glitch ${getRandomNumber(3)}s alternate infinite;
        transform: skewX(${getRandomNumber(20)}deg);' title='${name}' >${name}</p>` : `<p class='subtitle'>${name}</p>`}
        <image class='icon ability_icon ${isInvert}' src='${image}' alt='icon'></image>
      </div>
    `;
  });

  return html;
};

const abilities = () => {
  // create html for item with image
  const listOfLanguages = createHTMLListItem(language);
  const listOfFrontend = createHTMLListItem(frontend);
  const listOfBackend = createHTMLListItem(backend);
  const listOfTesting = createHTMLListItem(testing);
  const listOfDatabase = createHTMLListItem(database);
  const listOfWorkFlow = createHTMLListItem(workFlow);
  // create html
  return `
    <div class='abilities_container'>
      <div class='flex_column space_around ability_container'>
        <h1 class='title'>Languages</h1>
        <div class='flex_row wrap'>
          ${listOfLanguages}
        </div>
      </div>
      ${randomDivider(false)}
      <div class='flex_column space_around ability_container'>
        <h1 class='title'>Frontend</h1>
        <div class='flex_row wrap'>
          ${listOfFrontend}
        </div>
      </div>
      ${randomDivider(false)}
      <div class='flex_column space_around ability_container'>
        <h1 class='title'>Backend</h1>
        <div class='flex_row wrap'>
          ${listOfBackend}
        </div>
      </div>
      ${randomDivider(false)}
      <div class='flex_column space_around ability_container'>
        <h1 class='title'>Testing</h1>
        <div class='flex_row wrap'>
          ${listOfTesting}
        </div>
      </div>
      ${randomDivider(false)}
      <div class='flex_column space_around ability_container'>
        <h1 class='title'>Database</h1>
        <div class='flex_row wrap'>
          ${listOfDatabase}
        </div>
      </div>
      ${randomDivider(false)}
      <div class='flex_column space_around ability_container'>
      <h1 class='title'>Work Flow</h1>
        <div class='flex_row wrap'>
          ${listOfWorkFlow}
        </div>
      </div>
    </div>
  `;
};

export default abilities;
