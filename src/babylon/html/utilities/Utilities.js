import galaxy1 from "../icon/galaxy1.svg";
import galaxy2 from "../icon/galaxy2.svg";
import galaxy3 from "../icon/galaxy3.svg";
import galaxy4 from "../icon/galaxy4.svg";
import galaxy5 from "../icon/galaxy5.svg";
import galaxy6 from "../icon/galaxy6.svg";
import galaxy7 from "../icon/galaxy7.svg";
import llama from "../icon/llama.svg";

const createDividerWithoutImage = () => `
  <div class='h-divider'>
  <div class='shadow'></div>
  </div>
`;

const createDivider = (source) => `
  <div class='h-divider h-divider_spacing'>
  <div class='shadow'></div>
  <div class='divider_image_container'>
    <img class='divider_image' src='${source}'/>
  </div>
  </div>
`;

export const getRandomNumber = (max) => Math.floor(Math.random() * max + 1);

export const chance = (max, chance) => {
  const randomNumber = getRandomNumber(max);
  if (randomNumber < chance) {
    return true;
  }
  return false;
};

export const isTouchEnabled = () => {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
};

export const randomDivider = (isRandom) => {
  if (isRandom === false) {
    return createDividerWithoutImage();
  }
  const max = 21;
  const result = getRandomNumber(max);
  if (result <= 3) {
    return createDivider(galaxy1);
  } else if (result <= 6) {
    return createDivider(galaxy2);
  } else if (result <= 9) {
    return createDivider(galaxy3);
  } else if (result <= 11) {
    return createDivider(galaxy4);
  } else if (result <= 14) {
    return createDivider(galaxy5);
  } else if (result <= 17) {
    return createDivider(galaxy6);
  } else if (result <= 20) {
    return createDivider(galaxy7);
  } else if (result <= 21) {
    return createDivider(llama);
  } else {
    return createDivider(galaxy1);
  }
};

export const isEgg = (array) => {
  if (array[2] === "icy2") {
    if (array[3] === "gaseous1") {
      if (array[4] === "terrestrial") {
        if (array[5] === "alpine") {
          if (array[6] === "volcanic") {
            return true;
          }
        }
      }
    }
  }
  return false;
};

export const defaultVolume = 0.6;
export const lowVolume = 0.05;
export const noVolume = 0;
