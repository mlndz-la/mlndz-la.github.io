import * as BABYLON from "babylonjs";
import icy2 from "./assets/Icy2.jpg";
import alpine from "./assets/Alpine.png";
import volcanic from "./assets/Volcanic.png";
import gaseous1 from "./assets/Gaseous1.png";
import terrestrial from "./assets/Terrestrial1.png";

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
    texture.diffuseTexture = await new BABYLON.Texture(icy2, scene);
  } else if (name === "terrestrial") {
    texture.diffuseTexture = await new BABYLON.Texture(terrestrial, scene);
  } else if (name === "gaseous1") {
    texture.diffuseTexture = await new BABYLON.Texture(gaseous1, scene);
  } else if (name === "volcanic") {
    texture.diffuseTexture = await new BABYLON.Texture(volcanic, scene);
  } else if (name === "alpine") {
    texture.diffuseTexture = await new BABYLON.Texture(alpine, scene);
  }
  sphere.material = texture;
  return sphere;
};
