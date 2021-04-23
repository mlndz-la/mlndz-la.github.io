import * as BABYLON from "babylonjs";
import createDisplay from "./html/CreateDisplay.js";
import {
  defaultVolume,
  isEgg,
  isTouchEnabled,
  lowVolume,
} from "./html/utilities/Utilities.js";

const defaultScale = 1;
const increasedScale = 1.3;

export const onHoverChangePlanet = (
  scene,
  { mesh, name },
  spotLight,
  egg,
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
        if (egg[0]) {
          egg.push(name);
          if (isEgg(egg) && egg[0] && egg[1]) {
            const easter = document.getElementById("easter_egg");
            easter.volume = lowVolume;
            easter.play();
            egg[0] = false;
            discovery[0] = true;
            setTimeout(() => {
              // play reveal song
              const revealMusic = document.querySelector("#reveal");
              revealMusic.volume = defaultVolume - 0.025;
              revealMusic.play();
              // turn off sound
              const theme = document.querySelector("#player");
              theme.volume = 0;
              const scramble = document.querySelector("#open_modal");
              scramble.volume = 0;
              // egg
              const chungus = new BABYLON.SceneLoader.ImportMesh(
                "",
                "https://raw.githubusercontent.com/mlndz-la/pwAssets/main/",
                "chungus.glb",
                scene,
                (meshes) => {
                  const size = 0.3;
                  let mesh = meshes[0];
                  mesh.scaling = new BABYLON.Vector3(size, size, size);
                  mesh.position = new BABYLON.Vector3(5, -60, -5);
                  mesh.rotation = new BABYLON.Vector3(0, 2.6, 0);

                  // * for y position
                  // * -60 = start of animation
                  // * -25 is the mid point
                  // * -60 is the end
                  const frameRate = 10;
                  const expose = new BABYLON.Animation(
                    "chungusFly",
                    "position.y",
                    frameRate,
                    BABYLON.Animation.ANIMATIONTYPE_FLOAT,
                    BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
                  );
                  const keyFrames = [];
                  const endKeyFrame = frameRate * 15;
                  keyFrames.push({
                    frame: 0,
                    value: -60,
                  });
                  keyFrames.push({
                    frame: frameRate * 5,
                    value: -40,
                  });
                  keyFrames.push({
                    frame: frameRate * 7,
                    value: -25,
                  });
                  keyFrames.push({
                    frame: frameRate * 10,
                    value: -25,
                  });
                  keyFrames.push({
                    frame: frameRate * 12,
                    value: -25,
                  });
                  keyFrames.push({
                    frame: endKeyFrame,
                    value: -60,
                  });

                  expose.setKeys(keyFrames);

                  mesh.animations.push(expose);

                  const chungusAnimation = scene.beginAnimation(
                    mesh,
                    0,
                    endKeyFrame,
                    false,
                    0.3,
                    () => {
                      mesh.dispose();
                      const theme = document.querySelector("#player");
                      theme.volume = defaultVolume;
                      const scramble = document.querySelector("#open_modal");
                      scramble.volume = lowVolume;
                    }
                  );
                }
              );
            }, 3000);
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

export const onClickDisplayText = ({ mesh, name }, egg, discovery) => {
  mesh.actionManager.registerAction(
    new BABYLON.ExecuteCodeAction(
      {
        trigger: BABYLON.ActionManager.OnPickDownTrigger,
      },
      () => {
        if (name === "gaseous1" && !document.querySelector("#about")) {
          // create about display
          createDisplay("about", discovery);
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
