import * as BABYLON from "babylonjs";

// Set up animation sheet
const setupAnimationSheet = function (
  scene,
  system,
  texture,
  width,
  height,
  numSpritesWidth,
  numSpritesHeight,
  animationSpeed,
  isRandom,
  loop
) {
  // Assign animation parameters
  system.isAnimationSheetEnabled = true;
  system.particleTexture = new BABYLON.Texture(texture, scene, false, false);
  system.spriteCellWidth = width / numSpritesWidth;
  system.spriteCellHeight = height / numSpritesHeight;
  const numberCells = numSpritesWidth * numSpritesHeight;
  system.startSpriteCellID = 0;
  system.endSpriteCellID = numberCells - 1;
  system.spriteCellChangeSpeed = animationSpeed;
  system.spriteRandomStartCell = isRandom;
  system.updateSpeed = 1 / 60;
  system.spriteCellLoop = loop;
};

// Particle color
const colorParticles = function (system) {
  system.addColorGradient(0.0, new BABYLON.Color4(1, 1, 1, 0));
  system.addColorGradient(0.1, new BABYLON.Color4(1, 1, 1, 0.6));
  system.addColorGradient(0.9, new BABYLON.Color4(1, 1, 1, 0.6));
  system.addColorGradient(1.0, new BABYLON.Color4(1, 1, 1, 0));

  // Defines the color ramp to apply
  system.addRampGradient(0.0, new BABYLON.Color3(1, 1, 1));
  system.addRampGradient(1.0, new BABYLON.Color3(0.7968, 0.3685, 0.1105));
  system.useRampGradients = true;

  system.addColorRemapGradient(0, 0.2, 1);
  system.addColorRemapGradient(1.0, 0.2, 1.0);
};

const colorSparks = function (system) {
  system.addColorGradient(0.0, new BABYLON.Color4(0.9245, 0.654, 0.0915, 0));
  system.addColorGradient(
    0.04,
    new BABYLON.Color4(0.9062, 0.6132, 0.0942, 0.1)
  );
  system.addColorGradient(0.4, new BABYLON.Color4(0.7968, 0.3685, 0.1105, 1));
  system.addColorGradient(0.7, new BABYLON.Color4(0.6886, 0.1266, 0.1266, 1));
  system.addColorGradient(0.9, new BABYLON.Color4(0.3113, 0.0367, 0.0367, 0.6));
  system.addColorGradient(1.0, new BABYLON.Color4(0.3113, 0.0367, 0.0367, 0));

  // Defines the color ramp to apply
  system.addRampGradient(0.0, new BABYLON.Color3(1, 1, 1));
  system.addRampGradient(1.0, new BABYLON.Color3(0.7968, 0.63685, 0.4105));
  system.useRampGradients = true;

  system.addColorRemapGradient(0, 0, 0.1);
  system.addColorRemapGradient(0.2, 0.1, 0.8);
  system.addColorRemapGradient(0.3, 0.2, 0.85);
  system.addColorRemapGradient(0.35, 0.4, 0.85);
  system.addColorRemapGradient(0.4, 0.5, 0.9);
  system.addColorRemapGradient(0.5, 0.95, 1.0);
  system.addColorRemapGradient(1.0, 0.95, 1.0);
};

export const activateEggFire = (
  scene,
  { xAxis, yAxis, xAxis375, yAxis375, xAxis450, yAxis450 },
  discovery,
  achievementCleansingFire,
  achievementKeyCleansingFire,
  defaultVolume,
  lowVolume
) => {
  const isAchieved = localStorage.getItem(achievementKeyCleansingFire);
  if (!isAchieved) {
    localStorage.setItem(achievementCleansingFire, achievementKeyCleansingFire);
    discovery[1] = true;
  }

  let x;
  let y;
  const width = window.screen.width;

  // check screen size
  // set variables according to screen size
  if (width <= 375) {
    x = xAxis375;
    y = yAxis375;
  } else if (width <= 450) {
    x = xAxis450;
    y = yAxis450;
  } else {
    x = xAxis;
    y = yAxis;
  }

  // play reveal song
  const easter = document.getElementById("easter_egg");
  easter.volume = lowVolume;
  easter.play();
  // turn off sound
  const theme = document.querySelector("#player");
  theme.volume = 0;
  const scramble = document.querySelector("#open_modal");
  scramble.volume = 0;
  // egg
  // Fire
  const fireSystem = new BABYLON.ParticleHelper.CreateDefault(
    new BABYLON.Vector3(0, 3.25, 0),
    5,
    scene
  );
  fireSystem.createBoxEmitter(
    new BABYLON.Vector3(0, 1, 0),
    new BABYLON.Vector3(0, 1, 0),
    new BABYLON.Vector3(x, y, -0.5),
    new BABYLON.Vector3(x, y, 0.5)
  );
  setupAnimationSheet(
    scene,
    fireSystem,
    "https://raw.githubusercontent.com/PatrickRyanMS/BabylonJStextures/master/ParticleSystems/Fire/Fire_SpriteSheet1_8x8.png",
    1024,
    1024,
    8,
    8,
    1,
    true,
    true
  );
  fireSystem.minLifeTime = 2;
  fireSystem.maxLifeTime = 3;
  fireSystem.emitRate = 2;
  fireSystem.minSize = 6;
  fireSystem.maxSize = 8;
  fireSystem.minInitialRotation = -0.1;
  fireSystem.maxInitialRotation = 0.1;
  colorParticles(fireSystem);
  fireSystem.minEmitPower = 0;
  fireSystem.maxEmitPower = 0;
  fireSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ADD;
  fireSystem.billboardMode = BABYLON.AbstractMesh.BILLBOARDMODE_Y;

  fireSystem.start();

  setTimeout(() => {
    // turn on sound
    const theme = document.querySelector("#player");
    theme.volume = defaultVolume;
    const scramble = document.querySelector("#open_modal");
    scramble.volume = lowVolume;
  }, 3000);
};

export const validEggFire = (array) => {
  if (array[0] && array[1] && array[2] && array[3] && array[4]) {
    return false;
  } else {
    return true;
  }
};

export default activateEggFire;
