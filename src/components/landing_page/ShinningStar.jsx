import React from "react";
import _ShinningStar from "../../styles/landing_page/_ShinningStar.js";


const ShinningStar = () => {
  const star = {};
  const colors = ["#FFFD98", "#E0E2DB", "wheat", "#65AFFF", "#3D348B"];
  const getRandomNumber = (max) => Math.floor(Math.random() * max);

  star.size = (getRandomNumber(4) + 1) + "px";
  star.top = getRandomNumber(100) + "%";
  star.left = getRandomNumber(100) + "%";
  star.color = colors[getRandomNumber(colors.length)];
  star.blur = getRandomNumber(1.5) + "px";
  star.delay = (getRandomNumber(20) + 4) + "s";

  return <_ShinningStar star={star} />;
};

export default ShinningStar;
