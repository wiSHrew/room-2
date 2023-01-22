const WallLamp2Light1 = new THREE.SpotLight( 0xFFC23C, 5, 2, 42*Math.PI/180, 0);
WallLamp2Light1.position.set( WallLamp2posX, WallLamp2posY, WallLamp2posZ+.1 );
WallLamp2Light1.target.position.set(WallLamp2posX, WallLamp2posY+100, WallLamp2posZ);
WallLamp2Light1.castShadow = true;
scene.add( WallLamp2Light1 );
scene.add(WallLamp2Light1.target);