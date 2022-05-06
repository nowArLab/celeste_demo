import * as THREE from 'three';
import {SVGLoader} from 'three/examples/jsm/loaders/SVGLoader';

export class SocialsComponent{
    constructor(manager,scene){
        this.manager = manager;
        this.scene = scene;
        this.SVGLoader = new SVGLoader(this.manager);
        this.facebook_path = './img/social/facebook.svg';
        this.instagram_path = './img/social/instagram.svg';
        this.twitter_path = './img/social/twitter.svg';
        this.pinterest_path = './img/social/pinterest.svg';
        this.youtube_path = './img/social/youtube.svg';
        this.facebook = new THREE.Group();
        this.instagram = new THREE.Group();
        this.twitter = new THREE.Group();
        this.pinterest = new THREE.Group();
        this.youtube = new THREE.Group();
        this.button_group = new THREE.Group();
        this.loadSVG();
    }
    addToScene(){
        this.button_group.position.set(7,-3,0);
        this.button_group.scale.set(2,2,2)
        this.button_group.rotation.y = THREE.MathUtils.degToRad(-60)
        this.scene.add(this.button_group);
    }
    loadSVG(){
        this.SVGLoader.load(this.facebook_path,(data)=>{
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
                    this.facebook.add( mesh );     
                }
            }
            this.facebook.name = 'facebook';
            this.facebook.position.set(-.95,0,-5);
            this.facebook.scale.set(.019,-.019,.019);
            this.button_group.add(this.facebook);
        })

        this.SVGLoader.load(this.instagram_path,(data)=>{
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
                    this.instagram.add( mesh );     
                }
            }
            this.instagram.name = 'instagram';
            this.instagram.position.set(-.5,0,-5);
            this.instagram.scale.set(.019,-.019,.019);
            this.button_group.add(this.instagram);
        })

        this.SVGLoader.load(this.pinterest_path,(data)=>{
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
                    this.pinterest.add( mesh );     
                }
            }
            this.pinterest.name = 'pinterest';
            this.pinterest.position.set(.1,0,-5);
            this.pinterest.scale.set(.019,-.019,.019);
            this.button_group.add(this.pinterest)

        })


        this.SVGLoader.load(this.twitter_path,(data)=>{
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
                    this.twitter.add( mesh );     
                }
            }
            this.twitter.name = 'twitter';
            this.twitter.position.set(.6,0,-5);
            this.twitter.scale.set(.019,-.019,.019);
            this.button_group.add(this.twitter);
        })
        

        this.SVGLoader.load(this.youtube_path,(data)=>{
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
                    this.youtube.add( mesh );     
                }
            }
            this.youtube.name = 'youtube';
            this.youtube.position.set(1.25,0,-5);
            this.youtube.scale.set(.023,-.023,.023);
            this.button_group.add(this.youtube)
        })

    }
}