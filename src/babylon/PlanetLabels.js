import * as GUI from "babylonjs-gui";

// const specialChars = ["!", "@", "#", "$", "%", "&", "(", ")", "?", "/"];

// const generateRandomNumber = (max) =>
  // Math.floor(Math.random() * Math.floor(max));

// const randomWord = (str, specialStrArray) => {
//   const array = str.split("");
//   let newStr = "";
//   array.forEach((letter) => {
//     const index = generateRandomNumber(9);
//     newStr += specialStrArray[index];
//   });
//   return newStr;
// };

export const createPlanetLabels = (
  planetLabelGUI,
  { mesh, name, label }
) => {
  // create label + its properties
  const nameContainer = new GUI.Rectangle(name);
  nameContainer.width = 0.8;
  nameContainer.height = "100px";
  // nameContainer.color = "Gray";
  nameContainer.thickness = 0;
  nameContainer.isPointerBlocker = false;
  planetLabelGUI.addControl(nameContainer);
  // add text to nameContainer
  const text = new GUI.TextBlock();
  // const generateRandomText = setInterval(() => {
  //   text.text = randomWord(label, specialChars);
  // }, 100);
  text.text = label;
  nameContainer.color = "Gold";
  // setTimeout(() => {
  //   clearInterval(generateRandomText);
  //   text.text = label;
  //   nameContainer.color = "Gold";
  // }, generateRandomNumber(4000) + 1000);
  text.fontFamily = "Verdana";
  nameContainer.addControl(text);
  nameContainer.linkWithMesh(mesh);
  nameContainer.linkOffsetY = 0;
};
