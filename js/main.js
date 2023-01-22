const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, .1, 5000);
const renderer = new THREE.WebGLRenderer();

scene.background = new THREE.Color( 0xffffff );
renderer.setSize( window .innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setPixelRatio( window.devicePixelRatio );

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

//floor
const floorG = new THREE.BoxGeometry( 12, 1, 10 );
const floorM = new THREE.MeshStandardMaterial( { color: 0xDFD3C3 } );
const floor = new THREE.Mesh( floorG, floorM );
floor.receiveShadow = true;
scene.add( floor );
floor.position.y = -3.3;

//##### WALLS #####
let wallcolor = 0xB5D5C5;
//left wall
const LWallG = new THREE.BoxGeometry( 1, 6, 10 );
const LWallM = new THREE.MeshStandardMaterial( {color: wallcolor} );
const LWall = new THREE.Mesh( LWallG, LWallM );
LWall.receiveShadow = true;
scene.add( LWall );
LWall.position.x = -6;
LWall.position.y = 0;
LWall.position.z = 0;

//right wall
const RWallG = new THREE.BoxGeometry( 1, 6, 10 );
const RWallM = new THREE.MeshStandardMaterial( {color: wallcolor} );
const RWall = new THREE.Mesh( RWallG, RWallM );
RWall.receiveShadow = true;
scene.add( RWall );
RWall.position.x = 6;
RWall.position.y = 0;
RWall.position.z = 0;

//back wall
const BWallG = new THREE.BoxGeometry( 12, 6, 1 );
const BWallM = new THREE.MeshStandardMaterial({color: wallcolor});
const BWall = new THREE.Mesh( BWallG, BWallM );
BWall.receiveShadow = true;
scene.add( BWall );
BWall.position.x = 0;
BWall.position.y = 0;
BWall.position.z = -2;

//ceiling
const CeilG = new THREE.BoxGeometry( 12, 1, 4 );
const CeilM = new THREE.MeshStandardMaterial( {color: 0xDFD3C3} );
const Ceil = new THREE.Mesh( CeilG, CeilM );
Ceil.receiveShadow = true;
// scene.add( Ceil );
Ceil.position.x = 0;
Ceil.position.y = 3;
Ceil.position.z = 0;

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
let couchposZ = 0;
const couchG = new THREE.BoxGeometry( 1.5, 1, 2.5 );
const couchM = new THREE.MeshStandardMaterial({color: 0x2B3A55});
const couch = new THREE.Mesh( couchG, couchM );
couch.receiveShadow = true;
couch.castShadow = true;
scene.add( couch );
couch.position.x = couchposX;
couch.position.y = couchposY;
couch.position.z = couchposZ;

const backrestG = new THREE.BoxGeometry( .3, 1, 2.5 );
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
armrest1.position.z = couchposZ+1.1;

const armrest2G = new THREE.BoxGeometry( 1.2, .5, .3 );
const armrest2M = new THREE.MeshStandardMaterial({color: 0x2B3A55});
const armrest2 = new THREE.Mesh( armrest2G, armrest2M );
armrest2.receiveShadow = true;
armrest2.castShadow = true;
scene.add( armrest2 );
armrest2.position.x = couchposX+.15;
armrest2.position.y = couchposY+.75;
armrest2.position.z = couchposZ-1.1;

//coffee table
const coffeeTableG = new THREE.CircleGeometry( 3, 128 );
const coffeeTableM = new THREE.MeshStandardMaterial( { color: 0xA27B5C } );
const coffeeTable = new THREE.Mesh( coffeeTableG, coffeeTableM );
armrest2.receiveShadow = true;
armrest2.castShadow = true;
scene.add( coffeeTable );
coffeeTable.position.y = 0;
coffeeTable.rotation.x = 90 * Math.PI / 180;

//##### SHADOW TEST #####

//shadow test
const shadowtestG = new THREE.SphereGeometry( .3, 64, 32 );
const shadowtestM = new THREE.MeshStandardMaterial({color: 0xDC0000});
const shadowtest = new THREE.Mesh( shadowtestG, shadowtestM );
shadowtest.receiveShadow = true;
shadowtest.castShadow = true;
scene.add( shadowtest );
shadowtest.position.x = 0;
shadowtest.position.y = 0;
shadowtest.position.z = 0;

//#####   LIGHTS   #####

//world light
const AmbientLight = new THREE.AmbientLight( 0x404040, .5 );
scene.add( AmbientLight );
const light = new THREE.HemisphereLight( 0x404040, 0x404040, .5 );
scene.add( light );

//lightbulb light
const LightBulbLight = new THREE.PointLight( 0xffffff, .6, 100 );
LightBulbLight.castShadow = true;
scene.add( LightBulbLight );
LightBulbLight.position.x = lightbulbposX;
LightBulbLight.position.y = lightbulbposY;
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






setInterval( onWindowResize, 100);

camera.position.z = 0; //backward
camera.position.y = 4; //upward
camera.rotation.x = -90 * Math.PI / 180;
// camera.rotation.y = -45 * Math.PI / 180;
// camera.rotation.z = -90 * Math.PI / 180;
function animate() {
	requestAnimationFrame( animate );

    //wallLamp1.rotation.x += 0.01;
    //wallLamp1.rotation.y += 0.01;

    renderer.render( scene, camera );
}
animate();