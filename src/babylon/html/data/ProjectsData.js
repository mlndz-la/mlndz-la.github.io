import babylon from "../icon/babylon.png";
import pws from "../images/personal_website_screenshot.png";
import { getRandomNumber } from "../utilities/Utilities";

export const projectsData = [
  {
    name: "Personal Website",
    description:
      `
      <p class='inline'>My personal website demonstrating my creativity through frontend development. Incorporating techniques such as the&nbsp;</p>
      <p class='inline_flex glitch_paragraph' style='animation: glitch ${getRandomNumber(3)}s alternate infinite;transform: skewX(${getRandomNumber(20)}deg);' title='parallax effect'>parallax effect</p>
      <p class='inline'>&nbsp;and CSS text&nbsp;</p>
      <p class='inline_flex glitch_paragraph' style='animation: glitch ${getRandomNumber(3)}s alternate infinite;transform: skewX(${getRandomNumber(20)}deg);' title='animations'>animations</p>
      <p class='inline'>; inspired by the video game Spore.</p>
      `,
    techs: [
      {
        name: "Javascript",
        image: "https://api.iconify.design/logos:javascript.svg",
      },
      {
        name: "React",
        image: "https://api.iconify.design/logos:react.svg",
      },
      {
        name: "Styled-Components",
        image: "https://api.iconify.design/vscode-icons:file-type-styled.svg",
      },
      { name: "Babylon", image: babylon },
    ],
    link: "",
    preview: pws,
  },
];
