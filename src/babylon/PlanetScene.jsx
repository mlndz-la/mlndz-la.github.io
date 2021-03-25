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

const onSceneReady = (scene) => {
  const arrayOfPlanets = collectionOfPlanets;
  // creates scene with camera, light and canvas
  const [camera, canvas, light, spotLight] = createScene(scene);
  // apply properties to each planet
  arrayOfPlanets.forEach((planet) => {
    // create planet
    planet.mesh = createPlanet(scene, planet);
    // on click planet action
    onHoverIlluminatePlanet(scene, planet, spotLight);
    // on hover action
    onHoverChangePlanet(planet);
    // on click display text
    onClickDisplayText(scene, planet);
    // add title to each planet
    createPlanetLabels(scene, planet);
  });
};

// Will run on every frame render, spinning on y-axis.
const onRender = (scene) => {
  const deltaTimeInMillis = scene.getEngine().getDeltaTime();
  const rpm = 2;
  for (let planet of collectionOfPlanets) {
    planet.mesh.rotation.y +=
      (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
  }
};

export default () => (
  <div id='squeaky_cheeks'>
    <RenderScene
      antialias
      onSceneReady={onSceneReady}
      onRender={onRender}
      engineOptions={{ stencil: true }}
      id="my-canvas"
    />
  </div>
);
