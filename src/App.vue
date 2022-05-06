<template>
<MainScreen/>
<button class="orbit" @click="orbitEnabled()" :style="{backgroundImage: 'url('+ img +')'}"></button>
<canvas id="main_canvas"></canvas>
</template>

<script>
import {init,enableOrbit,disableOrbit} from '@/core/core';
import MainScreen from '@/components/MainScreen.vue';

export default {
  name: 'App',
  components: {
    MainScreen
  },
  methods:{
    start: function(){
      document.querySelector('.start').style.display='none'
      init();
    },
    orbitEnabled: function(){
      if(this.enabled===false){
        console.log('enabling');
        this.enabled = true;
        document.querySelector('.orbit').style.backgroundColor = 'rgba(123,212,106,.4)';
        enableOrbit();
      }else{
        console.log('disabling')
        this.enabled = false;
        disableOrbit();
        document.querySelector('.orbit').style.backgroundColor = 'transparent';
      }
    }
  },
  data:()=>{
    return{
      enabled: false,
      img: './img/touch.png'
    }
  },
  created(){

  },
  mounted(){
     
  }
}
</script>

<style>
.start{
  width: 120px;
  height: 60px;
  z-index: 1;
  position: absolute;
  left:50%;
  top:50%;
  transform: translate(-50%,-50%)
}
.orbit{
  display: none;
  position: absolute;
  z-index: 2;
  width: 64px;
  height: 64px;
  right:0;
  transform: scale(.8);
  background-color: transparent;
  border:none;
  border-radius: 4px;
}
</style>
