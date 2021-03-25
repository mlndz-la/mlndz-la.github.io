export const getRandomNumber = (max) => Math.floor(Math.random() * max + 1);

export const chanceToAssignGlitch = (max, chance) => {
  const randomNumber = getRandomNumber(max);
  if (randomNumber < chance) {
    return true;
  }
  return false;
};

export const isTouchEnabled = () => {
  return ( "ontouchstart" in window ) ||
    ( navigator.maxTouchPoints > 0 ) ||
    ( navigator.msMaxTouchPoints > 0 );
}