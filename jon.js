function jonInit() {
  let mercury = new THREE.Object3D();
  var loader = new THREE.TextureLoader();
  loader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/lava/lavatile.jpg', function (texture) {
    var geometry = new THREE.SphereGeometry(.5, 50, 50);
    var material = new THREE.MeshPhysicalMaterial({ map: texture });
    var mesh = new THREE.Mesh(geometry, material);
    mercury.add(mesh);
  });
  window.GLOBAL_GL.scene.add(mercury);

  let venus = new THREE.Object3D();
  var loader = new THREE.TextureLoader();
  loader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/lava/lavatile.jpg', function (texture) {
    var geometry = new THREE.SphereGeometry(.9, 50, 50);
    var material = new THREE.MeshPhysicalMaterial({ map: texture });
    var mesh = new THREE.Mesh(geometry, material);
    venus.add(mesh);
  });
  window.GLOBAL_GL.scene.add(venus);

  let earth = new THREE.Object3D();
  var loader = new THREE.TextureLoader();
  loader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/lava/lavatile.jpg', function (texture) {
    var geometry = new THREE.SphereGeometry(1.2, 50, 50);
    var material = new THREE.MeshPhysicalMaterial({ map: texture });
    var mesh = new THREE.Mesh(geometry, material);
    earth.add(mesh);
  });
  window.GLOBAL_GL.scene.add(earth);

  let mars = new THREE.Object3D();
  var loader = new THREE.TextureLoader();
  loader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/lava/lavatile.jpg', function (texture) {
    var geometry = new THREE.SphereGeometry(.6, 50, 50);
    var material = new THREE.MeshPhysicalMaterial({ map: texture });
    var mesh = new THREE.Mesh(geometry, material);
    mars.add(mesh);
  });
  window.GLOBAL_GL.scene.add(mars);

  let jupiter = new THREE.Object3D();
  var loader = new THREE.TextureLoader();
  loader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/lava/lavatile.jpg', function (texture) {
    var geometry = new THREE.SphereGeometry(2, 50, 50);
    var material = new THREE.MeshPhysicalMaterial({ map: texture });
    var mesh = new THREE.Mesh(geometry, material);
    jupiter.add(mesh);
  });
  window.GLOBAL_GL.scene.add(jupiter);

  let saturn = new THREE.Object3D();
  var loader = new THREE.TextureLoader();
  loader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/lava/lavatile.jpg', function (texture) {
    var geometry = new THREE.SphereGeometry(1.8, 50, 50);
    var material = new THREE.MeshPhysicalMaterial({ map: texture });
    var mesh = new THREE.Mesh(geometry, material);
    saturn.add(mesh);
  });
  window.GLOBAL_GL.scene.add(saturn);

  let uranus = new THREE.Object3D();
  var loader = new THREE.TextureLoader();
  loader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/lava/lavatile.jpg', function (texture) {
    var geometry = new THREE.SphereGeometry(1.3, 50, 50);
    var material = new THREE.MeshPhysicalMaterial({ map: texture });
    var mesh = new THREE.Mesh(geometry, material);
    uranus.add(mesh);
  });
  window.GLOBAL_GL.scene.add(uranus);

  let neptune = new THREE.Object3D();
  var loader = new THREE.TextureLoader();
  loader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/lava/lavatile.jpg', function (texture) {
    var geometry = new THREE.SphereGeometry(1, 50, 50);
    var material = new THREE.MeshPhysicalMaterial({ map: texture });
    var mesh = new THREE.Mesh(geometry, material);
    neptune.add(mesh);
  });
  window.GLOBAL_GL.scene.add(neptune);

  let pluto = new THREE.Object3D();
  var loader = new THREE.TextureLoader();
  loader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/lava/lavatile.jpg', function (texture) {
    var geometry = new THREE.SphereGeometry(.2, 50, 50);
    var material = new THREE.MeshPhysicalMaterial({ map: texture });
    var mesh = new THREE.Mesh(geometry, material);
    pluto.add(mesh);
  });
  window.GLOBAL_GL.scene.add(pluto);

  window.GLOBAL_GL.scene.add(mercury);
  window.GLOBAL_GL.scene.add(venus);
  window.GLOBAL_GL.scene.add(earth);
  window.GLOBAL_GL.scene.add(mars);
  window.GLOBAL_GL.scene.add(jupiter);
  window.GLOBAL_GL.scene.add(saturn);
  window.GLOBAL_GL.scene.add(uranus);
  window.GLOBAL_GL.scene.add(neptune);
  window.GLOBAL_GL.scene.add(pluto);

  window.GLOBAL_GL.jonObjects.mercury = mercury;
  window.GLOBAL_GL.jonObjects.venus = venus;
  window.GLOBAL_GL.jonObjects.earth = earth;
  window.GLOBAL_GL.jonObjects.mars = mars;
  window.GLOBAL_GL.jonObjects.jupiter = jupiter;
  window.GLOBAL_GL.jonObjects.saturn = saturn;
  window.GLOBAL_GL.jonObjects.uranus = uranus;
  window.GLOBAL_GL.jonObjects.neptune = neptune;
  window.GLOBAL_GL.jonObjects.pluto = pluto;
}

function orbitPlanet(planetName, speed, distance, rotationSpeed, time) {
  window.GLOBAL_GL.jonObjects[planetName].rotation.x += rotationSpeed;
  window.GLOBAL_GL.jonObjects[planetName].rotation.y += rotationSpeed;
  window.GLOBAL_GL.jonObjects[planetName].position.x = Math.cos(time * speed) * distance;
  window.GLOBAL_GL.jonObjects[planetName].position.y = Math.sin(time * speed) * distance;
  window.GLOBAL_GL.jonObjects[planetName].position.z = Math.sin(time * speed) * distance;
}

function jonRenderer() {
  const time = Date.now();
  orbitPlanet('mercury', 0.0017, 3, 0.005, time);
  orbitPlanet('venus', 0.0015, 7, 0.005, time);
  orbitPlanet('earth', 0.001, 15, 0.001, time);
  orbitPlanet('mars', 0.0009, 18, 0.004, time)
  orbitPlanet('jupiter', 0.00062, 22, 0.004, time)
  orbitPlanet('saturn', 0.00075, 28, 0.004, time)
  orbitPlanet('uranus', 0.0003, 32, 0.004, time)
  orbitPlanet('neptune', 0.0004, 39, 0.004, time)
  orbitPlanet('pluto', 0.0005, 42, 0.004, time)
}