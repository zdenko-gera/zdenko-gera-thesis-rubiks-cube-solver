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

/* document.addEventListener('DOMContentLoaded', () => {
    // Alapvető Three.js beállítás
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    let controls;
    const cubeGroup = new THREE.Group();
    const whiteSide = new THREE.Group();
    const blueSide = new THREE.Group();
    const redSide = new THREE.Group();
    const greenSide = new THREE.Group();
    const orangeSide = new THREE.Group();
    const yellowSide = new THREE.Group();

    // Méret beállítása
    renderer.setSize(800, 600);
    renderer.domElement.style.width = '50rem';
    renderer.domElement.style.height = '27rem';
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    document.getElementById('cube-container').appendChild(renderer.domElement);
    camera.position.set(20, 20, 20);
    camera.lookAt(scene.position.x, scene.position.y, scene.position.z);

// *** kozepso kockak start ***

    let boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    let boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7, roughness: 1});
    let boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(5, 0, 0);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    cubeGroup.add(boxMesh);

    let stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    let stickerMaterial = new THREE.MeshPhongMaterial({
        color: 0x32a852,
        wireframe: false,
        metalness: 0.2,
        roughness: 1
    });
    let stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(7.5, 0, 0);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);

    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7, roughness: 1});
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(0, 5, 0);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    cubeGroup.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xffffff, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(0, 7.5, 0);
    stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);

    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7, roughness: 1});
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(0, 0, -5);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    cubeGroup.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xdb5856, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(0, 0, -7.5);
    stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);

    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7, roughness: 1});
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(0, 0, 5);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    cubeGroup.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xff9641, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(0, 0, 7.5);
    stickerMesh.rotation.y = 1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);

    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7, roughness: 1});
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(-5, 0, 0);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    cubeGroup.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0x3273ff, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(-7.5, 0, 0);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);

    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7, roughness: 1});
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(0, -5, 0);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    cubeGroup.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xffff99, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(0, -7.5, 0);
    stickerMesh.rotation.z = 1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);

    // *** kozepso kockak vege ***

    // feher zold elkocka
    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7, roughness: 1});
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(5, 5, 0);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    cubeGroup.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0x32a852, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(7.5, 5, 0);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xffffff, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(5, 7.5, 0);
    stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);
    // feher zold elkocka vege

    // feher narancs elkocka
    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7, roughness: 1});
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(0, 5, 5);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    cubeGroup.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xff9641, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(0, 5, 7.55);
    stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xffffff, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(0, 7.5, 5);
    stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);
    // feher narancs elkocka vege

    // feher kek elkocka
    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7, roughness: 1});
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(-5, 5, 0);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    cubeGroup.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0x3273ff, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(-7.5, 5, 0);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xffffff, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(-5, 7.5, 0);
    stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);
    // feher kek elkocka vege

    // feher piros elkocka
    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7, roughness: 1});
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(0, 5, -5);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    cubeGroup.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xdb5856, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(0, 5, -7.5);
    stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xffffff, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(0, 7.5, -5);
    stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);
    // feher piros elkocka vege

    // citrom zold elkocka
    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7, roughness: 1});
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(5, -5, 0);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    cubeGroup.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0x32a852, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(7.5, -5, 0);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xffff99, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(5, -7.5, 0);
    stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);
    // citrom zold elkocka vege

    // citrom narancs elkocka
    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7, roughness: 1});
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(0, -5, 5);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    cubeGroup.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xff9641, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(0, -5, 7.5);
    stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xffff99, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(0, -7.5, 5);
    stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);
    // citrom narancs elkocka vege

    // citrom kek elkocka
    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7, roughness: 1});
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(-5, -5, 0);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    cubeGroup.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0x3273ff, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(-7.5, -5, 0);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xffff99, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(-5, -7.5, 0);
    stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);
    // citrom kek elkocka vege

    // citrom piros elkocka
    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7, roughness: 1});
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(0, -5, -5);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    cubeGroup.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xdb5856, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(0, -5, -7.5);
    stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xffff99, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(0, -7.5, -5);
    stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);
    // citrom piros elkocka vege


    // *** SAROKKOCKAK ***
    // feher zold piros sarokkocka
    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7, roughness: 1});
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(5, 5, -5);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    cubeGroup.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0x32a852, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(7.5, 5, -5);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xffffff, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(5, 7.5, -5);
    stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xdb5856, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(5, 5, -7.5);
    stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);
    // feher zold piros sarokkocka vege

    // citrom zold narancs sarokkocka
    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7, roughness: 1});
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(5, -5, -5);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    cubeGroup.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0x32a852, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(7.5, -5, -5);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xffff99, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(5, -7.5, -5);
    stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xdb5856, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(5, -5, -7.5);
    stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);
    // citrom zold piros sarokkocka vege

    // feher zold narancs sarokkocka
    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7, roughness: 1});
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(5, 5, 5);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    cubeGroup.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0x32a852, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(7.5, 5, 5);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xffffff, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(5, 7.5, 5);
    stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xff9641, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(5, 5, 7.5);
    stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);
    // feher zold narancs sarokkocka vege

    // citrom zold narancs sarokkocka
    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7, roughness: 1});
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(5, -5, 5);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    cubeGroup.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0x32a852, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(7.5, -5, 5);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xffff99, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(5, -7.5, 5);
    stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xff9641, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(5, -5, 7.5);
    stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);
    // citrom zold narancs sarokkocka vege

    // feher kek narancs sarokkocka
    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7, roughness: 1});
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(-5, 5, 5);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    cubeGroup.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0x3273ff, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(-7.5, 5, 5);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xffffff, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(-5, 7.5, 5);
    stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xff9641, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(-5, 5, 7.5);
    stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);
    // feher kek narancs sarokkocka vege

    // citrom kek narancs sarokkocka
    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7, roughness: 1});
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(-5, -5, 5);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    cubeGroup.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0x3273ff, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(-7.5, -5, 5);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xffff99, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(-5, -7.5, 5);
    stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xff9641, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(-5, -5, 7.5);
    stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);
    // citrom kek narancs sarokkocka vege

    // feher kek piros sarokkocka
    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7, roughness: 1});
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(-5, 5, -5);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    cubeGroup.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0x3273ff, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(-7.5, 5, -5);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xffffff, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(-5, 7.5, -5);
    stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xdb5856, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(-5, 5, -7.5);
    stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);
    // feher kek piros sarokkocka vege

    // citrom kek piros sarokkocka
    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7, roughness: 1});
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(-5, -5, -5);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    cubeGroup.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0x3273ff, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(-7.5, -5, -5);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xffff99, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(-5, -7.5, -5);
    stickerMesh.rotation.z = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xdb5856, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(-5, -5, -7.5);
    stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);
    // citrom kek piros sarokkocka vege
    // *** SAROKKOCKAK VEGE ***

    // kek piros elkocka
    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7, roughness: 1});
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(-5, 0, -5);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    cubeGroup.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xdb5856, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(-5, 0, -7.5);
    stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0x3273ff, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(-7.5, 0, -5);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);
    // kek piros elkocka vege

    // kek narancs elkocka
    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7, roughness: 1});
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(-5, 0, 5);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    cubeGroup.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xff9641, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(-5, 0, 7.5);
    stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0x3273ff, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(-7.5, 0, 5);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);
    // kek narancs elkocka vege

    // zold narancs elkocka
    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7, roughness: 1});
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(5, 0, 5);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    cubeGroup.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xff9641, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(5, 0, 7.5);
    stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0x32a852, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(7.5, 0, 5);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);
    // zold narancs elkocka vege

    // zold piros elkocka
    boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    boxMaterial = new THREE.MeshPhongMaterial({color: 0x343434, wireframe: false, shininess: 0.7, roughness: 1});
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(5, 0, -5);
    boxMesh.receiveShadow = true;
    boxMesh.castShadow = true;
    cubeGroup.add(boxMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0xdb5856, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(5, 0, -7.5);
    stickerMesh.rotation.y = -1.0 * THREE.MathUtils.degToRad(90);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);

    stickerGeometry = new THREE.BoxGeometry(0.5, 4, 4);
    stickerMaterial = new THREE.MeshPhongMaterial({color: 0x32a852, wireframe: false, metalness: 0.2, roughness: 1});
    stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(7.5, 0, -5);
    stickerMesh.receiveShadow = true;
    stickerMesh.castShadow = true;
    cubeGroup.add(stickerMesh);
    scene.add(cubeGroup);
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

    // Animáció
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);

        controls.update();
    }

    animate();
}); */
