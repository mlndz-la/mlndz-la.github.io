import profilePic from "./images/Erick_Melendez.jpg";
import { getRandomNumber } from "./utilities/Utilities.js";

const about = () => {
  // create html
  return `
    <div class='flex_column about_container'>
      <h1 title='Erick Melendez' class='title glitch_header'>Erick Melendez</h1>
      <image class='about_profile_pic round_corner' src='${profilePic}' alt='profile picture'></image>
      <div class='paragraph about_paragraph'>
        <p class='inline'>I'm a software engineer specializing in frontend technologies such as&nbsp;</p>
        <p class='inline_flex glitch_paragraph' style='animation: glitch ${getRandomNumber(3)}s alternate infinite; transform: skewX(${getRandomNumber(20)}deg);' title='React'>React</p>
        <p class='inline'>,&nbsp;</p>
        <p class='inline_flex glitch_paragraph' style='animation: glitch ${getRandomNumber(3)}s alternate infinite; transform: skewX(${getRandomNumber(20)}deg);' title='Redux'>Redux</p>
        <p class='inline'>, and&nbsp;</p>
        <p class='inline_flex glitch_paragraph' style='animation: glitch ${getRandomNumber(3)}s alternate infinite; transform: skewX(${getRandomNumber(20)}deg);' title='CSS'>CSS</p>
        <p class='inline'>&nbsp;/ CSS preprocessors.</p>
      </div>
    </div>
  `;
};

export default about;