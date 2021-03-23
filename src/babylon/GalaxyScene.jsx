import React from "react";
import * as BABYLON from "babylonjs";
import * as GUI from "babylonjs-gui";
import "babylonjs-loaders";
import RenderScene from "./RenderScene.jsx";
import _SpaceBackgroundTwo from "../styles/_SpaceBackGroundTwo.js";
import { linkDB } from "./data/LinkDB.js";
import { getRandomNumber } from "./html/utilities/Utilities.js";

const onSceneReady = (scene) => {
  const camera = new BABYLON.ArcRotateCamera(
    "Camera",
    (3 * Math.PI) / 2,
    1.2,
    150,
    BABYLON.Vector3.Zero(),
    scene
  );
  // slow scroll wheel speed
  camera.wheelPrecision = -2;
  // these limit how close/far the camera can get to the target
	camera.lowerRadiusLimit = -325;
	camera.upperRadiusLimit = 325;
  const canvas = scene.getEngine().getRenderingCanvas();
  // This attaches the camera to the canvas
  camera.attachControl(canvas, true);
  // add galaxy mesh
  const galaxy = new BABYLON.SceneLoader.ImportMesh(
    "",
    "https://raw.githubusercontent.com/mlndz-la/pwAssets/main/",
    "galaxy.glb",
    scene,
    (meshes) => {
      let mesh = meshes[0];
      // center of mesh is of, this position centers mesh to camera
      mesh.position = new BABYLON.Vector3(113, -115, 113);
    }
  );
  scene.beforeRender = () => {
    camera.alpha += 0.0003;
  };
  const postProcess = new BABYLON.ImageProcessingPostProcess(
    "processing",
    1.0,
    camera
  );
  postProcess.vignetteWeight = 5;
  postProcess.vignetteStretch = 5;
  postProcess.vignetteColor = new BABYLON.Color4(0.3, 0, 1, 0);
  postProcess.vignetteEnabled = true;
  const pipeline = new BABYLON.DefaultRenderingPipeline(
    "pipeline",
    true,
    scene,
    [camera]
  );
  pipeline.bloomEnabled = true;
  pipeline.bloomWeight = 7;
  pipeline.bloomThreshold = .93;
  pipeline.bloomScale = 1;
  // Create a transparent background
  scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);
  // add links
  linkDB.forEach((linkInfo) => {
    let numOne = getRandomNumber(124);
    let numTwo = getRandomNumber(124);
    if (getRandomNumber(9) < 5) numOne = numOne * -1
    if (getRandomNumber(9) < 5) numTwo = numTwo * -1
    linkInfo.mesh = new BABYLON.Mesh.CreateSphere(linkInfo.title, 1, 1, scene);
    linkInfo.mesh.visibility = 0;
    linkInfo.mesh.position = new BABYLON.Vector3(
      numOne,
      0,
      numTwo
    );
    const advancedTexture = new GUI.AdvancedDynamicTexture.CreateFullscreenUI(
      linkInfo.title,
      true,
      scene
    );
    const button = new GUI.Button.CreateSimpleButton(
      linkInfo.title,
      linkInfo.title
    );
    button.width = linkInfo.width;
    button.height = "30px";
    button.color = linkInfo.color;
    button.thickness = 0;
    button.scaleY = 1.5;
    button.fontFamily = "Verdana";
    button.fontSize = "15px";
    button.onPointerUpObservable.add(() => {
      if (linkInfo.isLink) {
        window.open(linkInfo.link);
      }
    });
    advancedTexture.addControl(button);
    button.linkWithMesh(linkInfo.mesh);
    button.linkOffsetY = -150;

    const target = new GUI.Ellipse();
    target.width = "0px";
    target.height = "0px";
    target.thickness = 0;
    advancedTexture.addControl(target);
    target.linkWithMesh(linkInfo.mesh);

    const line = new GUI.Line();
    line.lineWidth = 2;
    line.color = linkInfo.color;
    line.y2 = 20;
    line.linkOffsetY = -20;
    advancedTexture.addControl(line);
    line.linkWithMesh(linkInfo.mesh);
    line.connectedControl = button;
  });
};

export default () => (
  <_SpaceBackgroundTwo id="silly_goose">
    <RenderScene antialias onSceneReady={onSceneReady} id="my-canvas" />
  </_SpaceBackgroundTwo>
);
