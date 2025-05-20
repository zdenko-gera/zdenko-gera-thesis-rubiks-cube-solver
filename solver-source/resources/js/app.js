import './bootstrap';
import 'bootstrap';

import Alpine from 'alpinejs';
import * as THREE from 'three';
// import { createApp } from 'vue';
// import app from './components/app.vue';
// import solver from './components/solver.vue';
import {TrackballControls} from "three/addons";

// createApp(app).mount('#app');
// createApp(solver).mount('#solver');

window.Alpine = Alpine;

Alpine.start();

let whiteSideStickers = [];
let redSideStickers = [];
let greenSideStickers = [];
let orangeSideStickers = [];
let blueSideStickers = [];
let yellowSideStickers = [];

const white = new THREE.Color(0xffffff);
const red = new THREE.Color(0xdb5856);
const green = new THREE.Color(0x32a852);
const orange = new THREE.Color(0xff9641);
const blue = new THREE.Color(0x3273ff);
const yellow = new THREE.Color(0xffff99);
const grey = new THREE.Color(0xaaaaaa);

if (location.pathname == '/classicCube') {
    document.addEventListener('DOMContentLoaded', () => {
        // Alapvető Three.js beállítás
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.lookAt(new THREE.Vector3(0, 0, 0));
        camera.position.set(0, 20, -25);
        const renderer = new THREE.WebGLRenderer();
        let controls;

        // Méret beállítása
        renderer.setSize(600, 600);
        renderer.domElement.style.width = '35dvw';
        renderer.domElement.style.height = '40svh';
        renderer.setClearColor(0x000000, 0);
        renderer.shadowMap.enabled = true;
        document.getElementById('cube-container').appendChild(renderer.domElement);

        // *** kozepso kockak start ***
        let stickerGeometry;
        let stickerMaterial;
        let stickerMesh;

        let boxGeometry = new THREE.BoxGeometry(5, 5, 5);
        let boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7});
        let boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh.position.set(5, 0, 0);
        boxMesh.receiveShadow = true;
        boxMesh.castShadow = true;
        scene.add(boxMesh);

        boxGeometry = new THREE.BoxGeometry(5, 5, 5);
        boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7});
        boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh.position.set(0, 5, 0);
        boxMesh.receiveShadow = true;
        boxMesh.castShadow = true;
        scene.add(boxMesh);

        boxGeometry = new THREE.BoxGeometry(5, 5, 5);
        boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7});
        boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh.position.set(0, 0, -5);
        boxMesh.receiveShadow = true;
        boxMesh.castShadow = true;
        scene.add(boxMesh);

        boxGeometry = new THREE.BoxGeometry(5, 5, 5);
        boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7});
        boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh.position.set(0, 0, 5);
        boxMesh.receiveShadow = true;
        boxMesh.castShadow = true;
        scene.add(boxMesh);

        boxGeometry = new THREE.BoxGeometry(5, 5, 5);
        boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7});
        boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh.position.set(-5, 0, 0);
        boxMesh.receiveShadow = true;
        boxMesh.castShadow = true;
        scene.add(boxMesh);

        boxGeometry = new THREE.BoxGeometry(5, 5, 5);
        boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7});
        boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh.position.set(0, -5, 0);
        boxMesh.receiveShadow = true;
        boxMesh.castShadow = true;
        scene.add(boxMesh);

        // *** kozepso kockak vege ***

        // feher zold elkocka
        boxGeometry = new THREE.BoxGeometry(5, 5, 5);
        boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7});
        boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh.position.set(5, 5, 0);
        boxMesh.receiveShadow = true;
        boxMesh.castShadow = true;
        scene.add(boxMesh);
        // feher zold elkocka vege

        // feher narancs elkocka
        boxGeometry = new THREE.BoxGeometry(5, 5, 5);
        boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7});
        boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh.position.set(0, 5, 5);
        boxMesh.receiveShadow = true;
        boxMesh.castShadow = true;
        scene.add(boxMesh);
        // feher narancs elkocka vege

        // feher kek elkocka
        boxGeometry = new THREE.BoxGeometry(5, 5, 5);
        boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7});
        boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh.position.set(-5, 5, 0);
        boxMesh.receiveShadow = true;
        boxMesh.castShadow = true;
        scene.add(boxMesh);
        // feher kek elkocka vege

        // feher piros elkocka
        boxGeometry = new THREE.BoxGeometry(5, 5, 5);
        boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7});
        boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh.position.set(0, 5, -5);
        boxMesh.receiveShadow = true;
        boxMesh.castShadow = true;
        scene.add(boxMesh);
        // feher piros elkocka vege

        // citrom zold elkocka
        boxGeometry = new THREE.BoxGeometry(5, 5, 5);
        boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7});
        boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh.position.set(5, -5, 0);
        boxMesh.receiveShadow = true;
        boxMesh.castShadow = true;
        scene.add(boxMesh);
        // citrom zold elkocka vege

        // citrom narancs elkocka
        boxGeometry = new THREE.BoxGeometry(5, 5, 5);
        boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7});
        boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh.position.set(0, -5, 5);
        boxMesh.receiveShadow = true;
        boxMesh.castShadow = true;
        scene.add(boxMesh);
        // citrom narancs elkocka vege

        // citrom kek elkocka
        boxGeometry = new THREE.BoxGeometry(5, 5, 5);
        boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7});
        boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh.position.set(-5, -5, 0);
        boxMesh.receiveShadow = true;
        boxMesh.castShadow = true;
        scene.add(boxMesh);
        // citrom kek elkocka vege

        // citrom piros elkocka
        boxGeometry = new THREE.BoxGeometry(5, 5, 5);
        boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7});
        boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh.position.set(0, -5, -5);
        boxMesh.receiveShadow = true;
        boxMesh.castShadow = true;
        scene.add(boxMesh);
        // citrom piros elkocka vege


        // *** SAROKKOCKAK ***
        // feher zold piros sarokkocka
        boxGeometry = new THREE.BoxGeometry(5, 5, 5);
        boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7});
        boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh.position.set(5, 5, -5);
        boxMesh.receiveShadow = true;
        boxMesh.castShadow = true;
        scene.add(boxMesh);
        // feher zold piros sarokkocka vege

        // citrom zold narancs sarokkocka
        boxGeometry = new THREE.BoxGeometry(5, 5, 5);
        boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7});
        boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh.position.set(5, -5, -5);
        boxMesh.receiveShadow = true;
        boxMesh.castShadow = true;
        scene.add(boxMesh);
        // citrom zold piros sarokkocka vege

        // feher zold narancs sarokkocka
        boxGeometry = new THREE.BoxGeometry(5, 5, 5);
        boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7});
        boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh.position.set(5, 5, 5);
        boxMesh.receiveShadow = true;
        boxMesh.castShadow = true;
        scene.add(boxMesh);
        // feher zold narancs sarokkocka vege

        // citrom zold narancs sarokkocka
        boxGeometry = new THREE.BoxGeometry(5, 5, 5);
        boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7});
        boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh.position.set(5, -5, 5);
        boxMesh.receiveShadow = true;
        boxMesh.castShadow = true;
        scene.add(boxMesh);
        // citrom zold narancs sarokkocka vege

        // feher kek narancs sarokkocka
        boxGeometry = new THREE.BoxGeometry(5, 5, 5);
        boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7});
        boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh.position.set(-5, 5, 5);
        boxMesh.receiveShadow = true;
        boxMesh.castShadow = true;
        scene.add(boxMesh);
        // feher kek narancs sarokkocka vege

        // citrom kek narancs sarokkocka
        boxGeometry = new THREE.BoxGeometry(5, 5, 5);
        boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7});
        boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh.position.set(-5, -5, 5);
        boxMesh.receiveShadow = true;
        boxMesh.castShadow = true;
        scene.add(boxMesh);
        // citrom kek narancs sarokkocka vege

        // feher kek piros sarokkocka
        boxGeometry = new THREE.BoxGeometry(5, 5, 5);
        boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7});
        boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh.position.set(-5, 5, -5);
        boxMesh.receiveShadow = true;
        boxMesh.castShadow = true;
        scene.add(boxMesh);
        // feher kek piros sarokkocka vege

        // citrom kek piros sarokkocka
        boxGeometry = new THREE.BoxGeometry(5, 5, 5);
        boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7});
        boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh.position.set(-5, -5, -5);
        boxMesh.receiveShadow = true;
        boxMesh.castShadow = true;
        scene.add(boxMesh);
        // citrom kek piros sarokkocka vege
        // *** SAROKKOCKAK VEGE ***

        // kek piros elkocka
        boxGeometry = new THREE.BoxGeometry(5, 5, 5);
        boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7});
        boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh.position.set(-5, 0, -5);
        boxMesh.receiveShadow = true;
        boxMesh.castShadow = true;
        scene.add(boxMesh);
        // kek piros elkocka vege

        // kek narancs elkocka
        boxGeometry = new THREE.BoxGeometry(5, 5, 5);
        boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7});
        boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh.position.set(-5, 0, 5);
        boxMesh.receiveShadow = true;
        boxMesh.castShadow = true;
        scene.add(boxMesh);
        // kek narancs elkocka vege

        // zold narancs elkocka
        boxGeometry = new THREE.BoxGeometry(5, 5, 5);
        boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7});
        boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh.position.set(5, 0, 5);
        boxMesh.receiveShadow = true;
        boxMesh.castShadow = true;
        scene.add(boxMesh);
        // zold narancs elkocka vege

        // zold piros elkocka
        boxGeometry = new THREE.BoxGeometry(5, 5, 5);
        boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7});
        boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh.position.set(5, 0, -5);
        boxMesh.receiveShadow = true;
        boxMesh.castShadow = true;
        scene.add(boxMesh);
        // zold piros elkocka vege


        // Fények
        let ambient = new THREE.AmbientLight(0x666666, Math.PI * 3.4);
        scene.add(ambient);

        let hLight = new THREE.HemisphereLight(0x343434, 0x000000, 80);
        scene.add(hLight);

        // Az ablak későbbi átméretezése esetén visszahívható függvény megadása
        //window.addEventListener('resize', handleWindowResize, false);

        // Kamera vezérlés
        controls = new TrackballControls(camera, renderer.domElement);
        controls.rotateSpeed = 5.0;
        controls.panSpeed = 1.0;

        // Matricák
        // fehér matricák
        // 0
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(5, 7.5, 5);
        stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        whiteSideStickers.push(stickerMesh);

        // 1
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(0, 7.5, 5);
        stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        whiteSideStickers.push(stickerMesh);

        // 2
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(-5, 7.5, 5);
        stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        whiteSideStickers.push(stickerMesh);

        // 3
        let whiteStickerGeometry3 = new THREE.BoxGeometry(0.5, 4, 4);
        let whiteStickerMaterial3 = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(whiteStickerGeometry3, whiteStickerMaterial3);
        stickerMesh.position.set(5, 7.5, 0);
        stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        whiteSideStickers.push(stickerMesh);

        // 4
        let whiteStickerGeometry4 = new THREE.BoxGeometry(0.5, 4, 4);
        let whiteStickerMaterial4 = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(whiteStickerGeometry4, whiteStickerMaterial4);
        stickerMesh.position.set(0, 7.5, 0);
        stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        whiteSideStickers.push(stickerMesh);

        // 5
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(-5, 7.5, 0);
        stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        whiteSideStickers.push(stickerMesh);

        // 6
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(5, 7.5, -5);
        stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        whiteSideStickers.push(stickerMesh);

        // 7
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(0, 7.5, -5);
        stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        whiteSideStickers.push(stickerMesh);

        //8
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(-5, 7.5, -5);
        stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        whiteSideStickers.push(stickerMesh);
        // fehér matricák vége

        // piros matricák

        // 0
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(5, 5, -7.5);
        stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        redSideStickers.push(stickerMesh);

        // 1
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(0, 5, -7.5);
        stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        redSideStickers.push(stickerMesh);

        // 2
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(-5, 5, -7.5);
        stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        redSideStickers.push(stickerMesh);

        // 3
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(5, 0, -7.5);
        stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        redSideStickers.push(stickerMesh);

        // 4
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(0, 0, -7.5);
        stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        redSideStickers.push(stickerMesh);

        // 5
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(-5, 0, -7.5);
        stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        redSideStickers.push(stickerMesh);

        // 6
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(5, -5, -7.5);
        stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        redSideStickers.push(stickerMesh);

        // 7
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(0, -5, -7.5);
        stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        redSideStickers.push(stickerMesh);

        // 8
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(-5, -5, -7.5);
        stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        redSideStickers.push(stickerMesh);

        // piros matricák vége

        // zöld matricák

        // 0
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(7.5, -5, 5);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        greenSideStickers.push(stickerMesh);

        // 1
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(7.5, 0, 5);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        greenSideStickers.push(stickerMesh);

        // 2
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(7.5, 5, 5);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        greenSideStickers.push(stickerMesh);

        // 3
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(7.5, -5, 0);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        greenSideStickers.push(stickerMesh);

        // 4
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({
            color: grey,
            wireframe: false
        });
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(7.5, 0, 0);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        greenSideStickers.push(stickerMesh);

        // 5
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(7.5, 5, 0);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        greenSideStickers.push(stickerMesh);

        // 6
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(7.5, -5, -5);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        greenSideStickers.push(stickerMesh);

        // 7
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(7.5, 0, -5);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        greenSideStickers.push(stickerMesh);

        // 8
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(7.5, 5, -5);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        greenSideStickers.push(stickerMesh);

        // zöld matricák vége

        // narancs matricák
        // 0
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(5, -5, 7.5);
        stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        orangeSideStickers.push(stickerMesh);

        // 1
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(0, -5, 7.5);
        stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        orangeSideStickers.push(stickerMesh);

        // 2
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(-5, -5, 7.5);
        stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        orangeSideStickers.push(stickerMesh);

        // 3
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(5, 0, 7.5);
        stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        orangeSideStickers.push(stickerMesh);

        // 4
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(0, 0, 7.5);
        stickerMesh.rotation.y = 1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        orangeSideStickers.push(stickerMesh);

        // 5
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(-5, 0, 7.5);
        stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        orangeSideStickers.push(stickerMesh);

        // 6
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(5, 5, 7.5);
        stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        orangeSideStickers.push(stickerMesh);

        // 7
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(0, 5, 7.55);
        stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        orangeSideStickers.push(stickerMesh);

        // 8
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(-5, 5, 7.5);
        stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        orangeSideStickers.push(stickerMesh);

        // narancs matricák vége

        // citrom matricák

        // 0
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(5, -7.5, -5);
        stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        yellowSideStickers.push(stickerMesh);

        // 1
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(0, -7.5, -5);
        stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        yellowSideStickers.push(stickerMesh);

        // 2
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(-5, -7.5, -5);
        stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        yellowSideStickers.push(stickerMesh);

        // 3
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(5, -7.5, 0);
        stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        yellowSideStickers.push(stickerMesh);

        // 4
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(0, -7.5, 0);
        stickerMesh.rotation.z = 1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        yellowSideStickers.push(stickerMesh);

        // 5
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(-5, -7.5, 0);
        stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        yellowSideStickers.push(stickerMesh);

        // 6
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(5, -7.5, 5);
        stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        yellowSideStickers.push(stickerMesh);

        // 7
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(0, -7.5, 5);
        stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        yellowSideStickers.push(stickerMesh);

        // 8
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(-5, -7.5, 5);
        stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        yellowSideStickers.push(stickerMesh);

        // citrom matricák vége

        // kék matricák

        // 0
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(-7.5, 5, 5);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        blueSideStickers.push(stickerMesh);

        // 1
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(-7.5, 0, 5);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        blueSideStickers.push(stickerMesh);

        // 2
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(-7.5, -5, 5);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        blueSideStickers.push(stickerMesh);

        // 3
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(-7.5, 5, 0);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        blueSideStickers.push(stickerMesh);

        // 4
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(-7.5, 0, 0);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        blueSideStickers.push(stickerMesh);

        // 5
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(-7.5, -5, 0);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        blueSideStickers.push(stickerMesh);

        // 6
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(-7.5, 5, -5);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        blueSideStickers.push(stickerMesh);

        // 7
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(-7.5, 0, -5);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        blueSideStickers.push(stickerMesh);

        // 8
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(-7.5, -5, -5);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        blueSideStickers.push(stickerMesh);

        // kék matricák vége


        const front = document.getElementById("front");
        const frontBackwards = document.getElementById("front-backwards");
        const back = document.getElementById("back");
        const backBackwards = document.getElementById("back-backwards");
        const left = document.getElementById("left");
        const leftBackwards = document.getElementById("left-backwards");
        const right = document.getElementById("right");
        const rightBackwards = document.getElementById("right-backwards");
        const up = document.getElementById("up");
        const upBackwards = document.getElementById("up-backwards");
        const bottom = document.getElementById("down");
        const bottomBackwards = document.getElementById("down-backwards");
        const resetCamera = document.getElementById("reset-camera-button");
        const submitCubeButton = document.getElementById("submit-cube-button");

        let sum = 0;
        let selectedObjects = [];
        let rotating = false;

        function rotateFace(axis, dist, backwards = false, callback) {
            if (rotating) {
                return;
            }
            rotating = true;
            sum = 0;
            const sideToRotate = new THREE.Object3D();

            for (let i = 0; i < scene.children.length; i++) {
                let obj = scene.children[i];
                if (dist < 0) {
                    if (obj.position[axis] <= dist) {
                        selectedObjects.push(obj);
                        sum++;
                    }
                } else {
                    if (obj.position[axis] >= dist) {
                        selectedObjects.push(obj);
                        sum++;
                    }
                }
            }
            // console.log(sum);
            for (let i = 0; i < selectedObjects.length; i++) {
                sideToRotate.add(selectedObjects[i]);
            }

            scene.add(sideToRotate);
            let step = 0;

            function animateRotation() {
                if (step < 15) {
                    if (backwards === false) {
                        sideToRotate.rotation[axis] += (Math.PI / 2) / 15;
                    } else {
                        sideToRotate.rotation[axis] -= (Math.PI / 2) / 15;
                    }
                    step++;
                    requestAnimationFrame(animateRotation);
                } else {
                    for (let i = 0; i < selectedObjects.length; i++) {
                        scene.attach(selectedObjects[i]);
                    }
                    //sideToRotate.rotation.set(0, 0, 0);
                    //sideToRotate.updateMatrixWorld(true);

                    selectedObjects = [];
                    //scene.remove(sideToRotate);
                    rotating = false;
                    // console.log('Children: ' + sideToRotate.children);
                    //sideToRotate = null;
                    if (callback) callback();
                }
            }

            animateRotation();
        }

        front.addEventListener("click", () => {
            rotateFace('z', -4.9);
        });

        frontBackwards.addEventListener("click", () => {
            rotateFace('z', -4.9, true);
        });

        back.addEventListener("click", () => {
            rotateFace('z', 4.9, true);
        });

        backBackwards.addEventListener("click", () => {
            rotateFace('z', 4.9);
        });

        left.addEventListener("click", () => {
            rotateFace('x', 4.9, true);
        });

        leftBackwards.addEventListener("click", () => {
            rotateFace('x', 4.9);
        });

        right.addEventListener("click", () => {
            rotateFace('x', -4.9);
        });

        rightBackwards.addEventListener("click", () => {
            rotateFace('x', -4.9, true);
        });

        up.addEventListener("click", () => {
            rotateFace('y', 4.9, true);
        });

        upBackwards.addEventListener("click", () => {
            rotateFace('y', 4.9);
        });

        bottom.addEventListener("click", () => {
            rotateFace('y', -4.9);
        });

        bottomBackwards.addEventListener("click", () => {
            rotateFace('y', -4.9, true);
        });

        resetCamera.addEventListener("click", () => {
            controls.reset();
        });

        submitCubeButton.addEventListener("click", () => {
            transferColorsTo3DClassicCube();
        });

        const stepsButtons = document.getElementById('steps-btn-container').children;


        // átveszi a színeket, de a 3D-s forgatások miatt össze vannak kavarodva az objektumok, így rosszul kapják meg a színeiket.

        /*document.getElementById('validity-check-button').addEventListener('click', () => {
            document.getElementById('instructions').innerText = '';
            transferColorsTo3DClassicCube();
        });*/

        for (let i = 0; i < stepsButtons.length;i++) {
            stepsButtons[i].addEventListener('click', () => {
                followInstructions();
            });
        }

        function followInstructions() {
            const instructions = document.getElementById('instructions').innerText;
            let index = 0;

            function executeNext() {
                if (index >= document.getElementById('instructions').innerText.length) {
                    return;
                } // Ha elfogytak az utasítások, kilépünk

                let axis, dist, backwards = false;

                switch (instructions[index]) {
                    case 'F':
                        axis = 'z'; dist = -4.9;
                        if (instructions[index + 1] === "'") backwards = true;
                        break;
                    case 'U':
                        axis = 'y'; dist = 4.9;
                        if (instructions[index + 1] !== "'") backwards = true;
                        break;
                    case 'L':
                        axis = 'x'; dist = 4.9;
                        if (instructions[index + 1] !== "'") backwards = true;
                        break;
                    case 'R':
                        axis = 'x'; dist = -4.9;
                        if (instructions[index + 1] === "'") backwards = true;
                        break;
                    case 'D':
                        axis = 'y'; dist = -4.9;
                        if (instructions[index + 1] === "'") backwards = true;
                        break;
                    case 'B':
                        axis = 'z'; dist = 4.9;
                        if (instructions[index + 1] !== "'") backwards = true;
                        break;
                    default:
                        index++;
                        executeNext(); // Ha nincs érvényes utasítás, folytassuk a következővel
                        return;
                }

                index++; // Következő karakterre lépünk
                if (instructions[index] === "'") index++; // Ha aposztróf van, kihagyjuk

                rotateFace(axis, dist, backwards, () => {
                    setTimeout(executeNext, 300); // Várunk fél másodpercet, mielőtt a következő mozgást indítjuk
                });
            }

            executeNext(); // Indítjuk a folyamatot
        }

        function transferColorsTo3DClassicCube() {
            let stickers = [greenSideStickers, orangeSideStickers, whiteSideStickers, redSideStickers, yellowSideStickers, blueSideStickers];

            let greenSideChildren = document.getElementById('green-side');
            let orangeSideChildren = document.getElementById('orange-side');
            let whiteSideChildren = document.getElementById('white-side');
            let redSideChildren = document.getElementById('red-side');
            let yellowSideChildren = document.getElementById('yellow-side');
            let blueSideChildren = document.getElementById('blue-side');

            let htmlSides = [greenSideChildren, orangeSideChildren, whiteSideChildren, redSideChildren, yellowSideChildren, blueSideChildren];

            for (let i = 0; i < htmlSides.length; i++) {
                for (let j = 0; j < 9; j++) {
                    switch (htmlSides[i].children[j].style.backgroundColor) {
                        case 'rgb(134, 213, 134)':
                            stickers[i][j].material.color = green;
                            break;
                        case 'rgb(219, 88, 86)':
                            stickers[i][j].material.color = red;
                            break;
                        case 'rgb(255, 150, 65)':
                            stickers[i][j].material.color = orange;
                            break;
                        case 'rgb(50, 115, 255)':
                            stickers[i][j].material.color = blue;
                            break;
                        case 'rgb(255, 255, 255)':
                            stickers[i][j].material.color = white;
                            break;
                        case 'rgb(255, 255, 153)':
                            stickers[i][j].material.color = yellow;
                            break;
                    }
                }
            }
        }

        // Animáció
        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);


            controls.update();
        }

        animate();
    });
} else if (location.pathname == '/twoByTwoCube') {
    document.addEventListener('DOMContentLoaded', () => {
        // Alapvető Three.js beállítás
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.lookAt(new THREE.Vector3(0, 0, 0));
        camera.position.set(0, 15, -20);
        const renderer = new THREE.WebGLRenderer();
        let controls;

        // Méret beállítása
        renderer.setSize(600, 600);
        renderer.domElement.style.width = '35rem';
        renderer.domElement.style.height = '22rem';
        renderer.setClearColor(0x000000, 0);
        renderer.shadowMap.enabled = true;
        document.getElementById('cube-container').appendChild(renderer.domElement);

        // *** kozepso kockak start ***
        let stickerGeometry;
        let stickerMaterial;
        let stickerMesh;
        let boxGeometry;
        let boxMaterial;
        let boxMesh;


        // *** SAROKKOCKAK ***
        // feher zold piros sarokkocka
        boxGeometry = new THREE.BoxGeometry(5, 5, 5);
        boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7});
        boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh.position.set(2.5, 2.5, -2.5);
        boxMesh.receiveShadow = true;
        boxMesh.castShadow = true;
        scene.add(boxMesh);
        // feher zold piros sarokkocka vege

        // citrom zold narancs sarokkocka
        boxGeometry = new THREE.BoxGeometry(5, 5, 5);
        boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7});
        boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh.position.set(2.5, -2.5, -2.5);
        boxMesh.receiveShadow = true;
        boxMesh.castShadow = true;
        scene.add(boxMesh);
        // citrom zold piros sarokkocka vege

        // feher zold narancs sarokkocka
        boxGeometry = new THREE.BoxGeometry(5, 5, 5);
        boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7});
        boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh.position.set(2.5, 2.5, 2.5);
        boxMesh.receiveShadow = true;
        boxMesh.castShadow = true;
        scene.add(boxMesh);
        // feher zold narancs sarokkocka vege

        // citrom zold narancs sarokkocka
        boxGeometry = new THREE.BoxGeometry(5, 5, 5);
        boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7});
        boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh.position.set(2.5, -2.5, 2.5);
        boxMesh.receiveShadow = true;
        boxMesh.castShadow = true;
        scene.add(boxMesh);
        // citrom zold narancs sarokkocka vege

        // feher kek narancs sarokkocka
        boxGeometry = new THREE.BoxGeometry(5, 5, 5);
        boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7});
        boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh.position.set(-2.5, 2.5, 2.5);
        boxMesh.receiveShadow = true;
        boxMesh.castShadow = true;
        scene.add(boxMesh);
        // feher kek narancs sarokkocka vege

        // citrom kek narancs sarokkocka
        boxGeometry = new THREE.BoxGeometry(5, 5, 5);
        boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7});
        boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh.position.set(-2.5, -2.5, 2.5);
        boxMesh.receiveShadow = true;
        boxMesh.castShadow = true;
        scene.add(boxMesh);
        // citrom kek narancs sarokkocka vege

        // feher kek piros sarokkocka
        boxGeometry = new THREE.BoxGeometry(5, 5, 5);
        boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7});
        boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh.position.set(-2.5, 2.5, -2.5);
        boxMesh.receiveShadow = true;
        boxMesh.castShadow = true;
        scene.add(boxMesh);
        // feher kek piros sarokkocka vege

        // citrom kek piros sarokkocka
        boxGeometry = new THREE.BoxGeometry(5, 5, 5);
        boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7});
        boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh.position.set(-2.5, -2.5, -2.5);
        boxMesh.receiveShadow = true;
        boxMesh.castShadow = true;
        scene.add(boxMesh);
        // citrom kek piros sarokkocka vege
        // *** SAROKKOCKAK VEGE ***


        // Fények
        let ambient = new THREE.AmbientLight(0x666666, Math.PI * 3.4);
        scene.add(ambient);

        let hLight = new THREE.HemisphereLight(0x343434, 0x000000, 80);
        scene.add(hLight);

        // Az ablak későbbi átméretezése esetén visszahívható függvény megadása
        //window.addEventListener('resize', handleWindowResize, false);

        // Kamera vezérlés
        controls = new TrackballControls(camera, renderer.domElement);
        controls.rotateSpeed = 5.0;
        controls.panSpeed = 1.0;


