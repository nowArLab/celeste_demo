import * as THREE from 'three';
import { setSceneElements } from './core';
import {useMainStore} from '@/store/mainStore'


export const manager = new THREE.LoadingManager();

manager.onLoad = function(){
    const store = useMainStore();
    setSceneElements();
    store.isLoaded = true
    console.log('Everything loaded!');
};
manager.onProgress = function(url,itemsLoaded,itemsTotal){
    let percent = (itemsLoaded/itemsTotal)*100;
    document.querySelector('.loading_progress').style.width = percent + '%'
};
manager.onError = function(url){
    console.log('Error Ocurred!')
}