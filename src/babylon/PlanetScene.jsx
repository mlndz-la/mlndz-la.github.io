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
import collectionOfPlanets, { meshIndex } from "./data/PlanetDB.js";

const onSceneReady = (scene) => {
  const arrayOfPlanets = collectionOfPlanets;
  // creates scene with camera, light and canvas
  const [camera, canvas, light, spotLight, planetLabel] = createScene(scene);
  // apply properties to each planet
  arrayOfPlanets.forEach((planet) => {
    // create planet
    planet.mesh = createPlanet(scene, planet);
    // on click planet action
    onHoverIlluminatePlanet(scene, planet, spotLight);
    // on hover action
    onHoverChangePlanet(planet, spotLight);
    // on click display text
    onClickDisplayText(scene, planet);
    // add title to each planet
    createPlanetLabels(planetLabel, planet);
  });
};
// Will run on every frame render, spinning on y-axis.
const onRender = (scene) => {
  const increasedRPM = 6;
  const defaultRPM = 2;
  const deltaTimeInMillis = scene.getEngine().getDeltaTime();
  for (let planet of collectionOfPlanets) {
    planet.mesh.rotation.y +=
      (defaultRPM / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
  }
  const pickResult = scene.pick(
    scene.pointerX,
    scene.pointerY,
    (mesh) => {
      return mesh.isVisible && mesh.isReady();
    },
    false
  );
  if (pickResult.hit) {
    collectionOfPlanets[
      meshIndex[pickResult.pickedMesh.name]
    ].mesh.rotation.y +=
      (increasedRPM / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
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
