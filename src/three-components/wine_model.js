import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';


export class WineModel{
    constructor(manager,scene) {
        this.path = './3d_assets/celeste.glb',
        this.manager = manager,
        this.mixer = null;
        this.animation = null;
        this.scene = scene,
        this.rotation = {
            x: 0,
            y: 120,
            z: 0
        },
        this.scale = {
            x:2,
            y:2,
            z:2
        },
        this.position = {
            x:10,
            y:-.8,
            z:-3
        }
        this.model = null;
        this.load();
    };
    load(){
        new GLTFLoader(this.manager).load(this.path,(gltf)=>{
            this.model = gltf.scene;
            this.mixer = new THREE.AnimationMixer(gltf.scene);
            this.animation = this.mixer.clipAction(gltf.animations[0]);
            console.log(this.animation)
            console.log(gltf, ' modelo vino');
            this.updateTransform();
            this.play();
        })
    };
    updateTransform(){
        this.model.rotation.set(THREE.Math.degToRad(this.rotation.x),THREE.Math.degToRad(this.rotation.y),THREE.Math.degToRad(this.rotation.z));
        this.model.position.set(this.position.x,this.position.y,this.position.z);
        this.model.scale.set(this.scale.x,this.scale.y,this.scale.z);
        this.model.name='vino'
    };
    addToScene(){
        this.scene.add(this.model)
    }
    play(){
        this.animation.play();
    }
    updateMixer(param){
        this.mixer.update(param)
    }
}