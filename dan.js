window.danWorkShop = {
  minRadian: 0,
  maxRadian: 2 * Math.PI,
  ellipseOrbit1: {
    a: 10,
    b: 4,
    r: 0
  },
  ellipseOrbit2: {
    a: 15,
    b: 6,
    r: 0
  },
  ellipseX: function (ellipse) {
    ellipse.x = ellipse.a * Math.cos(ellipse.r);
  },
  ellipseY: function (ellipse) {
    ellipse.y = ellipse.b * Math.sin(ellipse.r);
  },
  orbit: function (mesh, orbit) {
    this.ellipseX(orbit);
    this.ellipseY(orbit);
    mesh.position.x = orbit.x;
    mesh.position.y = orbit.y;
    orbit.r += .01;
    if (orbit.r > this.maxRadian) {
      orbit.r = this.minRadian;
    }
  }
}

function danInit() {
  const geometry1 = new THREE.SphereGeometry(2, 8, 6);
  const material1 = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true, wireframeLinejoin: 'bevel' } );
  const sphere1 = new THREE.Mesh( geometry1, material1 );
  window.GLOBAL_GL.scene.add( sphere1 );

  window.GLOBAL_GL.danObjects.sphere1 = sphere1

  const geometry2 = new THREE.SphereGeometry(.2, 8, 6);
  const material2 = new THREE.MeshBasicMaterial( { color: 0x00ff00,  wireframe: true } );
  const sphere2 = new THREE.Mesh( geometry2, material2 );
  window.GLOBAL_GL.scene.add( sphere2 );

  window.GLOBAL_GL.danObjects.sphere2 = sphere2

  const geometry3 = new THREE.SphereGeometry(.4, 8, 6);
  const material3 = new THREE.MeshBasicMaterial( { color: 0x00ff00,  wireframe: true } );
  const sphere3 = new THREE.Mesh( geometry3, material3 );
  window.GLOBAL_GL.scene.add( sphere3 );

  window.GLOBAL_GL.danObjects.sphere3 = sphere3
}

function danRenderer() {
  window.GLOBAL_GL.danObjects.sphere1.rotation.x += 0.01;
  window.GLOBAL_GL.danObjects.sphere1.rotation.y += 0.01;

  window.GLOBAL_GL.danObjects.sphere2.rotation.x += 0.01;
  window.GLOBAL_GL.danObjects.sphere2.rotation.y += 0.01;

  window.GLOBAL_GL.danObjects.sphere3.rotation.x += 0.01;
  window.GLOBAL_GL.danObjects.sphere3.rotation.y += 0.01;

  window.danWorkShop.orbit(window.GLOBAL_GL.danObjects.sphere2, window.danWorkShop.ellipseOrbit1);
  window.danWorkShop.orbit(window.GLOBAL_GL.danObjects.sphere3, window.danWorkShop.ellipseOrbit2);
}
