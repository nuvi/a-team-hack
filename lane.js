function laneInit() {
    // make a cube and add it to the scene
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    window.GLOBAL_GL.scene.add(cube);

    window.GLOBAL_GL.laneObjects.cube = cube
}

function laneRenderer() {
    // rotate the cube a bit
    window.GLOBAL_GL.laneObjects.cube.rotation.x += 0.01;
    window.GLOBAL_GL.laneObjects.cube.rotation.y += 0.01;
}