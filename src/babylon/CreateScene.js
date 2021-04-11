import * as BABYLON from "babylonjs";
import * as GUI from "babylonjs-gui";

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
  // ! ====================================================
  const  showWorldAxis = (size) => {
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
  }
  showWorldAxis(10);
  // ! ====================================================
  return [camera, canvas, light, spotLight, planetLabelGUI];
};
