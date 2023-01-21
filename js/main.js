import * as THREE from 'three';
import {OrbitControls} from 'js/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, .1, 5000);
const renderer = new THREE.WebGLRenderer();

scene.background = new THREE.Color( 0xffffff );
renderer.setSize( window .innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setPixelRatio( window.devicePixelRatio );

const controls = new OrbitControls( camera, renderer.domElement );
controls.listenToKeyEvents( window );
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.screenSpacePanning = false;

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

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
// const CeilG = new THREE.BoxGeometry( 12, 1, 4 );
// const CeilM = new THREE.MeshStandardMaterial( {color: 0xD0B8A8} );
// const Ceil = new THREE.Mesh( CeilG, CeilM );
// Ceil.receiveShadow = true;
// scene.add( Ceil );
// Ceil.position.x = 0;
// Ceil.position.y = 3;
// Ceil.position.z = 0;

//window
const windowGlassG = new THREE.BoxGeometry( 1.001, 3, 2.5 );
const windowGlassM = new THREE.MeshStandardMaterial({color: 0xAEFEFF, shininess: 50});
const windowGlass = new THREE.Mesh( windowGlassG, windowGlassM );
windowGlass.receiveShadow = true;
scene.add( windowGlass );
windowGlass.position.x = 6;
windowGlass.position.y = .5;
windowGlass.position.z = .5;

//lightbulb
let lightbulbposX = 0
let lightbulbposY = 2.35
let lightbulbposZ = 1

const lightbulbG = new THREE.SphereGeometry( 0.1, 64, 32 );
const lightbulbM = new THREE.MeshBasicMaterial({color: 0xF5EA5A});
const lightbulb = new THREE.Mesh( lightbulbG, lightbulbM );
lightbulb.receiveShadow = true;
lightbulb.castShadow = true;  
scene.add( lightbulb );
lightbulb.position.x = lightbulbposX;
lightbulb.position.y = lightbulbposY;
lightbulb.position.z = lightbulbposZ;

let lightbulbBaseRadius = .15
const lightbulbBaseG = new THREE.CylinderGeometry( lightbulbBaseRadius, lightbulbBaseRadius, .01, 64);
const lightbulbBaseM = new THREE.MeshStandardMaterial({color: 0xDDDDDD});
const lightbulbBase = new THREE.Mesh( lightbulbBaseG, lightbulbBaseM );
lightbulbBase.receiveShadow = true;
lightbulbBase.castShadow = true;  
scene.add( lightbulbBase );
lightbulbBase.position.x = lightbulbposX;
lightbulbBase.position.y = lightbulbposY + .15;
lightbulbBase.position.z = lightbulbposZ;

let lightbulbOutletRadius = .05
const lightbulbOutletG = new THREE.CylinderGeometry( lightbulbOutletRadius, lightbulbOutletRadius, .1 );
const lightbulbOutletM = new THREE.MeshStandardMaterial({color: 0xDDDDDD});
const lightbulbOutlet = new THREE.Mesh( lightbulbOutletG, lightbulbOutletM );
lightbulbOutlet.receiveShadow = true;
lightbulbOutlet.castShadow = true;  
scene.add( lightbulbOutlet );
lightbulbOutlet.position.x = lightbulbposX;
lightbulbOutlet.position.y = lightbulbposY + .1;
lightbulbOutlet.position.z = lightbulbposZ;

//wall lamp 1
const wallLamp1G = new THREE.CylinderGeometry( .3, .3, 1, 64, 32, true, -90*Math.PI/180, Math.PI);
const wallLamp1M = new THREE.MeshStandardMaterial({color: 0x2B3467});
const wallLamp1 = new THREE.Mesh( wallLamp1G, wallLamp1M );
wallLamp1.receiveShadow = true;
wallLamp1.castShadow = true;  
scene.add( wallLamp1 );
wallLamp1.position.x = 4;
wallLamp1.position.y = 0;
wallLamp1.position.z = -1.5;

//shadow test
const testG = new THREE.SphereGeometry( .5, 64, 32 );
const testM = new THREE.MeshStandardMaterial({color: 0xDC0000});
const test = new THREE.Mesh( testG, testM );
test.receiveShadow = true;
test.castShadow = true;   
scene.add( test );
test.position.x = 0;
test.position.y = 0;
test.position.z = 0;

//#####   LIGHTS   #####

//world light
const AmbientLight = new THREE.AmbientLight( 0x404040 );
scene.add( AmbientLight );

//lightbulb light
// const LightBulbLight = new THREE.PointLight( 0xffffff, .6, 100 );
// LightBulbLight.castShadow = true;
// scene.add( LightBulbLight );
// LightBulbLight.position.x = 0;
// LightBulbLight.position.y = 2.35;
// LightBulbLight.position.z = 1;

//wall lamp light
const WallLampLight = new THREE.SpotLight( 0xffffff, 1, 0,  90*Math.PI/180);
WallLampLight.position.set( 4, 0, 0 );
// WallLampLight.map = new THREE.TextureLoader().load( url );

WallLampLight.castShadow = true;

WallLampLight.shadow.mapSize.width = 1024;
WallLampLight.shadow.mapSize.height = 1024;

WallLampLight.shadow.camera.near = 500;
WallLampLight.shadow.camera.far = 4000;
WallLampLight.shadow.camera.fov = 30;

scene.add( WallLampLight );

const spotLightHelper = new THREE.SpotLightHelper( WallLampLight, 0x1A0000 );
scene.add( spotLightHelper );






setInterval( onWindowResize, 100);

camera.position.z = 0; //backward
camera.position.y = 4; //upward
camera.rotation.x = -90 * Math.PI / 180;
camera.rotation.y = -45 * Math.PI / 180;
camera.rotation.z = -90 * Math.PI / 180;

function animate() {
	requestAnimationFrame( animate );

    //wallLamp1.rotation.x += 0.01;
    //wallLamp1.rotation.y += 0.01;

    controls.update();

    renderer.render( scene, camera );
}
animate();