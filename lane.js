function laneInit() {
    // make a cube and add it to the scene
    const geometry = new THREE.SphereGeometry(25, 25, 25);
    const wireframe = new THREE.WireframeGeometry(geometry);
    const line = new THREE.LineSegments(wireframe);
    line.material.depthTest = false;
    line.material.opacity = 0.25;
    line.material.transparent = true;
    window.GLOBAL_GL.scene.add(line);
    window.GLOBAL_GL.laneObjects.line = line
}

function laneRenderer() {
    window.GLOBAL_GL.laneObjects.line.rotation.y += .01
}