import * as THREE from 'three';
import {manager} from '@/core/load_manager'; 
import { gsap } from 'gsap';



export const sphereGeoDay = new THREE.SphereGeometry(500,64,32);
export const sphereGeoNight = new THREE.SphereGeometry(500,64,32);
const textureLoader = new THREE.TextureLoader(manager);
const textureDay = textureLoader.load("./cubemap/day/dia-high.jpg");
textureDay.minFilter = THREE.LinearFilter;
const textureNight = textureLoader.load("./cubemap/night/night-high.jpg");
textureNight.minFilter = THREE.LinearFilter;

const materialDay = new THREE.MeshStandardMaterial({
	map: textureDay,
	side: THREE.BackSide,
	transparent:true,
	opacity:1,
	depthWrite:false,
});

const materialNight = new THREE.MeshStandardMaterial({
	map: textureNight,
	side:THREE.BackSide,
	transparent: true,
	opacity:0,
	depthWrite:false,
})

const skyDay = new THREE.Mesh(sphereGeoDay, materialDay);
skyDay.name = 'day';
skyDay.scale.set(1, 1, 1);
skyDay.position.set(0,0,0);
skyDay.rotation.y = THREE.Math.degToRad(90)
const skyNight = new THREE.Mesh(sphereGeoNight, materialNight);
skyNight.name = 'night';
skyNight.position.set(0,0,0);
skyNight.scale.set(1, 1, 1);
skyNight.rotation.y = THREE.Math.degToRad(90);

export function mapScene(sc){
	sc.add(skyDay,skyNight);
}

export function startAnimation(sc){
	const tl = gsap.timeline();
	tl.to(skyNight.material,{opacity:1,duration:5})
}



/*const night_path = './cubemap/night/';
				const night_format = '.png';
				const night_urls = [
					night_path + 'px' + night_format, night_path + 'nx' + night_format,
					night_path + 'py' + night_format, night_path + 'ny' + night_format,
					night_path + 'pz' + night_format, night_path + 'nz' + night_format
				];

const day_path = './cubemap/day/';
				const day_format = '.png';
				const day_urls = [
					day_path + 'px' + day_format, day_path + 'nx' + day_format,
					day_path + 'py' + day_format, day_path + 'ny' + day_format,
					day_path + 'pz' + day_format, day_path + 'nz' + day_format
				];



export const reflectionCube_night = new THREE.CubeTextureLoader(manager).load( night_urls );
export const refractionCube_night = new THREE.CubeTextureLoader(manager).load( night_urls );

export const reflectionCube_day = new THREE.CubeTextureLoader(manager).load( day_urls );
export const refractionCube_day = new THREE.CubeTextureLoader(manager).load( day_urls );

//reflectionCube_day.flipY = true
//reflectionCube_night.flipY = true
//refractionCube_night.mapping = THREE.CubeRefractionMapping;
//refractionCube_day.mapping = THREE.CubeRefractionMapping;


var geometryDay = new THREE.SphereGeometry (100, 30, 30);
var geometryNight = new THREE.SphereGeometry (100, 30, 30);
var materialDay = new THREE.MeshBasicMaterial({
    envMap: reflectionCube_day,
	side:THREE.DoubleSide,
	transparent:true,
  });
var materialNight = new THREE.MeshBasicMaterial({
    envMap: reflectionCube_night,
	side:THREE.DoubleSide
});
const meshDay = new THREE.Mesh(geometryDay, materialDay);
const meshNight = new THREE.Mesh(geometryNight, materialNight);

export function darken(){
	const tl = gsap.timeline();
	tl.to(meshDay.material,{opacity:0,duration:10})
}

export function mapScene(sc){
	//sc.background = reflectionCube_night;
	sc.environment = reflectionCube_day;
	sc.add(meshDay,meshNight);
	meshDay.name = 'entorno_dia';
	meshNight.name = 'entorno_noche';
	//meshNight.visible  = false;
}*/