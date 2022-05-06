import * as THREE from 'three';
import {DeviceOrientationControls} from 'three/examples/jsm/controls/DeviceOrientationControls';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {TrackballControls} from 'three/examples/jsm/controls/TrackballControls';
import {mapScene,darken} from '@/three-components/cubemap';
import {ExperienceStart} from '@/three-components/experience_start';
import { WineModel } from '@/three-components/wine_model';
import { TextModal } from '@/three-components/text_modal';
import { VideoComponent } from '@/three-components/video_component';
import { SocialsComponent } from '@/three-components/socials_component';
import {manager} from '@/core/load_manager'; 
import {Interaction} from '@/utils/three.interaction';
import {startAnimation} from '@/three-components/cubemap';




let camera, scene, controls,orbitControls, controller,light,pointlight, renderer, interaction;

let isOrbit = false;

camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,1100);
scene = new THREE.Scene();
light = new THREE.AmbientLight(0x404040);
pointlight = new THREE.PointLight( '#fff', 1, 100 );
pointlight.position.set( 0, .15, 0 );


light.intensity = 3;
scene.add(light)

const experienceStart = new ExperienceStart(manager,scene);
const wineModel = new WineModel(manager,scene);
const textModal = new TextModal(manager,scene);
const videoComponent = new VideoComponent(manager,scene);
const socialsComponent = new SocialsComponent(manager, scene);
const clock = new THREE.Clock();

export function setSceneElements(){
    mapScene(scene); 
    experienceStart.addToScene();
    wineModel.addToScene();
    textModal.addToScene();
    videoComponent.addToScene();
    socialsComponent.addToScene();
    pointlight.lookAt(experienceStart.model);
    scene.add( pointlight ); 
    experienceStart.animate();
    //darken();  
    console.log(scene)
}

export function startExperience(){
    setTimeout(()=>{
        console.log(scene, ' this is the scene logged after 1.5 secs');
        console.log(scene.getObjectByName('day'), ' this is day skybox logged after 1.5 secs');
        console.log(scene.getObjectByName('night'), 'this is night logged after 1.5 secs');
        startAnimation(scene);
    },1500);
    setTimeout(()=>{
        console.log(scene, ' applied');
    },3500);
}

export function init(){
    document.querySelector('.orbit').style.display = 'block';
    controls = new DeviceOrientationControls(camera);
    const canvasReference = document.getElementById('main_canvas');
    renderer = new THREE.WebGLRenderer({canvas:canvasReference,antialias:true,alpha:true});
    renderer.sortObjects = true;
    renderer.setSize(window.innerWidth,window.innerHeight);
    orbitControls = new OrbitControls(camera, renderer.domElement);
    orbitControls.minPolarAngle = Math.PI/2;
    orbitControls.maxPolarAngle = Math.PI/2;
    interaction = new THREE.Interaction(renderer,scene,camera);
    camera.position.set(0,.1,0);
    orbitControls.enableZoom = false;
    orbitControls.enablePan = false;
    orbitControls.enabled = false;
    renderLoop();
}

export function enableOrbit(){
    orbitControls.enabled = true;
    controls.enabled = false;
}

export function disableOrbit(){
    orbitControls.enabled = false;
    controls.enabled = true;
}

videoComponent.videoComponent.on('click', ()=>{
    if(videoComponent.videoElement.paused){
        videoComponent.videoElement.play();
        videoComponent.play_button.visible = false;
    }else{
        videoComponent.videoElement.pause();
        videoComponent.play_button.visible = true;
    }
});

socialsComponent.facebook.on('click', ()=>{
    window.open("https://www.facebook.com/familiatorresoficial/", "_blank");
})
socialsComponent.instagram.on('click', ()=>{
    window.open("https://www.instagram.com/familiatorres1870/", "_blank");
})
socialsComponent.twitter.on('click', ()=>{
    window.open("https://twitter.com/familiatorres", "_blank");
})
socialsComponent.pinterest.on('click', ()=>{
    window.open("http://www.pinterest.es/familiatorresoficial", "_blank");
})
socialsComponent.youtube.on('click', ()=>{
    window.open("https://www.youtube.com/c/FamiliaTorres", "_blank");
})
textModal.button.on('click', ()=>{
    window.open("https://www.torres.es/es/vinos/celeste-crianza","_blank")
})



function renderLoop(){
    window.requestAnimationFrame(renderLoop);
    wineModel.updateMixer(clock.getDelta());
    orbitControls.update();
    controls.update();
    renderer.render(scene,camera);
}
