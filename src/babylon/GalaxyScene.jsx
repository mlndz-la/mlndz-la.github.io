import React from "react";
import * as BABYLON from "babylonjs";
import * as GUI from "babylonjs-gui";
import "babylonjs-loaders";
import RenderScene from "./RenderScene.jsx";
import _SpaceBackgroundTwo from "../styles/_SpaceBackGroundTwo.js";
import { linkDB } from "./data/LinkDB.js";
import { getRandomNumber } from "./html/utilities/Utilities.js";
import createDisplay from "./html/CreateDisplay.js";

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
  const curve = new BABYLON.ColorCurves();
  curve.globalHue = 200;
  curve.globalDensity = 80;
  curve.globalSaturation = 80;
  curve.highlightsHue = 20;
  curve.highlightsDensity = -80;
  curve.highlightsSaturation = -85;
  curve.shadowsHue = 2;
  curve.shadowsDensity = 80;
  curve.shadowsSaturation = 40;
  scene.imageProcessingConfiguration.colorCurvesEnabled = true;
  scene.imageProcessingConfiguration.colorCurves = curve;
  const pipeline = new BABYLON.DefaultRenderingPipeline(
    "pipeline",
    true,
    scene,
    [camera]
  );
  pipeline.bloomEnabled = true;
  pipeline.bloomWeight = 7;
  pipeline.bloomThreshold = 0.93;
  pipeline.bloomScale = 1;
  pipeline.imageProcessing.contrast = 1.05;
  pipeline.imageProcessing.exposure = 0.999;
  // Create a transparent background
  scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);
  // instantiate global ui
  const advancedTexture = new GUI.AdvancedDynamicTexture.CreateFullscreenUI(
    "main-gui",
    true,
    scene
  );
  // add links
  linkDB.forEach((linkInfo) => {
    let numOne = getRandomNumber(124);
    let numTwo = getRandomNumber(124);
    if (getRandomNumber(9) < 5) numOne = numOne * -1;
    if (getRandomNumber(9) < 5) numTwo = numTwo * -1;
    linkInfo.mesh = new BABYLON.Mesh.CreateSphere(linkInfo.title, 1, 1, scene);
    linkInfo.mesh.visibility = 0;
    linkInfo.mesh.position = new BABYLON.Vector3(numOne, 0, numTwo);
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
    button.hoverCursor = "pointer";
    button.onPointerUpObservable.add(() => {
      if (linkInfo.isLink) {
        window.open(linkInfo.link);
      } else if (linkInfo.title === "Credits") {
        createDisplay("credits");
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
    line.lineWidth = 3;
    line.color = linkInfo.color;
    line.y2 = 20;
    line.linkOffsetY = -20;
    advancedTexture.addControl(line);
    line.linkWithMesh(linkInfo.mesh);
    line.connectedControl = button;
    button.onPointerEnterObservable.add(() => {
      button.color = "#ff00c8";
      line.color = "#ff00c8";
    });
    button.onPointerOutObservable.add(() => {
      button.color = linkInfo.color;
      line.color = linkInfo.color;
    });
  });
  // ! ====================================================
  const showWorldAxis = (size) => {
    const makeTextPlane = function (text, color, size) {
      const dynamicTexture = new BABYLON.DynamicTexture(
        "DynamicTexture",
        50,
        scene,
        true
      );
      dynamicTexture.hasAlpha = true;
      dynamicTexture.drawText(
        text,
        5,
        40,
        "bold 36px Arial",
        color,
        "transparent",
        true
      );
      const plane = BABYLON.Mesh.CreatePlane("TextPlane", size, scene, true);
      plane.material = new BABYLON.StandardMaterial("TextPlaneMaterial", scene);
      plane.material.backFaceCulling = false;
      plane.material.specularColor = new BABYLON.Color3(0, 0, 0);
      plane.material.diffuseTexture = dynamicTexture;
      return plane;
    };
    const axisX = BABYLON.Mesh.CreateLines(
      "axisX",
      [
        BABYLON.Vector3.Zero(),
        new BABYLON.Vector3(size, 0, 0),
        new BABYLON.Vector3(size * 0.95, 0.05 * size, 0),
        new BABYLON.Vector3(size, 0, 0),
        new BABYLON.Vector3(size * 0.95, -0.05 * size, 0),
      ],
      scene
    );
    axisX.color = new BABYLON.Color3(1, 0, 0);
    const xChar = makeTextPlane("X", "red", size / 10);
    xChar.position = new BABYLON.Vector3(0.9 * size, -0.05 * size, 0);
    const axisY = BABYLON.Mesh.CreateLines(
      "axisY",
      [
        BABYLON.Vector3.Zero(),
        new BABYLON.Vector3(0, size, 0),
        new BABYLON.Vector3(-0.05 * size, size * 0.95, 0),
        new BABYLON.Vector3(0, size, 0),
        new BABYLON.Vector3(0.05 * size, size * 0.95, 0),
      ],
      scene
    );
    axisY.color = new BABYLON.Color3(0, 1, 0);
    const yChar = makeTextPlane("Y", "green", size / 10);
    yChar.position = new BABYLON.Vector3(0, 0.9 * size, -0.05 * size);
    const axisZ = BABYLON.Mesh.CreateLines(
      "axisZ",
      [
        BABYLON.Vector3.Zero(),
        new BABYLON.Vector3(0, 0, size),
        new BABYLON.Vector3(0, -0.05 * size, size * 0.95),
        new BABYLON.Vector3(0, 0, size),
        new BABYLON.Vector3(0, 0.05 * size, size * 0.95),
      ],
      scene
    );
    axisZ.color = new BABYLON.Color3(0, 0, 1);
    const zChar = makeTextPlane("Z", "blue", size / 10);
    zChar.position = new BABYLON.Vector3(0, 0.05 * size, 0.9 * size);
  };
  showWorldAxis(10);
  // ! ====================================================
};

export default () => (
  <_SpaceBackgroundTwo id="silly_goose">
    <RenderScene antialias onSceneReady={onSceneReady} id="my-canvas" />
  </_SpaceBackgroundTwo>
);
