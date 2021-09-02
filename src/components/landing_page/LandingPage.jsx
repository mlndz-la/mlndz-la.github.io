import React from "react";
import PlanetScene from "../../babylon/PlanetScene.jsx";
import _SpaceBackground from "../../styles/landing_page/_SpaceBackground.js";
import ShinningStar from "./ShinningStar.jsx";

const LandingPage = () => {
  const AMOUNT_OF_STARS = 10;
  const stars = [];
  for (let i = 0; i < AMOUNT_OF_STARS; i += 1) {
    stars.push(<ShinningStar key={i} />);
  }

  return (
    <section>
      <_SpaceBackground>
        {/* {stars} */}
        <PlanetScene />
      </_SpaceBackground>
    </section>
  );
};

export default LandingPage;
