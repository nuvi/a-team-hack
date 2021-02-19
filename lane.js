function laneInit() {
    const lightColor = 0xfff7ba
    sunLight = new THREE.PointLight(lightColor, 2, 50);

    let sun = new THREE.Object3D();
    var loader = new THREE.TextureLoader();
    loader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/lava/lavatile.jpg', function (texture) {
        var geometry = new THREE.SphereGeometry(5, 20, 20);
        var material = new THREE.MeshBasicMaterial({ map: texture });
        var mesh = new THREE.Mesh(geometry, material);
        sun.add(mesh);
    });
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
