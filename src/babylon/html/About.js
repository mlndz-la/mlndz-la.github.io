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
        <p class='inline'>, Redux, and CSS / CSS preprocessors.</p>
        <p class=''>Furthermore, I have an affinity for creating unique online experiences such as the site you are currently exploring.</p>
        <p class=''>The majority of my education stems from my drive to create, a.k.a self taught - i.e. articles, tutorials, workshops, and documentation.</p>
        <p class=''>Codesmith, an advanced tech accelerator I attended, gave me the know how on how to develop my professional career and the ability to better communicate my intentions, through code, to other developers.</p>
        <p class=''>Codesmith, an advanced tech accelerator I attended, gave me the know how on how to develop my professional career and the ability to better communicate my intentions to code, verbally, to other developers.</p>
        <p class=''>Thank you for taking the time to explore my slice of the internet!</p>
      </div>
      <hr class='divider experience_divider'/>
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
      <hr class='divider experience_divider'/>
      <h1 title='Languages' class='title glitch_header space_above' style='animation: glitch ${getRandomNumber(3)}s alternate infinite; transform: skewX(${getRandomNumber(20)}deg);'>Languages</h1>
      <p class='paragraph center_text'>English: Fluent</p>
      <p class='paragraph center_text'>Spanish: Fluent</p>
      <p class='paragraph center_text'>French: Beginner</p>
      <h1 title='Education' class='title glitch_header space_above' style='animation: glitch ${getRandomNumber(3)}s alternate infinite; transform: skewX(${getRandomNumber(20)}deg);'>Education</h1>
      <p class='paragraph center_text'>Codesmith: Software Engineer Residency</p>
      <p class='paragraph center_text'>Santa Monica College: Computer Science</p>
      <h1 title='Fast Facts' class='title glitch_header space_above' style='animation: glitch ${getRandomNumber(3)}s alternate infinite; transform: skewX(${getRandomNumber(20)}deg);'>Fast Facts</h1>
      <p class='paragraph center_text'>Favorite author: Stephen King</p>
      <p class='paragraph center_text'>Favorite book: 'Salem's Lot</p>
      <div class='paragraph about_paragraph center_text'>
        <p class='inline'>Awarded 2 years of&nbsp;</p>
        <a class='link' href='https://sites.google.com/nhm.org/nhmlacvolunteersreflect/volunteer-recognition/continuous-service-awards?authuser=0#h.i0edzf1s8o4m' target="_blank">
          <p title='Continuous Service' style='animation: glitch ${getRandomNumber(3)}s alternate infinite; transform: skewX(${getRandomNumber(20)}deg);' class='center_text link inline_flex glitch_paragraph'>Continuous Service</p>
        </a>
        <p class='inline'>&nbsp;by the Natural History Museum of Los Angeles</p>
      </div>
      <p class='center_text paragraph'>Favorite video game universe: Starcraft</p>
      <p class='center_text paragraph'>Favorite video game: Spore or Skull Monkey</p>
      <p class='center_text paragraph'>I have a growing passion for sailing</p>
      <p class='center_text paragraph'>I enjoy volunteering at events i.e. Los Angeles Festival of Books</p>
      <h1 title='🥚' class='title glitch_header space_above' style='animation: glitch ${getRandomNumber(3)}s alternate infinite; transform: skewX(${getRandomNumber(20)}deg);'>🥚</h1>
      <p class='paragraph center_text'>?????</p>
      <p class='paragraph center_text'>?????</p>
    </div>
  `;
};

export default about;