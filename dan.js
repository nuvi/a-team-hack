const tilt = 23.4 * Math.PI / 180; // tilt in radians
const axis = new THREE.Vector3( Math.sin( tilt ), Math.cos( tilt ), 0 ).normalize();

function danInit() {
  const geometry3 = new THREE.SphereGeometry(25, 25, 25);
  const material3 = new THREE.MeshBasicMaterial( { color: 0xffffff,  wireframe: true } );
  const sphere3 = new THREE.Mesh( geometry3, material3 );
  sphere3.position.x -= 50;
  sphere3.geometry.applyMatrix( new THREE.Matrix4().makeRotationZ( - tilt ) );


  window.GLOBAL_GL.scene.add( sphere3 );
  window.GLOBAL_GL.danObjects.sphere3 = sphere3

}

function danRenderer() {
  window.GLOBAL_GL.danObjects.sphere3.rotateOnAxis( axis, 0.01 );
}
