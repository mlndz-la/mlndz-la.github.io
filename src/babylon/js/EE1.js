import * as BABYLON from "babylonjs";

export const activateEggChungus = (
  scene,
  isEgg,
  egg,
  discovery,
  name,
  achievementTheBiggest,
  achievementKeyTheBiggest,
  defaultVolume,
  lowVolume,
) => {
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
      revealMusic.volume = defaultVolume - 0.035;
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
          localStorage.setItem(achievementTheBiggest, achievementKeyTheBiggest);
        }
      );
    }, 3000);
  } else if (egg.length > 6) {
    egg.splice(2, egg.length - 1);
  }
};

export default activateEggChungus;
