import { listOfExperience } from "./data/ListOfExperience.js";

const createHTMLPoints = (arrayOfStr) => {
  let descriptionsHTML = ``;
  arrayOfStr.forEach((str, index) => {
    descriptionsHTML += `
      <div class='paragraph experience_description'>
        ${str}
      </div>
      ${arrayOfStr.length - 1 === index ? `` : `<hr class='divider experience_divider'/>`}
    `;
  });
  return descriptionsHTML;
};

const createHTMLExperience = (data) => {
  let html = ``;
  data.forEach(({ company, link, preview, descriptions, from, to }, i) => {
    const htmlListDescriptions = createHTMLPoints(descriptions);
    html += `
      <div class='flex_column'>
        <a class='link' href='${link}' target='_blank'>
          <h1 class='title link glitch_header' title='${company}'>${company}</h1>
        </a>
        <image class='round_corner experience_image' src='${preview}' alt='preview'></image>
        <p class='subtitle'><i>Sept ${from}</i> - <i>Jan ${to}</i></p>
        <div class='flex_column center_items'>
          ${htmlListDescriptions}
        </div>
        ${data.length - 1 === i ? `` : `<hr class='divider experience_divider'/>`}
      </div>
    `;
  });

  return html;
};

const experience = () => {
  const listOfHTML = createHTMLExperience(listOfExperience);
  // create html
  return `
    <div class='flex_column experience_container'>
      ${listOfHTML}
    </div>
    `;
};

export default experience;
