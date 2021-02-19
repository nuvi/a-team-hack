function laneInit() {
    const lightColor = 0xfff7ba
    sunLight = new THREE.PointLight(lightColor, 2, 50);
    const sun = new THREE.Mesh(
        new THREE.SphereGeometry(5, 12, 6),
        new THREE.MeshBasicMaterial({ color: lightColor })
    )
    sunLight.add(sun);
    window.GLOBAL_GL.scene.add(sunLight);
    window.GLOBAL_GL.laneObjects.sun = sun

    // test mesh for the light - delete later
    geometry = new THREE.SphereGeometry(3, 50, 50);
    material = new THREE.MeshPhysicalMaterial({ color: 0xcccccc });
    let sphere2 = new THREE.Mesh(geometry, material);
    sphere2.position.x = 15
    window.GLOBAL_GL.scene.add(sphere2);
}

function laneRenderer() {
    window.GLOBAL_GL.laneObjects.sun.rotation.y += .01
}
