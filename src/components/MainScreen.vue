<template>
  <div class="main" v-show="store.isStarted===false">
    <img src="img/logo.svg" alt="" class="logo">
    <div class="loading_bar">
      <div class="loading_progress"></div>
    </div>
    <button class="start">
      <span v-show="store.isLoaded" @click="start()">Pulsa para comenzar</span>
      <span v-show="!store.isLoaded">Cargando</span>
    </button>
  </div>
</template>

<script>
import {useMainStore} from '@/store/mainStore';
import {init, startExperience} from '@/core/core';

let store

export default {
  name: 'MainScreen',
  setup(){
    store = useMainStore()
  },
  data:()=>{
    return{
      store : store
    }
  },
  methods:{
    start: function(){
      this.store.isStarted = true
      init();
      startExperience();
    }
  },
}
</script>


<style scoped>
.main{
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('https://c.pxhere.com/photos/f4/b4/cantarrijan_sky_night_milky_way_star_universe_firmament_long_exposition-798318.jpg!s2');
  background-repeat: no-repeat;
  background-size: cover;
}
.logo{
  position: absolute;
  top:30%;
  left:50%;
  transform: translate(-50%,-30%);
}
.loading_bar{
  width: 100%;
  height:24px;
  background-color: rgba(255,255,255,.1);
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-30%);
}
.loading_progress{
  background-color: rgba(0,0,0,.8);
  height: 100%;
}
.start{
  border-radius: 8px;
  width:100%;
  height: 24px;
  border: none;
  color: #fff;
  font-weight: bold;
  background-color: transparent;
  top:50%;
  left:50%;
  transform: translate(-50%,-30%);
}
</style>
