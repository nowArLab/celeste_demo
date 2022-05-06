import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import gsap from 'gsap';


export class ExperienceStart{
    constructor(manager,scene){
        this.svg = null;
        this.manager = manager;
        this.scene = scene;
        this.file_path = './3d_assets/titulo.glb';
        this.gltfLoader = new GLTFLoader(this.manager);
        this.model=null;
        this.loadModel();
    }

    loadModel(){
        this.gltfLoader.load(this.file_path,(gltf)=>{
        this.model = gltf.scene;
        this.model.name = 'titulo';
        this.updateTransform()
        })
    }
    updateTransform(){
        this.model.position.set(0,.2,-2);
        this.model.scale.set(6,6,6);
    }
    thisGroup(){
        return this.model;
    }
    addToScene(){
        this.scene.add(this.model);
    }
    animate(){
        const tl = gsap.timeline({repeat:-1});
        const tl2 = gsap.timeline({repeat:-1})
        tl.to(this.model.position,{y:.10,duration:4,ease:'inOut'});
        tl2.to(this.model.rotation,{y:.25,duration:4,ease:'inOut'});
        tl2.to(this.model.rotation,{y:-.25,duration:4,ease:'inOut'});
        tl.to(this.model.position,{y:.2,duration:4,ease:'inOut'});
        tl2.to(this.model.rotation,{y:0,duration:4,ease:'inOut'});
    }

}


