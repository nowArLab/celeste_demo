import * as THREE from 'three';
import {SVGLoader} from 'three/examples/jsm/loaders/SVGLoader';


const videoElement = document.querySelector('video');



export class VideoComponent{
    constructor(manager,scene){
        this.videoElement = videoElement;
        this.videoElement.src = './video/celeste.mp4';
        this.videoElement.load();
        this.planeGeometry = new THREE.PlaneGeometry(8,4);
        this.videoTexture = new THREE.VideoTexture(videoElement);
        this.videoTexture.needsUpdate = true;
        this.videoMaterial = new THREE.MeshBasicMaterial({map: this.videoTexture, side: THREE.FrontSide, toneMapped: false})
        this.videoMaterial.needsUpdate = true;
        this.videoComponent = new THREE.Mesh(this.planeGeometry, this.videoMaterial);
        this.play_button_path = './img/play_button.svg';
        this.pause_button_path = './img/pause_button.svg';
        this.SVGLoader = new SVGLoader(this.manager);
        this.play_button = new THREE.Group();
        this.pause_button = new THREE.Group();
        this.scene = scene;
        this.loadSVG();
    }
    addToScene(){
        this.videoComponent.name = 'video';
        this.videoComponent.position.set(-8,2,-5);
        this.videoComponent.rotation.y = THREE.Math.degToRad(60)
        this.scene.add(this.videoComponent);
        this.play_button.position.set(-7,2,-4);
        this.play_button.scale.set(.01,-.01,.01);
        this.play_button.rotation.y = THREE.Math.degToRad(60);
        this.pause_button.position.set(-7,2,-4);
        this.pause_button.scale.set(.008,-.008,.008);
        this.pause_button.rotation.y = THREE.Math.degToRad(60)
        this.scene.add(this.play_button,this.pause_button); 
        this.pause_button.visible = false;
    }
    loadSVG(){
        this.SVGLoader.load(this.play_button_path,(data)=>{
            const paths = data.paths;
            for(let i=0; i<paths.length; i++){
                const path = paths[i];
                
                const material = new THREE.MeshBasicMaterial({
                    color:path.color,
                    side: THREE.DoubleSide,
                    depthWrite: false
                });

                const shapes = SVGLoader.createShapes( path );

                for (let j=0; j<shapes.length; j++){
                    const shape = shapes[ j ];
                    const geometry = new THREE.ShapeGeometry( shape );
                    const mesh = new THREE.Mesh( geometry, material );
                    this.play_button.add( mesh );     
                }
            }
        });

        this.SVGLoader.load(this.pause_button_path,(data)=>{
            const paths = data.paths;
            for(let i=0; i<paths.length; i++){
                const path = paths[i];
                
                const material = new THREE.MeshBasicMaterial({
                    color:path.color,
                    side: THREE.DoubleSide,
                    depthWrite: false
                });

                const shapes = SVGLoader.createShapes( path );

                for (let j=0; j<shapes.length; j++){
                    const shape = shapes[ j ];
                    const geometry = new THREE.ShapeGeometry( shape );
                    const mesh = new THREE.Mesh( geometry, material );
                    this.pause_button.add( mesh );     
                }
            }
        });
        
    }
}