import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const textureLoader = new THREE.TextureLoader();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')
});

scene.background = 0x111111

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(50)

const pointLight = new THREE.PointLight(0xFFFFFF)
pointLight.intensity = 2000;
pointLight.position.set(-10, 1.5, 50)

const ambientLight = new THREE.AmbientLight(0xFFFFFF);
ambientLight.intensity = 1.7;
const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(200, 50)
const controls = new OrbitControls(camera, renderer.domElement);

scene.add(pointLight)

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);
  const x = THREE.MathUtils.randFloatSpread(150);

  const y = THREE.MathUtils.randFloat(-1000, 50);
  const z = THREE.MathUtils.randFloatSpread(0, 50);
  star.position.set(x, y, z);
  scene.add(star);
}
Array(100).fill().forEach(addStar);


const terraskin = textureLoader.load('../src/terra2.png');
const terrabumpMap = textureLoader.load('../src/map.tif');
const terrageometry = new THREE.SphereGeometry(15, 32, 32);
const terramaterial = new THREE.MeshStandardMaterial({
  map: terraskin,
  bumpMap: terrabumpMap,
  bumpScale: 0.5,
});

const luatexture = textureLoader.load('../src/lua.jpg');
const luabumpMap = textureLoader.load('../src/map.tif');
const luageometry = new THREE.SphereGeometry(4, 32, 32);
const luamaterial = new THREE.MeshStandardMaterial({
  map: luatexture,
  bumpMap: luabumpMap,
  bumpScale: 0.5,
});

const martetexture = textureLoader.load('../src/marte.jpg');
const martebumpMap = textureLoader.load('../src/map.tif');
const martegeometry = new THREE.SphereGeometry(15, 32, 32);
const martematerial = new THREE.MeshStandardMaterial({
  map: martetexture,
  bumpMap: martebumpMap,
  bumpScale: 0.5,
});

const lua = new THREE.Mesh(luageometry, luamaterial);
const terra = new THREE.Mesh(terrageometry, terramaterial);
const marte = new THREE.Mesh(martegeometry, martematerial);

terra.rotation.y = 50;
terra.rotation.z = 25;

terra.position.y = -10;
lua.position.x = -50;
lua.position.y = 10;

marte.position.y = -100;

scene.add(terra);
scene.add(lua);
scene.add(marte);

let lastScrollTop = 0;

function moveCamera() {
  const scrollTop = window.scrollY;
  const scrollDelta = scrollTop - lastScrollTop;

  if (scrollDelta > 0) {
    terra.position.y += scrollDelta * 0.1;
    lua.position.y += scrollDelta * 0.1;
    marte.position.y += scrollDelta * 0.1;
  }
  else if (scrollDelta < 0) {
    terra.position.y += scrollDelta * 0.1;
    lua.position.y += scrollDelta * 0.1;
    marte.position.y += scrollDelta * 0.1;
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}


document.body.onscroll = moveCamera;

function Sobremim() {
  window.scrollTo(500, 0);
}

function animate() {
  requestAnimationFrame(animate);
  terra.rotation.x += 0;
  terra.rotation.y += -0.005;
  terra.rotation.z += 0.0001;

  lua.rotation.x += 0;
  lua.rotation.y += 0.0005;
  lua.rotation.z += 0.0001;

  marte.rotation.x += 0;
  marte.rotation.y += 0.0007;
  marte.rotation.z += 0.0001;

  controls.update();
  renderer.render(scene, camera);
}

animate()

window.Sobremim = Sobremim

var app = angular.module('App', []);

app.controller('projetoController', function($scope){
    $scope.projetos = [
        { nome: "Projeto 1", descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, veniam perferendis, nulla fugit neque soluta saepe enim dolores placeat quisquam cum ut adipisci reprehenderit eius? Blanditiis qui non cupiditate vero!", projLink: "Link"},
        { nome: "Projeto 2", descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, veniam perferendis, nulla fugit neque soluta saepe enim dolores placeat quisquam cum ut adipisci reprehenderit eius? Blanditiis qui non cupiditate vero!", projLink: "Link"},
        { nome: "Projeto 3", descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, veniam perferendis, nulla fugit neque soluta saepe enim dolores placeat quisquam cum ut adipisci reprehenderit eius? Blanditiis qui non cupiditate vero!", projLink: "Link"},
        { nome: "Projeto 4", descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, veniam perferendis, nulla fugit neque soluta saepe enim dolores placeat quisquam cum ut adipisci reprehenderit eius? Blanditiis qui non cupiditate vero!", projLink: "Link"},
        { nome: "Projeto 5", descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, veniam perferendis, nulla fugit neque soluta saepe enim dolores placeat quisquam cum ut adipisci reprehenderit eius? Blanditiis qui non cupiditate vero!", projLink: "Link"}
    ];
})
