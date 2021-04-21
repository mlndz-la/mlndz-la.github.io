import * as BABYLON from "babylonjs";
import * as GUI from "babylonjs-gui";
import showWorldAxis from "../test/CreateWorldAxis";

export const createScene = (scene) => {
  // Create a transparent background
  scene.autoClear = false;
  // This creates and positions a free camera
  const camera = new BABYLON.FreeCamera(
    "main",
    new BABYLON.Vector3(25, 5, -25),
    scene
  );
  // points camera to scene origin
  camera.setTarget(new BABYLON.Vector3.Zero());
  const canvas = scene.getEngine().getRenderingCanvas();
  // This attaches the camera to the canvas
  camera.attachControl(canvas, true);
  // * Remove all camera movements
  // camera.inputs.clear();
  // This creates a light
  const light = new BABYLON.HemisphericLight(
    "mainLight",
    new BABYLON.Vector3(-8, -3, 10),
    scene
  );
  // light amount
  light.intensity = 1.4;
  light.specular = new BABYLON.Color3.Black();
  // create spotlight for planets
  const spotLight = new BABYLON.SpotLight(
    "spotLight",
    new BABYLON.Vector3(15, 0, -60),
    new BABYLON.Vector3(0, 0, 1),
    Math.PI / 3,
    1,
    scene
  );
  spotLight.includedOnlyMeshes.push(null);
  spotLight.intensity = 0.8;
  spotLight.specular = new BABYLON.Color3.Black();
  spotLight.radius = 3;
  // instantiate a gui for planet labels to exist on
  const planetLabelGUI = new GUI.AdvancedDynamicTexture.CreateFullscreenUI(
    "main-gui",
    true,
    scene
  );
  // ! testing purposes
  showWorldAxis(scene, 10);
  return [camera, canvas, light, spotLight, planetLabelGUI];
};
