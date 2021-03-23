import * as BABYLON from "babylonjs";
import createDisplay from "./html/CreateDisplay.js";

export const onHoverChangePlanet = (scene, { mesh }) => {
  // rotations per minute
  const rpm = 6;
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
  // on exit decrease rotation
  mesh.actionManager.registerAction(
    new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnPointerOutTrigger,
      () => {
        scene.registerBeforeRender(() => {
          const deltaTimeInMillis = scene.getEngine().getDeltaTime();
          mesh.rotation.y -=
            (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
        });
      }
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
      150
    )
  );
  // increase planet rotation
  mesh.actionManager.registerAction(
    new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnPointerOverTrigger,
      () => {
        scene.registerBeforeRender(() => {
          const deltaTimeInMillis = scene.getEngine().getDeltaTime();
          mesh.rotation.y +=
            (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
        });
      }
    )
  );
};

export const onHoverIlluminatePlanet = (scene, { mesh, name }) => {
  // adds a default gray glow to each planet
  let highlight = new BABYLON.HighlightLayer(name, scene);
  highlight.addMesh(mesh, new BABYLON.Color3.Gray());

  const spotLight = new BABYLON.SpotLight(
    "spotLight",
    new BABYLON.Vector3(15, 0, -60),
    new BABYLON.Vector3(0, 0, 1),
    Math.PI / 3,
    1,
    scene
  );
  spotLight.includedOnlyMeshes.push(null);
  spotLight.intensity = .8;
  spotLight.specular = new BABYLON.Color3.Black();
  spotLight.radius = 3;
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

export const onClickDisplayText = (scene, { mesh, name }) => {
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
          // create abilities display
          createDisplay("abilities");
          // abilities();
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
