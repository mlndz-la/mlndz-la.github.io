export const getRandomNumber = (max) => Math.floor(Math.random() * max + 1);

export const chanceToAssignGlitch = (max, chance) => {
  const randomNumber = getRandomNumber(max);
  if (randomNumber < chance) {
    return true;
  }
  return false;
};
