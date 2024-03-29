import * as THREE from './three.module.js';
import { FontLoader } from './FontLoader.js';
import { TextGeometry } from './TextGeometry.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, .1, 5000);
const renderer = new THREE.WebGLRenderer();
const loader = new FontLoader();

scene.background = new THREE.Color( 0xB9F3FC );
renderer.setSize( window .innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.setPixelRatio( window.devicePixelRatio );

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

//text
loader.load('./CyclopentaneRegular.json', function (font){
    const tGeometry = new TextGeometry ("Jerome", {
        font: font,
        size: 1,
        height: 5
    }); 

    textMesh = new THREE.Mesh(tGeometry, [
        new THREE.MeshPhongMaterial({emmisive: "blue", emissiveIntensity: 5}),
        new THREE.MeshPhongMaterial({color: "red"})
    ]);

    scene.add(textMesh);
    textMesh.position.set(0, 0, 8);
});


//floor
const floorG = new THREE.BoxGeometry( 12, 1, 10 );
const floorM = new THREE.MeshStandardMaterial( { color: 0xDFD3C3 } );
const floor = new THREE.Mesh( floorG, floorM );
floor.receiveShadow = true;
floor.castShadow = true;
scene.add( floor );
floor.position.y = -3.3;

//##### WALLS #####
let wallcolor = 0xB5D5C5;
//left wall
const LWallG = new THREE.BoxGeometry( 1, 6, 10 );
const LWallM = new THREE.MeshStandardMaterial( {color: wallcolor} );
const LWall = new THREE.Mesh( LWallG, LWallM );
LWall.receiveShadow = true;
LWall.castShadow = true;
scene.add( LWall );
LWall.position.x = -6;
LWall.position.y = 0;
LWall.position.z = 0;

//right wall
const RWall1G = new THREE.BoxGeometry( .5, 2, 10 );
const RWall1M = new THREE.MeshStandardMaterial( {color: wallcolor} );
const RWall1 = new THREE.Mesh( RWall1G, RWall1M );
RWall1M.receiveShadow = true;
RWall1M.castShadow = true;
RWall1M.clipShadows = true;
scene.add( RWall1 );
RWall1.position.x = 5.99;
RWall1.position.y = -1.8;
RWall1.position.z = 0;

const RWall2G = new THREE.BoxGeometry( .5, 1, 10 );
const RWall2M = new THREE.MeshStandardMaterial( {color: wallcolor} );
const RWall2 = new THREE.Mesh( RWall2G, RWall2M );
RWall2M.receiveShadow = true;
RWall2M.castShadow = true;
RWall2M.clipShadows = true;
scene.add( RWall2 );
RWall2.position.x = 6;
RWall2.position.y = 2;
RWall2.position.z = 0;

const RWall3G = new THREE.BoxGeometry( .5, 3, 2 );
const RWall3M = new THREE.MeshStandardMaterial( {color: wallcolor} );
const RWall3 = new THREE.Mesh( RWall3G, RWall3M );
RWall3M.receiveShadow = true;
RWall3M.castShadow = true;
RWall3M.clipShadows = true;
scene.add( RWall3 );
RWall3.position.x = 6;
RWall3.position.y = 0;
RWall3.position.z = -.5;

const RWall4G = new THREE.BoxGeometry( .5, 3, 1 );
const RWall4M = new THREE.MeshStandardMaterial( {color: wallcolor} );
const RWall4 = new THREE.Mesh( RWall4G, RWall4M );
RWall4M.receiveShadow = true;
RWall4M.castShadow = true;
RWall4M.clipShadows = true;
scene.add( RWall4 );
RWall4.position.x = 6;
RWall4.position.y = 0;
RWall4.position.z = 4.5;

//back wall
const BWall1G = new THREE.BoxGeometry( 12, 6, 1 );
const BWall1M = new THREE.MeshStandardMaterial({color: wallcolor});
const BWall1 = new THREE.Mesh( BWall1G, BWall1M );
BWall1.receiveShadow = true;
BWall1.castShadow = true;
scene.add( BWall1 );
BWall1.position.x = 0;
BWall1.position.y = 0;
BWall1.position.z = -2;

//ceiling
const CeilG = new THREE.BoxGeometry( 12, 1, 10 );
const CeilM = new THREE.MeshStandardMaterial( {color: 0xDFD3C3} );
const Ceil = new THREE.Mesh( CeilG, CeilM );
Ceil.receiveShadow = true;
Ceil.castShadow = true;
scene.add( Ceil );
Ceil.position.x = 0;
Ceil.position.y = 3;
Ceil.position.z = 0;

//lightbulb
let lightbulbposX = 0
let lightbulbposY = 2.35
let lightbulbposZ = 3

const lightbulbG = new THREE.SphereGeometry( 0.1, 64, 32 );
const lightbulbM = new THREE.MeshBasicMaterial({color: 0xF5EA5A});
const lightbulb = new THREE.Mesh( lightbulbG, lightbulbM );
scene.add( lightbulb );
lightbulb.position.x = lightbulbposX;
lightbulb.position.y = lightbulbposY;
lightbulb.position.z = lightbulbposZ;

let lightbulbBaseRadius = .15
const lightbulbBaseG = new THREE.CylinderGeometry( lightbulbBaseRadius, lightbulbBaseRadius, .01, 64);
const lightbulbBaseM = new THREE.MeshStandardMaterial({color: 0xDDDDDD});
const lightbulbBase = new THREE.Mesh( lightbulbBaseG, lightbulbBaseM );
scene.add( lightbulbBase );
lightbulbBase.position.x = lightbulbposX;
lightbulbBase.position.y = lightbulbposY + .15;
lightbulbBase.position.z = lightbulbposZ;

let lightbulbOutletRadius = .05
const lightbulbOutletG = new THREE.CylinderGeometry( lightbulbOutletRadius, lightbulbOutletRadius, .1 );
const lightbulbOutletM = new THREE.MeshStandardMaterial({color: 0xDDDDDD});
const lightbulbOutlet = new THREE.Mesh( lightbulbOutletG, lightbulbOutletM );
scene.add( lightbulbOutlet );
lightbulbOutlet.position.x = lightbulbposX;
lightbulbOutlet.position.y = lightbulbposY + .1;
lightbulbOutlet.position.z = lightbulbposZ;

//wall lamp 1
let WallLamp1posX = 4;
let WallLamp1posY = .5;
let WallLamp1posZ = -1.5;
const wallLamp1G = new THREE.CylinderGeometry( .2, .2, .5, 64, 32, true, -90*Math.PI/180, Math.PI);
const wallLamp1M = new THREE.MeshStandardMaterial({color: 0x1A0000});
const wallLamp1 = new THREE.Mesh( wallLamp1G, wallLamp1M );
wallLamp1.receiveShadow = false ;
wallLamp1.castShadow = true;  
scene.add( wallLamp1 );
wallLamp1.position.x = WallLamp1posX;
wallLamp1.position.y = WallLamp1posY;
wallLamp1.position.z = WallLamp1posZ;

//wall lamp 2
let WallLamp2posX = -4;
let WallLamp2posY = .5;
let WallLamp2posZ = -1.5
const wallLamp2G = new THREE.CylinderGeometry( .2, .2, .5, 64, 32, true, -90*Math.PI/180, Math.PI);
const wallLamp2M = new THREE.MeshStandardMaterial({color: 0x1A0000});
const wallLamp2 = new THREE.Mesh( wallLamp2G, wallLamp2M );
wallLamp2.receiveShadow = false ;
wallLamp2.castShadow = true;  
scene.add( wallLamp2 );
wallLamp2.position.x = WallLamp2posX;
wallLamp2.position.y = WallLamp2posY;
wallLamp2.position.z = WallLamp2posZ;

//couch
let couchposX = -4.7;
let couchposY = -2.5;
let couchposZ = 2;
const couchG = new THREE.BoxGeometry( 1.5, 1, 4 );
const couchM = new THREE.MeshStandardMaterial({color: 0x2B3A55});
const couch = new THREE.Mesh( couchG, couchM );
couch.receiveShadow = true;
couch.castShadow = true;
scene.add( couch );
couch.position.x = couchposX;
couch.position.y = couchposY;
couch.position.z = couchposZ;

const backrestG = new THREE.BoxGeometry( .3, 1, 4 );
const backrestM = new THREE.MeshStandardMaterial({color: 0x2B3A55});
const backrest = new THREE.Mesh( backrestG, backrestM );
backrest.receiveShadow = true;
backrest.castShadow = true;
scene.add( backrest );
backrest.position.x = couchposX-.6;
backrest.position.y = couchposY+1;
backrest.position.z = couchposZ;

const armrest1G = new THREE.BoxGeometry( 1.2, .5, .3 );
const armrest1M = new THREE.MeshStandardMaterial({color: 0x2B3A55});
const armrest1 = new THREE.Mesh( armrest1G, armrest1M );
armrest1.receiveShadow = true;
armrest1.castShadow = true;
scene.add( armrest1 );
armrest1.position.x = couchposX+.15;
armrest1.position.y = couchposY+.75;
armrest1.position.z = couchposZ+1.85;

const armrest2G = new THREE.BoxGeometry( 1.2, .5, .3 );
const armrest2M = new THREE.MeshStandardMaterial({color: 0x2B3A55});
const armrest2 = new THREE.Mesh( armrest2G, armrest2M );
armrest2.receiveShadow = true;
armrest2.castShadow = true;
scene.add( armrest2 );
armrest2.position.x = couchposX+.15;
armrest2.position.y = couchposY+.75;
armrest2.position.z = couchposZ-1.85;

//coffee table
const coffeeTableG = new THREE.CircleGeometry( 3, 128 );
const coffeeTableM = new THREE.MeshStandardMaterial( { color: 0xA27B5C } );
const coffeeTable = new THREE.Mesh( coffeeTableG, coffeeTableM );
armrest2.receiveShadow = true;
armrest2.castShadow = true;
// scene.add( coffeeTable );
coffeeTable.position.y = 0;
coffeeTable.rotation.x = 90 * Math.PI / 180;

//tv
const tvG = new THREE.BoxGeometry( 4, 2, 1.1 );
const tvM = new THREE.MeshStandardMaterial({color: 0x000000});
const tv = new THREE.Mesh( tvG, tvM );
tvM.metallness = 1;
tvM.roughness = 0;
tv.receiveShadow = true;
tv.castShadow = true;
scene.add( tv );
tv.position.x = 0;
tv.position.y = 0;
tv.position.z = -2;

const tvScreenG = new THREE.BoxGeometry( 3.9, 1.9, 1.1001 );
const tvScreenM = new THREE.MeshPhysicalMaterial({color: 0xffffff});
const tvScreen = new THREE.Mesh( tvScreenG, tvScreenM );
tvScreen.receiveShadow = true;
tvScreen.castShadow = true;
scene.add( tvScreen );
tvScreen.position.x = 0;
tvScreen.position.y = 0;
tvScreen.position.z = -2;

//drawer
const drawerG = new THREE.BoxGeometry( 6, 1, 1 );
const drawerM = new THREE.MeshStandardMaterial({color: 0x03001C});
const drawer = new THREE.Mesh( drawerG, drawerM );
drawer.receiveShadow = true;
drawer.castShadow = true;
scene.add( drawer );
drawer.position.x = 0;
drawer.position.y = -2.5;
drawer.position.z = -1;

const drawerglassG = new THREE.BoxGeometry( 7, .05, 1 );
const drawerglassM = new THREE.MeshPhysicalMaterial({color: 0xCFD2CF});
const drawerglass = new THREE.Mesh( drawerglassG, drawerglassM );
drawerglassM.transparent = true;
drawerglassM.opacity = .7;
drawerglassM.metallness = 1;
drawerglassM.clearcoat = 1;
drawerglassM.transmission = 1;
drawerglassM.roughness = 0;
drawerglassM.metallness = 1;
drawerglassM.reflectivity = 1;
drawerglass.receiveShadow = true;
drawerglass.castShadow = false;
scene.add( drawerglass );
drawerglass.position.x = 0;
drawerglass.position.y = -1.5;
drawerglass.position.z = -1;

const drawerstand1G = new THREE.CylinderGeometry( .1, .1, .5, 64 );
const drawerstand1M = new THREE.MeshStandardMaterial({color: 0xD8D8D8});
const drawerstand1 = new THREE.Mesh( drawerstand1G, drawerstand1M );
drawerstand1.receiveShadow = true;
drawerstand1.castShadow = true;
scene.add( drawerstand1 );
drawerstand1.position.x = 2.5;
drawerstand1.position.y = -1.7;
drawerstand1.position.z = -1;

const drawerstand2G = new THREE.CylinderGeometry( .1, .1, .5, 64 );
const drawerstand2M = new THREE.MeshStandardMaterial({color: 0xD8D8D8});
const drawerstand2 = new THREE.Mesh( drawerstand2G, drawerstand2M );
drawerstand2.receiveShadow = true;
drawerstand2.castShadow = true;
scene.add( drawerstand2 );
drawerstand2.position.x = -2.5;
drawerstand2.position.y = -1.7;
drawerstand2.position.z = -1;

//##### SHADOW TEST #####

//shadow test
// const shadowtestG = new THREE.SphereGeometry( .3, 64, 32 );
// const shadowtestM = new THREE.MeshStandardMaterial({color: 0xDC0000});
// const shadowtest = new THREE.Mesh( shadowtestG, shadowtestM );
// shadowtest.receiveShadow = true;
// shadowtest.castShadow = true;
// scene.add( shadowtest );
// shadowtest.position.x = 0;
// shadowtest.position.y = -1;
// shadowtest.position.z = 3;

//#####   LIGHTS   #####

//world light
const AmbientLight = new THREE.AmbientLight( 0x404040, .3 );
scene.add( AmbientLight );
const light = new THREE.HemisphereLight( 0x404040, 0x404040, 1 );
scene.add( light );

//lightbulb light
const LightBulbLight = new THREE.PointLight( 0xffffff, .6, 100 );
LightBulbLight.castShadow = true;
scene.add( LightBulbLight );
LightBulbLight.position.x = lightbulbposX;
LightBulbLight.position.y = lightbulbposY+.05;
LightBulbLight.position.z = lightbulbposZ;

//wall lamp 1 light
const WallLamp1Light1 = new THREE.SpotLight( 0xFFC23C, 5, 2, 42*Math.PI/180, 0);
WallLamp1Light1.position.set( WallLamp1posX, WallLamp1posY, WallLamp1posZ+.1 );
WallLamp1Light1.target.position.set(WallLamp1posX, WallLamp1posY+100, WallLamp1posZ);
WallLamp1Light1.castShadow = true;
scene.add( WallLamp1Light1 );
scene.add(WallLamp1Light1.target);

const WallLamp1Light2 = new THREE.SpotLight( 0xFFC23C, 5, 2, 42*Math.PI/180, 0);
WallLamp1Light2.position.set( WallLamp1posX, WallLamp1posY, WallLamp1posZ+.1 );
WallLamp1Light2.target.position.set(WallLamp1posX, WallLamp1posY-100, WallLamp1posZ);
WallLamp1Light2.castShadow = true;
scene.add( WallLamp1Light2 );
scene.add(WallLamp1Light2.target);

//wall lamp 2 light
const WallLamp2Light1 = new THREE.SpotLight( 0xFFC23C, 5, 2, 42*Math.PI/180, 0);
WallLamp2Light1.position.set( WallLamp2posX, WallLamp2posY, WallLamp2posZ+.1 );
WallLamp2Light1.target.position.set(WallLamp2posX, WallLamp2posY+100, WallLamp2posZ);
WallLamp2Light1.castShadow = true;
scene.add( WallLamp2Light1 );
scene.add(WallLamp2Light1.target);

const WallLamp2Light2 = new THREE.SpotLight( 0xFFC23C, 5, 2, 42*Math.PI/180, 0);
WallLamp2Light2.position.set( WallLamp2posX, WallLamp2posY, WallLamp2posZ+.1 );
WallLamp2Light2.target.position.set(WallLamp2posX, WallLamp2posY-100, WallLamp2posZ);
WallLamp2Light2.castShadow = true;
scene.add( WallLamp2Light2 );
scene.add(WallLamp2Light2.target);

// const spotLightHelper = new THREE.SpotLightHelper( WallLampLight, 0x1A0000 );
// scene.add( spotLightHelper );

//sun
const sun = new THREE.DirectionalLight( 0xffffff, .5 );
sun.castShadow = true;
// scene.add( sun );
sun.position.x = 30;
sun.position.y = 30;







setInterval( onWindowResize, 100);

// camera.position.x = 10;
camera.position.z = 10; //backward //8
// camera.position.y = 2; //upward
// camera.rotation.x = -90 * Math.PI / 180;
// camera.rotation.y = 90 * Math.PI / 180;
// camera.rotation.z = -90 * Math.PI / 180;
function animate() {
	requestAnimationFrame( animate );

    //wallLamp1.rotation.x += 0.01;
    //wallLamp1.rotation.y += 0.01;

    renderer.render( scene, camera );
}
animate();