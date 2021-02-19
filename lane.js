function laneInit() {
    const texture = new THREE.TextureLoader().load("https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2140&q=80");
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    window.GLOBAL_GL.scene.background = texture

    const lightColor = 0xfff7ba
    sunLight = new THREE.PointLight(lightColor, 2);

    let sun = new THREE.Object3D();
    var loader = new THREE.TextureLoader();
    loader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/lava/lavatile.jpg', function (texture) {
        var geometry = new THREE.SphereGeometry(window.planetSizes.sun, 50, 50);
        var material = new THREE.MeshBasicMaterial({ map: texture });
        var mesh = new THREE.Mesh(geometry, material);
        sun.add(mesh);
    });
    sunLight.add(sun);
    window.GLOBAL_GL.scene.add(sunLight);
    window.GLOBAL_GL.laneObjects.sun = sun
    window.GLOBAL_GL.laneObjects.sunLight = sunLight

    window.GLOBAL_GL.laneObjects.cometLights = []
    for (let i = 0; i < 100; i++) {
        let cometLight = new THREE.PointLight(lightColor, 1, 100, 2);
        const geometry = new THREE.SphereGeometry(1, 32, 32);
        const material = new THREE.MeshBasicMaterial({ color: lightColor });
        const comet = new THREE.Mesh(geometry, material);
        cometLight.position.x = getRandomInt(-200, 200)
        cometLight.position.z = getRandomInt(-200, 200)
        cometLight.position.y = getRandomInt(-200, 200)
        cometLight.speedy = getRandomInt(1, 3)
        cometLight.posX = Math.random() > .5
        cometLight.posY = Math.random() > .5
        cometLight.posZ = Math.random() > .5
        cometLight.add(comet);
        window.GLOBAL_GL.scene.add(cometLight);
        window.GLOBAL_GL.laneObjects.cometLights.push(cometLight)
    }

    const ambientLight = new THREE.AmbientLight(lightColor, .25);
    scene.add(ambientLight);
    window.GLOBAL_GL.laneObjects.ambientLight = ambientLight
}

function laneRenderer() {
    window.GLOBAL_GL.laneObjects.sun.rotation.z += .01

    const maxSpace = 500
    for (let cometLight of window.GLOBAL_GL.laneObjects.cometLights) {
        if (cometLight.posX) {
            cometLight.position.x -= cometLight.speedy
        } else {
            cometLight.position.x += cometLight.speedy
        }
        if (cometLight.posY) {
            cometLight.position.y -= cometLight.speedy
        } else {
            cometLight.position.y += cometLight.speedy
        }
        if (cometLight.posZ) {
            cometLight.position.z -= cometLight.speedy
        } else {
            cometLight.position.z += cometLight.speedy
        }

        if (cometLight.position.x > maxSpace) {
            cometLight.position.x = -maxSpace
        }
        if (cometLight.position.x < -maxSpace) {
            cometLight.position.x = maxSpace
        }
        if (cometLight.position.y > maxSpace) {
            cometLight.position.y = -maxSpace
        }
        if (cometLight.position.y < -maxSpace) {
            cometLight.position.y = maxSpace
        }
        if (cometLight.position.z > maxSpace) {
            cometLight.position.z = -maxSpace
        }
        if (cometLight.position.z < -maxSpace) {
            cometLight.position.z = maxSpace
        }
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * Math.floor(max - min)) + min;
}
