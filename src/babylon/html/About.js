import {
  randomDivider,
  getRandomNumber,
  achievementTheBiggest,
  achievementKeyTheBiggest,
  achievementCleansingFire,
  achievementKeyCleansingFire,
} from "./utilities/Utilities.js";

const about = (eggs) => {
  const defaultEgg = "?????";
  const isAchieved = localStorage.getItem(achievementTheBiggest);
  const isAchieved2 = localStorage.getItem(achievementCleansingFire);
  const eggOne =
    eggs[0] || isAchieved === achievementKeyTheBiggest
      ? `THE BIGGEST!! 🐰`
      : defaultEgg;
  const eggTwo =
    eggs[1] || isAchieved2 === achievementKeyCleansingFire
      ? "“Mmmmmmm, Scorched Earth”"
      : defaultEgg;
  // create html
  return `
    <div class='flex_column about_container'>
      <h1 title='Erick Melendez' class='title glitch_header'>Erick Melendez</h1>
      <image class='about_profile_pic round_corner' src='https://raw.githubusercontent.com/mlndz-la/pwAssets/main/Erick_Melendez.jpg' alt='profile picture'></image>
      <div class='paragraph about_paragraph'>
        <p>I'm a software engineer who specializes in frontend technologies such as  React, Redux, and CSS / CSS preprocessors.</p>
        <p>&nbsp;</p>
        <p>For as long as I can remember, I’ve always had a love for video games. When I was younger, I remember playing for hours on end just for the fun of it, but as I got older, I grew an appreciation for the amount of hard work that went into their development and it was through my admiration that I sought out my own creative outlet.</p>
        <p>&nbsp;</p>
        <p>Eventually, I found my outlet through coding and discovered an affinity for creating unique online experiences such as the site you are currently exploring.</p>
        <p>&nbsp;</p>
        <p>While the majority of my education stems from my own drive to create, a.k.a self taught - i.e. articles, tutorials, workshops, and documentation - the rest had been provided by Codesmith, an advanced tech accelerator I attended.</p>
        <p>&nbsp;</p>
        <p>Codesmith gave me the know-how on how to develop my professional career and the ability to better communicate my intentions, through code, to other developers.</p>
        <p>&nbsp;</p>
        <p>Thank you for taking the time to explore my slice of the internet!</p>
        <p>&nbsp;</p>
      </div>
      ${randomDivider()}
      <blockquote class='paragraph center_text about_paragraph'>
        <p>
          <span class='fade_word'>“The key to</span>
          <span>good decision making</span>
          <span class='fade_word'>is not knowledge. It</span>
          <span class='inline'>is understanding.</span>
          <span class='fade_word inline'>We are swimming in the former. We are desperately lacking in the latter.”</span>
        </p>
        <cite class='fade_word'>Malcolm Gladwell ~ Blink</cite>
      </blockquote>
      ${randomDivider(false)}
      <h1 class='title'>Languages</h1>
      <p class='paragraph center_text'>English: Fluent</p>
      <p class='paragraph center_text'>Spanish: Fluent</p>
      <p class='paragraph center_text'>French: Beginner</p>
      ${randomDivider(false)}
      <h1 class='title'>Education</h1>
      <p class='paragraph center_text'>Codesmith: Software Engineer Residency</p>
      <p class='paragraph center_text'>Santa Monica College: Computer Science</p>
      ${randomDivider(false)}
      <h1 class='title'>Fast Facts</h1>
      <p class='paragraph center_text'>Favorite author: Stephen King</p>
      <p class='paragraph center_text'>Favorite book: 'Salem's Lot</p>
      <div class='paragraph about_paragraph center_text'>
        <p class='inline'>Awarded 2 years of&nbsp;</p>
        <a class='link' href='https://sites.google.com/nhm.org/nhmlacvolunteersreflect/volunteer-recognition/continuous-service-awards?authuser=0#h.i0edzf1s8o4m' target="_blank">
          <p title='Continuous Service' style='animation: glitch ${getRandomNumber(
            3
          )}s alternate infinite; transform: skewX(${getRandomNumber(
    20
  )}deg);' class='center_text link inline_flex glitch_paragraph'>Continuous Service</p>
        </a>
        <p class='inline'>&nbsp;by the Natural History Museum of Los Angeles</p>
      </div>
      <p class='center_text paragraph'>Favorite video game universe: Starcraft</p>
      <p class='center_text paragraph'>Favorite video game: Spore or Skull Monkey</p>
      <p class='center_text paragraph'>I have a growing passion for sailing</p>
      <p class='center_text paragraph'>I enjoy volunteering at events i.e. Los Angeles Festival of Books</p>
      ${randomDivider(false)}
      <h1 title='🥚' class='title glitch_header' style='animation: glitch ${getRandomNumber(
        3
      )}s alternate infinite; transform: skewX(${getRandomNumber(
    20
  )}deg);'>🥚</h1>
      <p class='paragraph center_text'>${eggOne}</p>
      <p class='paragraph center_text'>${eggTwo}</p>
    </div>
  `;
};

export default about;
