// initialize a blank scene
const scene = new THREE.Scene();

// create a new camera in the middle of the screen
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 50;

// create a renderer and attach it to the dom
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// set some camera controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0.5, 0);
controls.update();
controls.enablePan = false;
controls.enableDamping = true;

// create a global reference to all our crap
window.GLOBAL_GL = {
    scene,
    camera,
    renderer,
    controls,
    laneObjects: {
    },
    danObjects: {
    },
    roosterObjects: {
    },
    shanaObjects: {
    },
    jonObjects: {
    }
}

// run all our inits
laneInit()
danInit()
jonInit()
shanaInit()
roosterInit()

// animation loop -  runs once per frame
const animate = function () {
    requestAnimationFrame(animate);
    laneRenderer()
    danRenderer()
    jonRenderer()
    shanaRenderer()
    roosterRenderer()

    // update controls
    window.GLOBAL_GL.controls.update();

    // rerender the screen
    renderer.render(window.GLOBAL_GL.scene, window.GLOBAL_GL.camera);
};
animate();

window.onresize = function () {
    window.GLOBAL_GL.camera.aspect = window.innerWidth / window.innerHeight;
    window.GLOBAL_GL.camera.updateProjectionMatrix();
    window.GLOBAL_GL.renderer.setSize(window.innerWidth, window.innerHeight);
};