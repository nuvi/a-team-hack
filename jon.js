function jonInit() {
  const geometry = new THREE.SphereGeometry(.5, 18, 18);
  const material = new THREE.MeshBasicMaterial({ color: '#bada55', wireframe: true });
  const planet = new THREE.Mesh(geometry, material);
  window.GLOBAL_GL.scene.add(planet);

  window.GLOBAL_GL.jonObjects.planet = planet;
}

function jonRenderer() {
  const time = Date.now();
  window.GLOBAL_GL.jonObjects.planet.rotation.x += 0.01;
  window.GLOBAL_GL.jonObjects.planet.rotation.y += 0.01;
  window.GLOBAL_GL.jonObjects.planet.position.x = Math.cos( time * 0.001 ) * 2;
  window.GLOBAL_GL.jonObjects.planet.position.y = Math.sin( time * 0.001 ) * 1;
  window.GLOBAL_GL.jonObjects.planet.position.z = Math.sin( time * 0.001 ) * 2;
}