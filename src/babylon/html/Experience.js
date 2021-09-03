import { listOfExperience } from "./data/ListOfExperience.js";
import { randomDivider } from "./utilities/Utilities.js";

const createHTMLPoints = (arrayOfStr) => {
  let descriptionsHTML = ``;
  arrayOfStr.forEach((str, index) => {
    descriptionsHTML += `
      <div class='paragraph experience_description'>
        ${str}
      </div>
      ${arrayOfStr.length - 1 === index ? `` : `${randomDivider(false)}`}
    `;
  });
  return descriptionsHTML;
};

const createHTMLExperience = ({
  descriptions,
  link,
  company,
  product,
  preview,
  from,
  to,
}) => {
  const htmlListDescriptions = createHTMLPoints(descriptions);

  const html = `
      <div class='flex_column'>
        <a class='link' href='${link}' target='_blank'>
          <h1 class='title link glitch_header' title='${company}'>${company}</h1>
        </a>
        <image class='round_corner experience_image' src='${preview}' alt='preview'></image>
        <h1 class='subtitle'>Product: ${product}</h1>
        <p class='subtitle'><i>${from}</i> - <i>${to}</i></p>
        ${randomDivider()}
        <div class='flex_column center_items'>
          ${htmlListDescriptions}
        </div>
      </div>
  `;

  return html;
};

const experience = (index) => {
  const currentExperience = listOfExperience[index];
  const listOfHTML = createHTMLExperience(currentExperience);
  // create html
  const html = `
    <div id='experience_contents' class='flex_column experience_container'>
      ${listOfHTML}
    </div>
    `;
  return html;
};

export default experience;
