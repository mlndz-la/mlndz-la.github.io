import * as BABYLON from "babylonjs";

export const activateEggFire = (
  scene,
  isEgg2,
  egg2,
  discovery,
  name,
  achievementCleansingFire,
  achievementKeyCleansingFire,
  defaultVolume,
  lowVolume
) => {
  egg2.push(name);
  if (isEgg2(egg2) && egg2[0]) {
    const isAchieved = localStorage.getItem(achievementKeyCleansingFire);
    if (!isAchieved) {
      localStorage.setItem(achievementCleansingFire, achievementKeyCleansingFire);
      discovery[1] = true;
    }
    if (false) {
      egg2[0] = false;
    }
  } else if (egg2.length > 3) {
    egg2.splice(1, egg2.length - 1);
  }
};

export const validEggFire = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === false) {
      return false;
    }
  }
  return true;
}

export default activateEggFire;
