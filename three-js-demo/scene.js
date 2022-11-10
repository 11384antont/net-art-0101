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

camera.position.z = 2;

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)


const controls = new OrbitControls(camera, renderer.domElement)

const canvas = document.querySelector('#canvas')
canvas.appendChild(renderer.domElement)

const loader = new GLTFLoader()
const hi = await loader.loadAsync('./assets/demo.glb')
scene.add(hi.scene)

const ambientLight = new THREE.AmbientLight(
    '#FFFFFF',
    5
)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
directionalLight.position.set(-1, 0, 2)
scene.add(directionalLight);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera)
}

animate()
//not black,,,whyyyy > had to change the numbers in import to 119.1

window.addEventListener('resize', onWindowResize)

function onWindowResize() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    controls.update();
}