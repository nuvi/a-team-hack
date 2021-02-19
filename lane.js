function laneInit() {
    const lightColor = 0xfff7ba
    sunLight = new THREE.PointLight(lightColor, 0);

    let sun = new THREE.Object3D();
    var loader = new THREE.TextureLoader();
    loader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/lava/lavatile.jpg', function (texture) {
        var geometry = new THREE.SphereGeometry(3, 20, 20);
        var material = new THREE.MeshPhysicalMaterial({ map: texture });
        var mesh = new THREE.Mesh(geometry, material);
        sun.add(mesh);
    });
    sunLight.add(sun);
    window.GLOBAL_GL.scene.add(sunLight);
    window.GLOBAL_GL.laneObjects.sun = sun
    window.GLOBAL_GL.laneObjects.sunLight = sunLight
    window.GLOBAL_GL.laneObjects.sunFading = false

    const ambientLight = new THREE.AmbientLight(0xffffff, 0);
    scene.add(ambientLight);
    window.GLOBAL_GL.laneObjects.ambientLight = ambientLight
}

function laneRenderer() {
    window.GLOBAL_GL.laneObjects.sun.rotation.y += .01

    const lightChangeFreq = .01
    if (window.GLOBAL_GL.laneObjects.sunFading) {
        window.GLOBAL_GL.laneObjects.sunLight.intensity -= lightChangeFreq
        window.GLOBAL_GL.laneObjects.ambientLight.intensity -= lightChangeFreq / 5
    } else {
        window.GLOBAL_GL.laneObjects.sunLight.intensity += lightChangeFreq
        window.GLOBAL_GL.laneObjects.ambientLight.intensity += lightChangeFreq / 5
    }
    if (window.GLOBAL_GL.laneObjects.sunLight.intensity < 0) {
        window.GLOBAL_GL.laneObjects.sunFading = false
    }
    if (window.GLOBAL_GL.laneObjects.sunLight.intensity > 3) {
        window.GLOBAL_GL.laneObjects.sunFading = true
    }
}
