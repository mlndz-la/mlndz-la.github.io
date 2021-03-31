import {
  iconCredits,
  imageCredits,
  audioCredits,
  modelsCredits,
  cssCredits,
  specialCredits,
} from "./data/CreditLinks.js";
import { randomDivider } from "./utilities/Utilities.js";

const createUsernameList = (users) => {
  let html = "";
  users.forEach(user => {
    html += `
      <p class='subtitle'>${user}</p>
    `;
  });
  return html;
}

const createList = (info) => {
  let html = "";

  info.forEach(({company, link, userName}) => {
    html += `
      <div class='flex_column credits_centering'>
        <a class='link' href='${link}' target='_blank'>
          <h2 class='link paragraph'>${company}</h2>
        </a>
        <div class='flex_column credits_centering'>
          ${createUsernameList(userName)}
        </div>
      </div>
    `;
  });

  return html;
};

const createHTML = (title, list) => {
  if (title === "Special") {
    return `
      <div class='flex_column credits_centering'>
        <h1 class='title'>${title}</h1>
        <h2 class='paragraph'>${list.name}</h2>
        <p class='subtitle'>${list.description}</p>
      </div>
    `;
  }
  return `
    <div class='flex_column credits_centering'>
      <h2 class='title'>${title}</h2>
      ${createList(list)}
    </div>
  `;
};

const credits = () => {
  const createHTMLIconCredit = createHTML("Icons", iconCredits);
  const createHTMLImageCredit = createHTML("Images", imageCredits);
  const createHTMLAudioCredit = createHTML("Audio", audioCredits);
  const createHTMLModelCredit = createHTML("Models", modelsCredits);
  const createHTMLCSSCredit = createHTML("CSS", cssCredits);
  const createHTMLSpecialCredit = createHTML("Special", specialCredits);

  let html = `
  <div class='credits_container'>
    ${createHTMLIconCredit}
    <div class='credits_spacing credits_centering'></div>
    ${createHTMLImageCredit}
    <div class='credits_spacing credits_centering'></div>
    ${createHTMLAudioCredit}
    <div class='credits_spacing credits_centering'></div>
    ${createHTMLModelCredit}
    <div class='credits_spacing credits_centering'></div>
    ${createHTMLCSSCredit}
    ${randomDivider()}
    ${createHTMLSpecialCredit}
  </div>
  `;

  return html;
};

export default credits;
