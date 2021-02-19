function laneInit() {
    const lightColor = 0xfff7ba
    sunLight = new THREE.PointLight(lightColor, 3);

    let sun = new THREE.Object3D();
    var loader = new THREE.TextureLoader();
    loader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/lava/lavatile.jpg', function (texture) {
        var geometry = new THREE.SphereGeometry(1, 20, 20);
        var material = new THREE.MeshBasicMaterial({ map: texture });
        var mesh = new THREE.Mesh(geometry, material);
        sun.add(mesh);
    });
    sunLight.add(sun);
    window.GLOBAL_GL.scene.add(sunLight);
    window.GLOBAL_GL.laneObjects.sun = sun

    const ambientLight = new THREE.AmbientLight(0xffffff, .25);
    scene.add(ambientLight);
}

function laneRenderer() {
    window.GLOBAL_GL.laneObjects.sun.rotation.y += .01
}
