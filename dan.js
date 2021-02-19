const sunRadiusKM = 1391980 / 2;
const mercuryRadiusKM = 4880 / 2;
const venusRadiusKM = 12100 / 2;
const earthRadiusKM = 12800 / 2;
const marsRadiusKM = 6800 / 2;
const jupiterRadiusKM = 142000 / 2;
const saturnRadiusKM = 120000 / 2;
const uranusRadiusKM = 51800 / 2;
const neptuneRadiusKM = 49500 / 2;
const plutoRadiusKM = 2300 / 2;

const sunRadius = 2;

function planetRadius(sRadius, pRadius, sunRadius) {
  return (pRadius / sRadius) * sunRadius;
}

window.danPlanets = {
  sun: {
    r: sunRadius
  },
  mercury: {
    r: this.planetRadius(sunRadiusKM, mercuryRadiusKM, sunRadius),
    a: 10,
    b: 4,
    radian: 0
  },
  minRadian: 0,
  maxRadian: 2 * Math.PI,
  ellipseOrbit2: {
    a: 15,
    b: 6,
    radian: 0
  },
  ellipseX: function (ellipse) {
    ellipse.x = ellipse.a * Math.cos(ellipse.radian);
  },
  ellipseY: function (ellipse) {
    ellipse.y = ellipse.b * Math.sin(ellipse.radian);
  },
  orbit: function (mesh, orbit) {
    this.ellipseX(orbit);
    this.ellipseY(orbit);
    mesh.position.x = orbit.x;
    mesh.position.y = orbit.y;
    orbit.radian += .01;
    if (orbit.radian > this.maxRadian) {
      orbit.radian = this.minRadian;
    }
  }
}

function danInit() {
  // const geometry1 = new THREE.SphereGeometry(2, 8, 6);
  // const material1 = new THREE.MeshBasicMaterial( { color: 0xeff542, wireframe: true, wireframeLinejoin: 'bevel' } );
  // const sun = new THREE.Mesh( geometry1, material1 );
  // window.GLOBAL_GL.scene.add( sun );
  //
  // window.GLOBAL_GL.danObjects.sun = sun
  //
  // const geometry2 = new THREE.SphereGeometry(window.danPlanets.mercury.r, 8, 6);
  // const material2 = new THREE.MeshBasicMaterial( { color: 0x00ff00,  wireframe: true } );
  // const mercury = new THREE.Mesh( geometry2, material2 );
  // window.GLOBAL_GL.scene.add( mercury );
  //
  // window.GLOBAL_GL.danObjects.mercury = mercury

  const geometry3 = new THREE.SphereGeometry(20, 25, 25);
  const material3 = new THREE.MeshBasicMaterial( { color: 0xffffff,  wireframe: true } );
  const sphere3 = new THREE.Mesh( geometry3, material3 );
  sphere3.position.x -= 50;
  sphere3.rotation.z += .5;
  window.GLOBAL_GL.scene.add( sphere3 );

  window.GLOBAL_GL.danObjects.sphere3 = sphere3
}

function danRenderer() {
  // window.GLOBAL_GL.danObjects.mercury.rotation.x += 0.01;
  // window.GLOBAL_GL.danObjects.mercury.rotation.y += 0.01;
  //
  // window.danPlanets.orbit(window.GLOBAL_GL.danObjects.mercury, window.danPlanets.mercury);
  // window.danPlanets.orbit(window.GLOBAL_GL.danObjects.sphere3, window.danPlanets.ellipseOrbit2);

  window.GLOBAL_GL.danObjects.sphere3.rotation.z += 0.01;
  window.GLOBAL_GL.danObjects.sphere3.rotation.x += 0.01;
  window.GLOBAL_GL.danObjects.sphere3.rotation.y += 0.01;

}
