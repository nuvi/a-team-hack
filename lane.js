function laneInit() {
    // make a sphere and add it to the scene
    let geometry = new THREE.SphereGeometry(25, 25, 25);
    let wireframe = new THREE.WireframeGeometry(geometry);
    let line = new THREE.LineSegments(wireframe);
    line.material.depthTest = false;
    line.material.opacity = 0.25;
    line.material.transparent = true;
    window.GLOBAL_GL.scene.add(line);
    window.GLOBAL_GL.laneObjects.line = line

    const lightColor = 0xfff7ba
    sunLight = new THREE.PointLight(lightColor, 2, 50);
    sunLight.add(new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 8), new THREE.MeshBasicMaterial({ color: lightColor })));
    window.GLOBAL_GL.scene.add(sunLight);

    // test mesh for the light - delete later
    geometry = new THREE.SphereGeometry(5, 50, 50);
    material = new THREE.MeshPhysicalMaterial({ color: 0xcccccc });
    let sphere2 = new THREE.Mesh(geometry, material);
    sphere2.position.x = 15
    window.GLOBAL_GL.scene.add(sphere2);
}

function laneRenderer() {
    window.GLOBAL_GL.laneObjects.line.rotation.y += .01
}
