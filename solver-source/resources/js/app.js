import './bootstrap';
import 'bootstrap';

import Alpine from 'alpinejs';
import * as THREE from 'three';
// import { createApp } from 'vue';
import app from './components/app.vue';
import solver from './components/solver.vue';
import {TrackballControls} from "three/addons";

// createApp(app).mount('#app');
// createApp(solver).mount('#solver');

window.Alpine = Alpine;

Alpine.start();

document.addEventListener('DOMContentLoaded', () => {
    // Alapvető Three.js beállítás
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.lookAt(new THREE.Vector3(0,0,0));
    camera.position.set(0, 20, -25);
    const renderer = new THREE.WebGLRenderer();
    let controls;

    // Méret beállítása
    renderer.setSize(600, 600);
    renderer.domElement.style.width = '35rem';
    renderer.domElement.style.height = '22rem';
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    document.getElementById('cube-container').appendChild(renderer.domElement);
    //camera.position.set(20, 20, 20);
    //camera.lookAt(scene.position.x, scene.position.y, scene.position.z);

// *** kozepso kockak start ***

    let boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    let boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7});
    let boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(5, 0, 0);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    scene.add(boxMesh);

    let stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    let stickerMaterial = new THREE.MeshPhongMaterial({
        color: 0x32a852,
        wireframe: false });
    let stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(7.5, 0, 0);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);

    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7});
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(0, 5, 0);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    scene.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xffffff, wireframe: false});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(0, 7.5, 0);
    stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);

    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7 });
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(0, 0, -5);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    scene.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xdb5856, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(0, 0, -7.5);
    stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);

    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7 });
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(0, 0, 5);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    scene.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xff9641, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(0, 0, 7.5);
    stickerMesh.rotation.y = 1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);

    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7 });
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(-5, 0, 0);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    scene.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0x3273ff, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(-7.5, 0, 0);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);

    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7 });
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(0, -5, 0);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    scene.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xffff99, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(0, -7.5, 0);
    stickerMesh.rotation.z = 1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);

    // *** kozepso kockak vege ***

    // feher zold elkocka
    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7 });
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(5, 5, 0);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    scene.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0x32a852, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(7.5, 5, 0);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xffffff, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(5, 7.5, 0);
    stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);
    // feher zold elkocka vege

    // feher narancs elkocka
    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7 });
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(0, 5, 5);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    scene.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xff9641, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(0, 5, 7.55);
    stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xffffff, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(0, 7.5, 5);
    stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);
    // feher narancs elkocka vege

    // feher kek elkocka
    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7 });
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(-5, 5, 0);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    scene.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0x3273ff, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(-7.5, 5, 0);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xffffff, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(-5, 7.5, 0);
    stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);
    // feher kek elkocka vege

    // feher piros elkocka
    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7 });
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(0, 5, -5);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    scene.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xdb5856, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(0, 5, -7.5);
    stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xffffff, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(0, 7.5, -5);
    stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);
    // feher piros elkocka vege

    // citrom zold elkocka
    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7 });
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(5, -5, 0);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    scene.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0x32a852, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(7.5, -5, 0);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xffff99, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(5, -7.5, 0);
    stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);
    // citrom zold elkocka vege

    // citrom narancs elkocka
    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7 });
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(0, -5, 5);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    scene.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xff9641, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(0, -5, 7.5);
    stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xffff99, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(0, -7.5, 5);
    stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);
    // citrom narancs elkocka vege

    // citrom kek elkocka
    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7 });
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(-5, -5, 0);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    scene.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0x3273ff, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(-7.5, -5, 0);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xffff99, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(-5, -7.5, 0);
    stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);
    // citrom kek elkocka vege

    // citrom piros elkocka
    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7 });
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(0, -5, -5);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    scene.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xdb5856, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(0, -5, -7.5);
    stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xffff99, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(0, -7.5, -5);
    stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);
    // citrom piros elkocka vege


    // *** SAROKKOCKAK ***
    // feher zold piros sarokkocka
    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7 });
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(5, 5, -5);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    scene.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0x32a852, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(7.5, 5, -5);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xffffff, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(5, 7.5, -5);
    stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xdb5856, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(5, 5, -7.5);
    stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);
    // feher zold piros sarokkocka vege

    // citrom zold narancs sarokkocka
    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7 });
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(5, -5, -5);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    scene.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0x32a852, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(7.5, -5, -5);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xffff99, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(5, -7.5, -5);
    stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xdb5856, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(5, -5, -7.5);
    stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);
    // citrom zold piros sarokkocka vege

    // feher zold narancs sarokkocka
    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7 });
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(5, 5, 5);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    scene.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0x32a852, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(7.5, 5, 5);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xffffff, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(5, 7.5, 5);
    stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xff9641, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(5, 5, 7.5);
    stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);
    // feher zold narancs sarokkocka vege

    // citrom zold narancs sarokkocka
    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7 });
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(5, -5, 5);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    scene.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0x32a852, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(7.5, -5, 5);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xffff99, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(5, -7.5, 5);
    stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xff9641, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(5, -5, 7.5);
    stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);
    // citrom zold narancs sarokkocka vege

    // feher kek narancs sarokkocka
    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7 });
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(-5, 5, 5);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    scene.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0x3273ff, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(-7.5, 5, 5);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xffffff, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(-5, 7.5, 5);
    stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xff9641, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(-5, 5, 7.5);
    stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);
    // feher kek narancs sarokkocka vege

    // citrom kek narancs sarokkocka
    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7 });
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(-5, -5, 5);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    scene.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0x3273ff, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(-7.5, -5, 5);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xffff99, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(-5, -7.5, 5);
    stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xff9641, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(-5, -5, 7.5);
    stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);
    // citrom kek narancs sarokkocka vege

    // feher kek piros sarokkocka
    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7 });
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(-5, 5, -5);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    scene.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0x3273ff, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(-7.5, 5, -5);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xffffff, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(-5, 7.5, -5);
    stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xdb5856, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(-5, 5, -7.5);
    stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);
    // feher kek piros sarokkocka vege

    // citrom kek piros sarokkocka
    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7 });
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(-5, -5, -5);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    scene.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0x3273ff, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(-7.5, -5, -5);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xffff99, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(-5, -7.5, -5);
    stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xdb5856, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(-5, -5, -7.5);
    stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);
    // citrom kek piros sarokkocka vege
    // *** SAROKKOCKAK VEGE ***

    // kek piros elkocka
    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7 });
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(-5, 0, -5);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    scene.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xdb5856, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(-5, 0, -7.5);
    stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0x3273ff, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(-7.5, 0, -5);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);
    // kek piros elkocka vege

    // kek narancs elkocka
    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7 });
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(-5, 0, 5);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    scene.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xff9641, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(-5, 0, 7.5);
    stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0x3273ff, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(-7.5, 0, 5);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);
    // kek narancs elkocka vege

    // zold narancs elkocka
    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7 });
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(5, 0, 5);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    scene.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xff9641, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(5, 0, 7.5);
    stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0x32a852, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(7.5, 0, 5);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);
    // zold narancs elkocka vege

    // zold piros elkocka
    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7 });
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(5, 0, -5);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    scene.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xdb5856, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(5, 0, -7.5);
    stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0x32a852, wireframe: false });
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(7.5, 0, -5);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    scene.add(stickerMesh);
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


    let step = 0;

    let sum = 0;
    let selectedObjects = [];
    let rotating = false;

    function rotateFace(axis, dist, backwards = false) {
        if (rotating) return;
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
        console.log(sum);
        for (let i = 0; i < selectedObjects.length; i++) {
            sideToRotate.add(selectedObjects[i]);
        }

        scene.add(sideToRotate);
        let step = 0;
        function animateRotation() {
            if (step < 20) {
                if (backwards === false) {
                    sideToRotate.rotation[axis] += (Math.PI / 2) / 20;
                } else {
                    sideToRotate.rotation[axis] -= (Math.PI / 2) / 20;
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
                console.log('Children: ' + sideToRotate.children);
                //sideToRotate = null;
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
        rotateFace( 'z',4.9 );
    });

    left.addEventListener("click", () => {
        rotateFace('x', 4.9, true);
    });

    leftBackwards.addEventListener("click", () => {
        rotateFace( 'x',4.9 );
    });

    right.addEventListener("click", () => {
        rotateFace('x', -4.9);
    });

    rightBackwards.addEventListener("click", () => {
        rotateFace( 'x', -4.9, true);
    });

    up.addEventListener("click", () => {
        rotateFace('y', 4.9, true);
    });

    upBackwards.addEventListener("click", () => {
        rotateFace( 'y', 4.9);
    });

    bottom.addEventListener("click", () => {
        rotateFace('y', -4.9);
    });

    bottomBackwards.addEventListener("click", () => {
        rotateFace( 'y', -4.9, true);
    });

    resetCamera.addEventListener("click", () => {
        camera.position.set(0, 20, -25);
        camera.quaternion.set(0, 0, 0, 1);
        camera.lookAt(0,0,0);
        controls.reset();
    });


    // Animáció
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);



        controls.update();
    }

    animate();
});
