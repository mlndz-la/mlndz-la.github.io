import React from "react";
import LandingPage from "./components/landing_page/LandingPage.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import GalaxyScene from "./babylon/GalaxyScene.jsx";
import audio from "./audio/theme.mp3";
import computerChatter from "./audio/computer_chatter.mp3";
import easterEgg from "./audio/easter_egg.mp3";
import selected from "./audio/selected.mp3";
import _GlobalStyle from "./global/_GlobalStyle.js";

const App = () => {
  return (
    <main>
      <_GlobalStyle />
      <Navbar />
      <LandingPage />
      <iframe src="" id="audio" style={{ display: "none" }}></iframe>
      <audio id="player" loop>
        <source src={audio} type="audio/mp3" />
      </audio>
      <audio style={{ display: "none" }} id="open_modal">
        <source src={computerChatter} type="audio/mp3" />
      </audio>
      <audio style={{ display: "none" }} id="easter_egg">
        <source src={easterEgg} type="audio/mp3" />
      </audio>
      <audio style={{ display: "none" }} id="selected">
        <source src={selected} type="audio/mp3" />
      </audio>
      <audio style={{ display: "none" }} id="reveal">
        <source src={"https://raw.githubusercontent.com/mlndz-la/pwAssets/main/space_odyssey.mp3"} type="audio/mp3" />
      </audio>
      <GalaxyScene />
    </main>
  );
};

export default App;
