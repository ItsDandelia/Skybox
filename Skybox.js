import * as THREE from '/build/three.module.js';
import {OrbitControls} from '/jsm/controls/OrbitControls.js';
import Stats from '/jsm/libs/stats.module.js';

var scene = new THREE.Scene( );

var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 3;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var controls = new OrbitControls(camera, renderer.domElement);

const geometry = new THREE.BoxGeometry (2,2,2 );
const material = [
    new THREE.MeshBasicMaterial ( {map: new THREE.TextureLoader().load('Mus-front.jpg'), side: THREE.DoubleSide}),
    new THREE.MeshBasicMaterial ( {map: new THREE.TextureLoader().load('Mus-right.jpg'), side: THREE.DoubleSide}),
    new THREE.MeshBasicMaterial ({map: new THREE.TextureLoader().load('Mus-top.jpg'), side: THREE.DoubleSide} ),
    new THREE.MeshBasicMaterial ( { map: new THREE.TextureLoader().load('Mus-bottom.jpg'), side: THREE.DoubleSide}),
    new THREE.MeshBasicMaterial ({map: new THREE.TextureLoader().load('Mus-back.jpg'), side: THREE.DoubleSide} ),
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('Mus-frontnew.jpg'), side: THREE.DoubleSide} )
]
const cubeMaterial = new THREE.MeshFaceMaterial ( material );
const cube = new THREE.Mesh (geometry, cubeMaterial);
scene.add (cube);

function animate(){
    requestAnimationFrame(animate);
    controls.update();
    renderer.render (scene, camera);
}

animate();
