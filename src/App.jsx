import React from "react";
import LandingPage from "./components/landing_page/LandingPage.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import GalaxyScene from "./babylon/GalaxyScene.jsx";
import audio from "./audio/theme.mp3";
import _GlobalStyle from "./global/_GlobalStyle.js";

const App = () => {
  return (
    <main>
      <_GlobalStyle />
      <Navbar />
      <LandingPage />
      <iframe
        src=""
        id="audio"
        style={{ display: "none" }}
      ></iframe>
      <audio id="player" loop>
        <source src={audio} type="audio/mp3" />
      </audio>
      <GalaxyScene />
    </main>
  );
};

export default App;
