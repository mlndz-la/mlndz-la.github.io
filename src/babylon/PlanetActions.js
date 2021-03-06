import * as BABYLON from "babylonjs";
import createDisplay from "./html/CreateDisplay.js";
import {
  achievementCleansingFire,
  achievementKeyCleansingFire,
  achievementKeyTheBiggest,
  achievementTheBiggest,
  defaultVolume,
  isEgg,
  isEgg2,
  isTouchEnabled,
  lowVolume,
} from "./html/utilities/Utilities.js";
import activateEggChungus from "./js/EE1.js";
import activateEggFire, { validEggFire } from "./js/EE2.js";

const defaultScale = 1;
const increasedScale = 1.3;

export const onHoverChangePlanet = (
  scene,
  { mesh, name },
  spotLight,
  { egg1 },
  discovery
) => {
  // on exit
  // return to normal size
  mesh.actionManager.registerAction(
    new BABYLON.InterpolateValueAction(
      BABYLON.ActionManager.OnPointerOutTrigger,
      mesh,
      "scaling",
      new BABYLON.Vector3(defaultScale, defaultScale, defaultScale),
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
      new BABYLON.Vector3(increasedScale, increasedScale, increasedScale),
      150,
      null,
      false,
      () => {
        spotLight.includedOnlyMeshes.splice(2, 1);
        if (egg1[0]) {
          activateEggChungus(
            scene,
            isEgg,
            egg1,
            discovery,
            name,
            achievementTheBiggest,
            achievementKeyTheBiggest,
            defaultVolume,
            lowVolume
          );
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
            mesh.scaling = new BABYLON.Vector3(
              defaultScale,
              defaultScale,
              defaultScale
            );
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

export const onClickDisplayText = (
  scene,
  planet,
  { egg1, egg2, egg2Tracker },
  discovery
) => {
  planet.mesh.actionManager.registerAction(
    new BABYLON.ExecuteCodeAction(
      {
        trigger: BABYLON.ActionManager.OnPickDownTrigger,
      },
      () => {
        if (validEggFire(egg2Tracker)) {
          egg2.push(planet.name);
        }
        if (planet.name === "gaseous1" && !document.querySelector("#about")) {
          if (!egg2Tracker[0] && isEgg2(egg2)) {
            egg2.splice(1, egg2.length - 1);
            egg2Tracker[0] = true;
            activateEggFire(
              scene,
              planet,
              discovery,
              achievementCleansingFire,
              achievementKeyCleansingFire,
              defaultVolume,
              lowVolume
            );
          } else if (egg2.length > 3) {
            egg2.splice(1, egg2.length - 1);
          }
          // create about display
          createDisplay("about", discovery);
        } else if (
          planet.name === "icy2" &&
          !document.querySelector("#abilities")
        ) {
          if (!egg2Tracker[1] && isEgg2(egg2)) {
            egg2.splice(1, egg2.length - 1);
            egg2Tracker[1] = true;
            activateEggFire(
              scene,
              planet,
              discovery,
              achievementCleansingFire,
              achievementKeyCleansingFire,
              defaultVolume,
              lowVolume
            );
          } else if (egg2.length > 3) {
            egg2.splice(1, egg2.length - 1);
          }
          if (!egg1[1]) egg1[1] = true;
          // create abilities display
          createDisplay("abilities");
        } else if (
          planet.name === "terrestrial" &&
          !document.querySelector("#experience")
        ) {
          if (!egg2Tracker[2] && isEgg2(egg2)) {
            egg2.splice(1, egg2.length - 1);
            egg2Tracker[2] = true;
            activateEggFire(
              scene,
              planet,
              discovery,
              achievementCleansingFire,
              achievementKeyCleansingFire,
              defaultVolume,
              lowVolume
            );
          } else if (egg2.length > 3) {
            egg2.splice(1, egg2.length - 1);
          }
          // create experience display
          createDisplay("experience");
        } else if (
          planet.name === "alpine" &&
          !document.querySelector("#projects")
        ) {
          if (!egg2Tracker[3] && isEgg2(egg2)) {
            egg2.splice(1, egg2.length - 1);
            egg2Tracker[3] = true;
            activateEggFire(
              scene,
              planet,
              discovery,
              achievementCleansingFire,
              achievementKeyCleansingFire,
              defaultVolume,
              lowVolume
            );
          } else if (egg2.length > 3) {
            egg2.splice(1, egg2.length - 1);
          }
          // create projects display
          createDisplay("projects");
        } else if (
          planet.name === "volcanic" &&
          !document.querySelector("#resume")
        ) {
          if (!egg2Tracker[4] && isEgg2(egg2)) {
            egg2.splice(1, egg2.length - 1);
            egg2Tracker[4] = true;
            activateEggFire(
              scene,
              planet,
              discovery,
              achievementCleansingFire,
              achievementKeyCleansingFire,
              defaultVolume,
              lowVolume
            );
          } else if (egg2.length > 3) {
            egg2.splice(1, egg2.length - 1);
          }
          // create resume display
          createDisplay("resume");
        }
      }
    )
  );
};
