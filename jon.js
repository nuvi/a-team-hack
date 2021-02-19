function jonInit() {
  let geometry = new THREE.SphereGeometry(.5);
  let material = new THREE.MeshBasicMaterial({ color: '#bada55', wireframe: true });
  const planet1 = new THREE.Mesh(geometry, material);
  
  geometry = new THREE.SphereGeometry(.9);
  material = new THREE.MeshBasicMaterial({ color: '#ff88fa', wireframe: true });
  const planet2 = new THREE.Mesh(geometry, material);

  geometry = new THREE.SphereGeometry(1.2);
  material = new THREE.MeshBasicMaterial({ color: '#00aaff', wireframe: true});
  const planet3 = new THREE.Mesh(geometry, material);

  window.GLOBAL_GL.scene.add(planet1);
  window.GLOBAL_GL.scene.add(planet2);
  window.GLOBAL_GL.scene.add(planet3);

  window.GLOBAL_GL.jonObjects.planet1 = planet1;
  window.GLOBAL_GL.jonObjects.planet2 = planet2;
  window.GLOBAL_GL.jonObjects.planet3 = planet3;
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
  orbitPlanet('planet1', 0.0017, 3, 0.005, time);
  orbitPlanet('planet2', 0.0015, 7, 0.005, time);
  orbitPlanet('planet3', 0.001, 15, 0.001, time);
}