// Matricák
        // fehér matricák
        // 0
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(2.5, 5, 2.5);
        stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        whiteSideStickers.push(stickerMesh);

        // 2
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(-2.5, 5, 2.5);
        stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        whiteSideStickers.push(stickerMesh);

        // 6
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(2.5, 5, -2.5);
        stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        whiteSideStickers.push(stickerMesh);

        //8
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(-2.5, 5, -2.5);
        stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        whiteSideStickers.push(stickerMesh);
        // fehér matricák vége

        // piros matricák

        // 0
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(2.5, 2.5, -5);
        stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        redSideStickers.push(stickerMesh);

        // 2
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(-2.5, 2.5, -5);
        stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        redSideStickers.push(stickerMesh);

        // 6
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(2.5, -2.5, -5);
        stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        redSideStickers.push(stickerMesh);

        // 8
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(-2.5, -2.5, -5);
        stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        redSideStickers.push(stickerMesh);

        // piros matricák vége

        // zöld matricák

        // 0
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(5, -2.5, 2.5);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        greenSideStickers.push(stickerMesh);

        // 2
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(5, 2.5, 2.5);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        greenSideStickers.push(stickerMesh);

        // 6
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(5, -2.5, -2.5);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        greenSideStickers.push(stickerMesh);

        // 8
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(5, 2.5, -2.5);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        greenSideStickers.push(stickerMesh);

        // zöld matricák vége

        // narancs matricák
        // 0
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(2.5, -2.5, 5);
        stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        orangeSideStickers.push(stickerMesh);

        // 2
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(-2.5, -2.5, 5);
        stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        orangeSideStickers.push(stickerMesh);

        // 6
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(2.5, 2.5, 5);
        stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        orangeSideStickers.push(stickerMesh);

        // 8
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(-2.5, 2.5, 5);
        stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        orangeSideStickers.push(stickerMesh);

        // narancs matricák vége

        // citrom matricák

        // 0
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(2.5, -5, -2.5);
        stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        yellowSideStickers.push(stickerMesh);

        // 2
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(-2.5, -5, -2.5);
        stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        yellowSideStickers.push(stickerMesh);

        // 6
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(2.5, -5, 2.5);
        stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        yellowSideStickers.push(stickerMesh);

        // 8
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(-2.5, -5, 2.5);
        stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        yellowSideStickers.push(stickerMesh);

        // citrom matricák vége

        // kék matricák

        // 0
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(-5, 2.5, 2.5);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        blueSideStickers.push(stickerMesh);

        // 2
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(-5, -2.5, 2.5);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        blueSideStickers.push(stickerMesh);

        // 6
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(-5, 2.5, -2.5);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        blueSideStickers.push(stickerMesh);

        // 8
        stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
        stickerMaterial = new THREE.MeshPhongMaterial({color: grey, wireframe: false});
        stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
        stickerMesh.position.set(-5, -2.5, -2.5);
        stickerMesh.receiveShadow = true;
        stickerMesh.castShadow = true;
        scene.add(stickerMesh);
        blueSideStickers.push(stickerMesh);

        // kék matricák vége

        const front = document.getElementById("front");
        const frontBackwards = document.getElementById("front-backwards");
        const back = document.getElementById("back");
        const backBackwards = document.getElementById("back-backwards");
        const left = document.getElementById("left");
        const leftBackwards = document.getElementById("left-backwards");
        const right = document.getElementById("right");
        const rightBackwards = document.getElementById("right-backwards");
        const up = document.getElementById("up");
        const upBackwards = document.getElementById("up-backwards");
        const bottom = document.getElementById("down");
        const bottomBackwards = document.getElementById("down-backwards");
        const resetCamera = document.getElementById("reset-camera-button");
        const submitCubeButton = document.getElementById("submit-cube-button-tbt");
        let selectedObjects = [];
        let rotating = false;

        function rotateFace(axis, dist, backwards = false, callback) {
            if (rotating) return;
            rotating = true;
            const sideToRotate = new THREE.Object3D();

            for (let i = 0; i < scene.children.length; i++) {
                let obj = scene.children[i];
                if (dist < 0) {
                    if (obj.position[axis] <= dist) {
                        selectedObjects.push(obj);
                    }
                } else {
                    if (obj.position[axis] >= dist) {
                        selectedObjects.push(obj);
                    }
                }
            }
            for (let i = 0; i < selectedObjects.length; i++) {
                sideToRotate.add(selectedObjects[i]);
            }

            scene.add(sideToRotate);
            let step = 0;

            function animateRotation() {
                if (step < 15) {
                    if (backwards === false) {
                        sideToRotate.rotation[axis] += (Math.PI / 2) / 15;
                    } else {
                        sideToRotate.rotation[axis] -= (Math.PI / 2) / 15;
                    }
                    step++;
                    requestAnimationFrame(animateRotation);
                } else {
                    for (let i = 0; i < selectedObjects.length; i++) {
                        scene.attach(selectedObjects[i]);
                    }

                    selectedObjects = [];
                    rotating = false;
                    if (callback) callback();
                }
            }

            animateRotation();
        }

        front.addEventListener("click", () => {
            rotateFace('z', -2.4);
        });

        frontBackwards.addEventListener("click", () => {
            rotateFace('z', -2.4, true);
        });

        back.addEventListener("click", () => {
            rotateFace('z', 2.4, true);
        });

        backBackwards.addEventListener("click", () => {
            rotateFace('z', 2.4);
        });

        left.addEventListener("click", () => {
            rotateFace('x', 2.4, true);
        });

        leftBackwards.addEventListener("click", () => {
            rotateFace('x', 2.4);
        });

        right.addEventListener("click", () => {
            rotateFace('x', -2.4);
        });

        rightBackwards.addEventListener("click", () => {
            rotateFace('x', -2.4, true);
        });

        up.addEventListener("click", () => {
            rotateFace('y', 2.4, true);
        });

        upBackwards.addEventListener("click", () => {
            rotateFace('y', 2.4);
        });

        bottom.addEventListener("click", () => {
            rotateFace('y', -2.4);
        });

        bottomBackwards.addEventListener("click", () => {
            rotateFace('y', -2.4, true);
        });

        resetCamera.addEventListener("click", () => {
            controls.reset();
        });

        submitCubeButton.addEventListener("click", () => {
            transferColorsTo3DTwoByTwoCube();
        });

        const stepsButtons = document.getElementById('steps-btn-container').children;

        for (let i = 0; i < stepsButtons.length;i++) {
            stepsButtons[i].addEventListener('click', () => {
                followInstructions();
            });
        }

        function followInstructions() {
            const instructions = document.getElementById('instructions').innerText;
            let index = 0;

            function executeNext() {
                if (index >= instructions.length) return;

                let axis, dist, backwards = false;

                switch (instructions[index]) {
                    case 'F':
                        axis = 'z'; dist = -2.4;
                        if (instructions[index + 1] === "'") backwards = true;
                        break;
                    case 'U':
                        axis = 'y'; dist = 2.4;
                        if (instructions[index + 1] !== "'") backwards = true;
                        break;
                    case 'L':
                        axis = 'x'; dist = 2.4;
                        if (instructions[index + 1] !== "'") backwards = true;
                        break;
                    case 'R':
                        axis = 'x'; dist = -2.4;
                        if (instructions[index + 1] === "'") backwards = true;
                        break;
                    case 'D':
                        axis = 'y'; dist = -2.4;
                        if (instructions[index + 1] === "'") backwards = true;
                        break;
                    case 'B':
                        axis = 'z'; dist = 2.4;
                        if (instructions[index + 1] !== "'") backwards = true;
                        break;
                    default:
                        index++;
                        executeNext();
                        return;
                }

                index++;
                if (instructions[index] === "'") index++;

                rotateFace(axis, dist, backwards, () => {
                    setTimeout(executeNext, 300);
                });
            }

            executeNext();
        }

        // Animáció
        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);


            controls.update();
        }

        function transferColorsTo3DTwoByTwoCube() {
            let stickers = [greenSideStickers, orangeSideStickers, whiteSideStickers, redSideStickers, yellowSideStickers, blueSideStickers];

            let greenSideChildren = document.getElementById('green-side');
            let orangeSideChildren = document.getElementById('orange-side');
            let whiteSideChildren = document.getElementById('white-side');
            let redSideChildren = document.getElementById('red-side');
            let yellowSideChildren = document.getElementById('yellow-side');
            let blueSideChildren = document.getElementById('blue-side');

            let htmlSides = [greenSideChildren, orangeSideChildren, whiteSideChildren, redSideChildren, yellowSideChildren, blueSideChildren];

            for (let i = 0; i < htmlSides.length; i++) {
                for (let j = 0; j < 4; j++) {
                    switch (htmlSides[i].children[j].style.backgroundColor) {
                        case 'rgb(134, 213, 134)':
                            stickers[i][j].material.color = green;
                            break;
                        case 'rgb(219, 88, 86)':
                            stickers[i][j].material.color = red;
                            break;
                        case 'rgb(255, 150, 65)':
                            stickers[i][j].material.color = orange;
                            break;
                        case 'rgb(50, 115, 255)':
                            stickers[i][j].material.color = blue;
                            break;
                        case 'rgb(255, 255, 255)':
                            stickers[i][j].material.color = white;
                            break;
                        case 'rgb(255, 255, 153)':
                            stickers[i][j].material.color = yellow;
                            break;
                    }
                }
            }
        }

        animate();
    });
}
