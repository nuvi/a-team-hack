// initialize a blank scene
const scene = new THREE.Scene();

// create a new camera in the middle of the screen
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// create a renderer and attach it to the dom
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// make a cube and add it to the scene
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// animation loop -  runs once per frame
const animate = function () {
    requestAnimationFrame(animate);
    laneRenderer()
    danRenderer()
    jonRenderer()
    shanaRenderer()
    roosterRenderer()

    // rerender the screen
    renderer.render(scene, camera);
};
animate();