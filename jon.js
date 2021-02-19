function jonInit() {
  let geometry = new THREE.SphereGeometry(.5);
  let material = new THREE.MeshBasicMaterial({ color: '#bada55', wireframe: true });
  const mercury = new THREE.Mesh(geometry, material);
  
  geometry = new THREE.SphereGeometry(.9);
  material = new THREE.MeshBasicMaterial({ color: '#ff88fa', wireframe: true });
  const venus = new THREE.Mesh(geometry, material);

  geometry = new THREE.SphereGeometry(1.2);
  material = new THREE.MeshBasicMaterial({ color: '#00aaff', wireframe: true});
  const earth = new THREE.Mesh(geometry, material);

  geometry = new THREE.SphereGeometry(.6);
  material = new THREE.MeshBasicMaterial({ color: 'red', wireframe: true});
  const mars = new THREE.Mesh(geometry, material);

  geometry = new THREE.SphereGeometry(2);
  material = new THREE.MeshBasicMaterial({ color: 'yellow', wireframe: true});
  const jupiter = new THREE.Mesh(geometry, material);

  geometry = new THREE.SphereGeometry(1.8);
  material = new THREE.MeshBasicMaterial({ color: 'orange', wireframe: true});
  const saturn = new THREE.Mesh(geometry, material);

  geometry = new THREE.SphereGeometry(1.3);
  material = new THREE.MeshBasicMaterial({ color: 'blue', wireframe: true});
  const uranus = new THREE.Mesh(geometry, material);

  geometry = new THREE.SphereGeometry(1);
  material = new THREE.MeshBasicMaterial({ color: 'lightblue', wireframe: true});
  const neptune = new THREE.Mesh(geometry, material);

  geometry = new THREE.SphereGeometry(.2);
  material = new THREE.MeshBasicMaterial({ color: 'brown', wireframe: true});
  const pluto = new THREE.Mesh(geometry, material);

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