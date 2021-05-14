import React from "react";
import RenderScene from "./RenderScene.jsx";
import {
  onHoverChangePlanet,
  onHoverIlluminatePlanet,
  onClickDisplayText,
} from "./PlanetActions.js";
import { createPlanet } from "./CreatePlanets.js";
import { createScene } from "./CreateScene.js";
import { createPlanetLabels } from "./PlanetLabels.js";
import collectionOfPlanets from "./data/PlanetDB.js";
// import {
//   createLoadingScreen,
//   removeLoadingScreen,
// } from "./CreateLoadingScreen.js";

const onSceneReady = async (scene) => {
  // scene.getEngine().displayLoadingUI = createLoadingScreen();
  // scene.getEngine().hideLoadingUI = removeLoadingScreen();

  await scene.getEngine().displayLoadingUI();

  const egg = {
    egg1: [true, false],
    egg2: [true],
    egg2Tracker: [false, false, false, false, false],
  };
  const discovery = [false, false];
  const arrayOfPlanets = [...collectionOfPlanets];
  // creates scene with camera, light and canvas
  const [camera, canvas, light, spotLight, planetLabelGUI] = await createScene(scene);
  // apply properties to each planet
  await arrayOfPlanets.forEach(async (planet) => {
    // create planet
    planet.mesh = await createPlanet(scene, planet);
    // on click planet action
    await onHoverIlluminatePlanet(scene, planet, spotLight);
    // on hover action
    await onHoverChangePlanet(scene, planet, spotLight, egg, discovery);
    // on click display text
    await onClickDisplayText(scene, planet, egg, discovery);
    // add title to each planet
    await createPlanetLabels(planetLabelGUI, planet);
  });
  await scene.getEngine().hideLoadingUI();
};
// Will run on every frame render, spinning on y-axis.
const onRender = (scene) => {
  const defaultRPM = 3;
  const deltaTimeInMillis = scene.getEngine().getDeltaTime();
  for (let planet of collectionOfPlanets) {
    planet.mesh.rotation.y +=
      (defaultRPM / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
  }
};

export default () => (
  <div id="squeaky_cheeks">
    <RenderScene
      antialias
      onSceneReady={onSceneReady}
      onRender={onRender}
      engineOptions={{ stencil: true }}
      id="my-canvas"
    />
  </div>
);
