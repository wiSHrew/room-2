const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

scene.background = new THREE.Color( 0xffffff );
renderer.setSize( window .innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;


//floor
const floorG = new THREE.BoxGeometry( 12, 1, 4 );
const floorM = new THREE.MeshStandardMaterial( { color: 0x3C2A21 } );
const floor = new THREE.Mesh( floorG, floorM );
floor.receiveShadow = true;
scene.add( floor );
floor.position.y = -3.3;

//left wall
const LWallG = new THREE.BoxGeometry( 1, 6, 4 );
const LWallM = new THREE.MeshStandardMaterial( {color: 0xE8D2A6} );
const LWall = new THREE.Mesh( LWallG, LWallM );
LWall.receiveShadow = true;
scene.add( LWall );
LWall.position.x = -6;
LWall.position.y = 0;
LWall.position.z = 0;

//right wall
const RWallG = new THREE.BoxGeometry( 1, 6, 4 );
const RWallM = new THREE.MeshStandardMaterial( {color: 0xE8D2A6} );
const RWall = new THREE.Mesh( RWallG, RWallM );
RWall.receiveShadow = true;
scene.add( RWall );
RWall.position.x = 6;
RWall.position.y = 0;
RWall.position.z = 0;

//back wall
const BWallG = new THREE.BoxGeometry( 12, 6, 1 );
const BWallM = new THREE.MeshStandardMaterial({color: 0xE8D2A6});
const BWall = new THREE.Mesh( BWallG, BWallM );
BWall.receiveShadow = true;
scene.add( BWall );
BWall.position.x = 0;
BWall.position.y = 0;
BWall.position.z = -2;

//ceiling
const CeilG = new THREE.BoxGeometry( 12, 1, 4 );
const CeilM = new THREE.MeshStandardMaterial( {color: 0xD0B8A8} );
const Ceil = new THREE.Mesh( CeilG, CeilM );
Ceil.receiveShadow = true;
scene.add( Ceil );
Ceil.position.x = 0;
Ceil.position.y = 3;
Ceil.position.z = 0;

//window
const windowGlassG = new THREE.BoxGeometry( 1.001, 2.5, 3 );
const windowGlassM = new THREE.MeshPhongMaterial({color: 0xAEFEFF, shininess: 50});
const windowGlass = new THREE.Mesh( windowGlassG, windowGlassM );
windowGlass.receiveShadow = true;
scene.add( windowGlass );
windowGlass.position.x = 6;
windowGlass.position.y = .5;
windowGlass.position.z = 1;

//lightbulb
let lightbulbposX = 0
let lightbulbposY = 2.35
let lightbulbposZ = 1

const lightbulbG = new THREE.SphereGeometry( 0.1, 64, 32 );
const lightbulbM = new THREE.MeshBasicMaterial({color: 0xF5EA5A, transparent: true, opacity: .9});
const lightbulb = new THREE.Mesh( lightbulbG, lightbulbM );
lightbulb.receiveShadow = true;
scene.add( lightbulb );
lightbulb.position.x = lightbulbposX;
lightbulb.position.y = lightbulbposY;
lightbulb.position.z = lightbulbposZ;

let lightbulbBaseRadius = .15
const lightbulbBaseG = new THREE.CylinderGeometry( lightbulbBaseRadius, lightbulbBaseRadius, .01, 64);
const lightbulbBaseM = new THREE.MeshStandardMaterial({color: 0xDDDDDD});
const lightbulbBase = new THREE.Mesh( lightbulbBaseG, lightbulbBaseM );
lightbulbBase.receiveShadow = true;
scene.add( lightbulbBase );
lightbulbBase.position.x = lightbulbposX;
lightbulbBase.position.y = lightbulbposY + .15;
lightbulbBase.position.z = lightbulbposZ;

let lightbulbOutletRadius = .05
const lightbulbOutletG = new THREE.CylinderGeometry( lightbulbOutletRadius, lightbulbOutletRadius, .1 );
const lightbulbOutletM = new THREE.MeshStandardMaterial({color: 0xDDDDDD});
const lightbulbOutlet = new THREE.Mesh( lightbulbOutletG, lightbulbOutletM );
lightbulbOutlet.receiveShadow = true;
scene.add( lightbulbOutlet );
lightbulbOutlet.position.x = lightbulbposX;
lightbulbOutlet.position.y = lightbulbposY + .1;
lightbulbOutlet.position.z = lightbulbposZ;

//world light
const AmbientLight = new THREE.AmbientLight( 0x404040 );
scene.add( AmbientLight );

//lightbulb light
const PointLight = new THREE.PointLight( 0xffffff, .6, 100 );
PointLight.castShadow = true;
scene.add( PointLight );
PointLight.position.x = 0;
PointLight.position.y = 2.35;
PointLight.position.z = 1;

//window light




PointLight.shadow.mapSize.width = 1024;
PointLight.shadow.mapSize.height = 1024;

camera.position.z = 5;
function animate() {
	requestAnimationFrame( animate );

renderer.render( scene, camera );
}
animate();