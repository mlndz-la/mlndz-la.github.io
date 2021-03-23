import * as BABYLON from "babylonjs";

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
  // Remove all camera movements
  camera.inputs.clear();
  // This creates a light
  const light = new BABYLON.HemisphericLight(
    "mainLight",
    new BABYLON.Vector3(-8, -3, 10),
    scene
  );
  // light amount
  light.intensity = 1.4;
  light.specular = new BABYLON.Color3.Black();
  return [camera, canvas, light];
};
