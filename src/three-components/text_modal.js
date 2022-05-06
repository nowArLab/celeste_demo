import * as THREE from 'three';
import {SVGLoader} from 'three/examples/jsm/loaders/SVGLoader';


export class TextModal{
    constructor(manager,scene){
        this.svg = null;
        this.manager = manager;
        this.scene = scene;
        this.file_path = './img/text_modal.svg';
        this.button_path = './img/comprar.svg';
        this.SVGLoader = new SVGLoader(this.manager);
        this.group = new THREE.Group();
        this.button = new THREE.Group();
        this.loadSVG();
    }

    loadSVG(){
        this.SVGLoader.load(this.file_path,(data)=>{
            const paths = data.paths;
            for(let i=0; i<paths.length; i++){
                const path = paths[i];
                
                const material = new THREE.MeshBasicMaterial({
                    color:path.color,
                    side: THREE.DoubleSide,
                    depthWrite:false
                });

                const shapes = SVGLoader.createShapes( path );

                for (let j=0; j<shapes.length; j++){
                    const shape = shapes[ j ];
                    const geometry = new THREE.ShapeGeometry( shape );
                    const mesh = new THREE.Mesh( geometry, material );
                    this.group.add( mesh );     
                }
            }
            this.group.name = 'modal'
        })

        this.SVGLoader.load(this.button_path,(data)=>{
            const paths = data.paths;
            for(let i=0; i<paths.length; i++){
                const path = paths[i];
                
                const material = new THREE.MeshBasicMaterial({
                    color:path.color,
                    side: THREE.DoubleSide,
                    depthWrite:false
                });

                const shapes = SVGLoader.createShapes( path );

                for (let j=0; j<shapes.length; j++){
                    const shape = shapes[ j ];
                    const geometry = new THREE.ShapeGeometry( shape );
                    const mesh = new THREE.Mesh( geometry, material );
                    this.button.add( mesh );     
                }
            }
        })
    }
    thisGroup(){
        return this.group
    }
    addToScene(){
        this.button.position.set(3.9,-1,-4.5);
        this.button.rotation.x = 0;
        this.button.rotation.y = THREE.Math.degToRad(-45);
        this.button.rotation.z = 0;
        this.button.scale.set(.01,-.01,.01);
        this.button.renderOrder = 12
        this.group.position.set(3,2.5,-4.5);
        this.group.rotation.x = 0;
        this.group.rotation.y = THREE.Math.degToRad(-45);
        this.group.rotation.z = 0;
        this.group.scale.set(.01,-.01,.01);
        this.group.renderOrder = 11;
        this.scene.add(this.group,this.button);
    }
}


