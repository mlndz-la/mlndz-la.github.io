import * as BABYLON from "babylonjs";
import createDisplay from "./html/CreateDisplay.js";
import { isEgg, isTouchEnabled } from "./html/utilities/Utilities.js";

export const onHoverChangePlanet = ({ mesh, name }, spotLight, egg) => {
  // on exit
  // return to normal size
  mesh.actionManager.registerAction(
    new BABYLON.InterpolateValueAction(
      BABYLON.ActionManager.OnPointerOutTrigger,
      mesh,
      "scaling",
      new BABYLON.Vector3(1, 1, 1),
      175
    )
  );
  // on enter
  // increase scaling by 1.4
  mesh.actionManager.registerAction(
    new BABYLON.InterpolateValueAction(
      BABYLON.ActionManager.OnPointerOverTrigger,
      mesh,
      "scaling",
      new BABYLON.Vector3(1.3, 1.3, 1.3),
      150,
      null,
      false,
      () => {
        spotLight.includedOnlyMeshes.splice(2, 1);
        if (egg[0]) {
          egg.push(name);
          console.log(egg)
          if (isEgg(egg) && (egg[0] && egg[1])) {
            const easter = document.getElementById("easter_egg");
            easter.volume = 0.1;
            easter.play();
            egg[0] = false;
            egg.splice(1, egg.length - 1);
          } else if (egg.length > 6) {
            egg.splice(2, egg.length - 1);
          }
        }
      }
    )
  );
};

export const onHoverIlluminatePlanet = (scene, { mesh, name }, spotLight) => {
  // adds a default gray glow to each planet
  let highlight = new BABYLON.HighlightLayer(name, scene);
  highlight.addMesh(mesh, new BABYLON.Color3.Gray());
  // on enter
  // on hover, change highlight color
  mesh.actionManager.registerAction(
    new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnPointerOverTrigger,
      () => {
        // remove glow then add glow, order matters
        highlight.removeMesh(mesh);
        if (name === "volcanic") {
          highlight.addMesh(mesh, new BABYLON.Color3.Red());
        } else if (name === "gaseous1") {
          highlight.addMesh(mesh, new BABYLON.Color3.Yellow());
        } else if (name === "terrestrial") {
          highlight.addMesh(mesh, new BABYLON.Color3.Teal());
        } else if (name === "icy2") {
          highlight.addMesh(mesh, new BABYLON.Color3.White());
        } else if (name === "alpine") {
          highlight.addMesh(mesh, new BABYLON.Color3.Green());
        } else {
          highlight.addMesh(mesh, new BABYLON.Color3.Gray());
        }
      }
    )
  );
  // enable light
  mesh.actionManager.registerAction(
    new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnPointerOverTrigger,
      () => {
        spotLight.includedOnlyMeshes.push(mesh);
        if (
          isTouchEnabled() &&
          window.innerWidth <= 1024 &&
          window.innerHeight <= 1366
        ) {
          setTimeout(() => {
            spotLight.includedOnlyMeshes.splice(1, 1);
            highlight.removeMesh(mesh);
            highlight.addMesh(mesh, new BABYLON.Color3.Gray());
            mesh.scaling = new BABYLON.Vector3(1, 1, 1);
          }, 2000);
        }
      }
    )
  );
  // on exit
  // on hover, return to default color
  mesh.actionManager.registerAction(
    new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnPointerOutTrigger,
      () => {
        // remove glow then add glow, order matters
        highlight.removeMesh(mesh);
        highlight.addMesh(mesh, new BABYLON.Color3.Gray());
      }
    )
  );
  // disable light
  mesh.actionManager.registerAction(
    new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnPointerOutTrigger,
      () => {
        spotLight.includedOnlyMeshes.splice(1, 1);
      }
    )
  );
};

export const onClickDisplayText = ({ mesh, name }, egg) => {
  mesh.actionManager.registerAction(
    new BABYLON.ExecuteCodeAction(
      {
        trigger: BABYLON.ActionManager.OnPickDownTrigger,
      },
      () => {
        if (name === "gaseous1" && !document.querySelector("#about")) {
          // create about display
          createDisplay("about");
        } else if (name === "icy2" && !document.querySelector("#abilities")) {
          if (!egg[1]) egg[1] = true;
          // create abilities display
          createDisplay("abilities");
        } else if (
          name === "terrestrial" &&
          !document.querySelector("#experience")
        ) {
          // create experience display
          createDisplay("experience");
        } else if (name === "alpine" && !document.querySelector("#projects")) {
          // create projects display
          createDisplay("projects");
        } else if (name === "volcanic" && !document.querySelector("#resume")) {
          // create resume display
          createDisplay("resume");
        }
      }
    )
  );
};
