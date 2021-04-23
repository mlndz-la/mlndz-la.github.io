import * as BABYLON from "babylonjs";

const createStars = (scene, xOffset) => {
  // create shape for particles
  const stars = new BABYLON.MeshBuilder.CreateDisc(
    "stars",
    { radius: 75, tessellation: 75 },
    scene
  );
  stars.material = new BABYLON.StandardMaterial("mat", scene);
  stars.rotation.x = xOffset;
  // stars.material.wireframe = true;
  stars.material.alpha = 0;
  // Create a particle system
  const particleSystem = new BABYLON.ParticleSystem("stars", 3000, scene);
  particleSystem.particleTexture = new BABYLON.Texture(
    "https://raw.githubusercontent.com/mlndz-la/pwAssets/main/flare.png",
    scene
  );
  particleSystem.minEmitBox = new BABYLON.Vector3(0, 0, 0); // Starting all from
  particleSystem.maxEmitBox = new BABYLON.Vector3(0, 0, 0); // To...

  const noiseTexture = new BABYLON.NoiseProceduralTexture("noise", 256, scene);
  noiseTexture.animationSpeedFactor = 18;
  noiseTexture.persistence = 2;
  noiseTexture.brightness = 0;
  noiseTexture.octaves = 7;

  particleSystem.noiseTexture = noiseTexture;
  particleSystem.noiseStrength = new BABYLON.Vector3(100, 100, 100);

  // Colors of all particles
  particleSystem.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
  particleSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
  particleSystem.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);

  setInterval(() => {
    particleSystem.color1 = new BABYLON.Color4(
      Math.random(),
      Math.random(),
      Math.random(),
      1.0
    );
    particleSystem.color2 = new BABYLON.Color4(
      Math.random(),
      Math.random(),
      Math.random(),
      1.0
    );
  }, 5000);

  // Size of each particle (random between...
  particleSystem.minSize = 0.08;
  particleSystem.maxSize = 0.25;

  // Life time of each particle (random between...
  particleSystem.minLifeTime = 0.3;
  particleSystem.maxLifeTime = 1.5;

  // Emission rate
  particleSystem.emitRate = 250;

  // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
  particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;

  // Set the gravity of all particles
  particleSystem.gravity = new BABYLON.Vector3(0, 0, 0);

  // Direction of each particle after it has been emitted
  particleSystem.direction1 = new BABYLON.Vector3(-1, 4, 1);
  particleSystem.direction2 = new BABYLON.Vector3(1, 4, -1);

  // Angular speed, in radians
  particleSystem.minAngularSpeed = 0;
  particleSystem.maxAngularSpeed = Math.PI;

  // Speed
  particleSystem.minEmitPower = 0;
  particleSystem.maxEmitPower = 0;
  particleSystem.updateSpeed = 0.0005;
  particleSystem.emitter = stars; // the starting object, the emitter
  const meshEmitter = new BABYLON.MeshParticleEmitter(stars);
  particleSystem.particleEmitterType = meshEmitter;
  particleSystem.emitter = stars;

  particleSystem.start();
};

export default createStars;
