import * as BABYLON from "babylonjs";

export const createPlanet = async (
  scene,
  { name, yAxis, xAxis, diameter, color, yAxis375, xAxis375, xAxis450, yAxis450 }
) => {
  // Our built-in 'sphere' shape.
  let sphere = new BABYLON.MeshBuilder.CreateSphere(
    name,
    { segments: 32, diameter: diameter },
    scene
  );
  // define planet position in space
  if (window.screen.width <= 376) {
    sphere.position.y = yAxis375;
    sphere.position.x = xAxis375;
  } else if ((window.screen.width <= 450)) {
    sphere.position.y = yAxis450;
    sphere.position.x = xAxis450;
  } else {
    sphere.position.y = yAxis;
    sphere.position.x = xAxis;
  }
  // Give sphere the ability to do actions
  sphere.actionManager = new BABYLON.ActionManager(scene);
  // apply textures to each planet
  let texture = new BABYLON.StandardMaterial(color, scene);
  if (name === "icy2") {
    texture.diffuseTexture = await new BABYLON.Texture("https://raw.githubusercontent.com/mlndz-la/pwAssets/main/Icy2.jpg", scene);
  } else if (name === "terrestrial") {
    texture.diffuseTexture = await new BABYLON.Texture("https://raw.githubusercontent.com/mlndz-la/pwAssets/main/Terrestrial1.png", scene);
  } else if (name === "gaseous1") {
    texture.diffuseTexture = await new BABYLON.Texture("https://raw.githubusercontent.com/mlndz-la/pwAssets/main/Gaseous1.png", scene);
  } else if (name === "volcanic") {
    texture.diffuseTexture = await new BABYLON.Texture("https://raw.githubusercontent.com/mlndz-la/pwAssets/main/Volcanic.png", scene);
  } else if (name === "alpine") {
    texture.diffuseTexture = await new BABYLON.Texture("https://raw.githubusercontent.com/mlndz-la/pwAssets/main/Alpine.png", scene);
  }
  sphere.material = texture;
  return sphere;
};
