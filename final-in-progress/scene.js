import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.119.1/build/three.module.js'
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.119.1/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.119.1/examples/jsm/controls/OrbitControls.js'
import { RGBELoader } from 'https://cdn.jsdelivr.net/npm/three@0.119.1/examples/jsm/loaders/RGBELoader.js'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)

camera.position.z = 50;

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)


const controls = new OrbitControls(camera, renderer.domElement)
controls.minDistance = 20;
controls.maxDistance = 20;

const canvas = document.querySelector('#canvas')
canvas.appendChild(renderer.domElement)

const loader = new GLTFLoader()
const hi = await loader.loadAsync('./assets/clover-small.glb')
scene.add(hi.scene)

const ambientLight = new THREE.AmbientLight(
    '#ffffff',
    0.5
)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffFF, 0.6);
directionalLight.position.set(-2, 2, 5)
scene.add(directionalLight);

const reflectingLight = new THREE.DirectionalLight(0x5D3FD3, 0.5);
reflectingLight.position.set(2, -2, 7)
scene.add(reflectingLight);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera)
}

animate()

window.addEventListener('resize', onWindowResize)

function onWindowResize() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    controls.update();
}