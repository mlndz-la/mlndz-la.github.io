import artemisPreview from "../images/artemis_preview.png";
import { getRandomNumber } from "../utilities/Utilities.js";

export const listOfExperience = [
  {
    company: "Artemis",
    link: "https://project-artemis-v1.vercel.app/",
    from: "2020",
    to: "2020",
    preview: artemisPreview,
    descriptions: [
      `
        <p class='inline'>Utilized&nbsp;</p>
        <p class='inline_flex glitch_paragraph' style='animation: glitch ${getRandomNumber(3)}s alternate infinite;
        transform: skewX(${getRandomNumber(20)}deg);' title='React'>React</p>
        <p class='inline'>&nbsp;to create reusable components and leverage the reconciliation algorithm in order to re-render parts of the DOM that have changed</p>
      `,
      `
        <p class='inline'>Implemented&nbsp;</p>
        <p class='inline_flex glitch_paragraph' style='animation: glitch ${getRandomNumber(3)}s alternate infinite;
        transform: skewX(${getRandomNumber(20)}deg);' title='React Context API'>React Context API</p>
        <p class='inline'>&nbsp;to consume and provide a single source of truth, simplify the data flow between components and maintain a cleaner codebase by removing needless prop drilling from stateless components</p>
      `,
      `
        <p class='inline'>Outlined a modern&nbsp;</p>
        <p class='inline_flex glitch_paragraph' style='animation: glitch ${getRandomNumber(3)}s alternate infinite;
        transform: skewX(${getRandomNumber(20)}deg);' title='Neomorphic UI'>Neomorphic UI</p>
        <p class='inline'>&nbsp;with&nbsp;</p>
        <p class='inline_flex glitch_paragraph' style='animation: glitch ${getRandomNumber(3)}s alternate infinite;
        transform: skewX(${getRandomNumber(20)}deg);' title='CSS Grid'>CSS Grid</p>
        <p class='inline'>&nbsp;and leveraged&nbsp;</p>
        <p class='inline_flex glitch_paragraph' style='animation: glitch ${getRandomNumber(3)}s alternate infinite;
        transform: skewX(${getRandomNumber(20)}deg);' title='CSS Flexbox'>CSS Flexbox</p>
        <p class='inline'>&nbsp;to create a responsive, mobile-first UI regardless of screen size</p>
      `,
      `
        <p class='inline'>Selected&nbsp;</p>
        <p class='inline_flex glitch_paragraph' style='animation: glitch ${getRandomNumber(3)}s alternate infinite;
        transform: skewX(${getRandomNumber(20)}deg);' title='Aleph'>Aleph</p>
        <p class='inline'>&nbsp;to build a dynamic React Application and pre-render the application server-side at build time before displaying to the client for quicker initial load times as well as update Artemis, through Hot Module Reloading, during development without having to restart the server on every change</p>
      `,
      `
        <p class='inline'>Integrated&nbsp;</p>
        <p class='inline_flex glitch_paragraph' style='animation: glitch ${getRandomNumber(4000)}ms alternate infinite;
        transform: skewX(${getRandomNumber(20)}deg);' title='Chart.js'>Chart.js</p>
        <p class='inline'>&nbsp;for its minimalistic design and small module size plus its added bonus of minimal lag on the clients end</p>
      `,
      `
        <p class='inline'>Architected a&nbsp;</p>
        <p class='inline_flex glitch_paragraph' style='animation: glitch ${getRandomNumber(4000)}ms alternate infinite;
        transform: skewX(${getRandomNumber(20)}deg);' title='Deno'>Deno</p>
        <p class='inline'>&nbsp;server to produce a lightweight application with Deno’s module system and safeguarded Artemis by utilizing its security measures to prevent unwanted script injections or file access from modules at runtime</p>
      `,
      `
        <p class='inline'>Applied&nbsp;</p>
        <p class='inline_flex glitch_paragraph' style='animation: glitch ${getRandomNumber(4000)}ms alternate infinite;
        transform: skewX(${getRandomNumber(20)}deg);' title='Typescript'>Typescript</p>
        <p class='inline'>&nbsp;across the stack to create a more predictable code base through explicit type definitions and greatly improve code maintainability by decreasing typecasting errors</p>
      `,
      `
        <p class='inline'>Leveraged&nbsp;</p>
        <p class='inline_flex glitch_paragraph' style='animation: glitch ${getRandomNumber(4000)}ms alternate infinite;
        transform: skewX(${getRandomNumber(20)}deg);' title='Git'>Git</p>
        <p class='inline'>&nbsp;to monitor changes to the code base and prevent breaking changes as well as deploy&nbsp;</p>
        <p class='inline_flex glitch_paragraph' style='animation: glitch ${getRandomNumber(4000)}ms alternate infinite;
        transform: skewX(${getRandomNumber(20)}deg);' title='Git Bisect'>Git Bisect</p>
        <p class='inline'>&nbsp;to debug and backtrack to a stable version of Artemis</p>
      `,
    ],
  },
];
