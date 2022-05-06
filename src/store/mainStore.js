import {defineStore} from 'pinia';

export const useMainStore = defineStore('mainStore', {
    state:()=>{
        return{
            isLoaded: false,
            loadingProgress: 0,
            isStarted: false,
            isExperienceStarted: false
        }
    },
    actions:{
        setLoaded(getLoaded = Boolean){
            this.isLoaded = getLoaded;
        },
        setExperienceStarted(getStarted = Boolean){
            this.isExperienceStarted = getStarted;
        }
    },
    getters:{
        showLoaded: (state) => state.isLoaded
    }
})