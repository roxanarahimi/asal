<template>

 <div class="bg-black">
   <the-menu />
  <div class="" style="min-height: 500px">
    <router-view/>
  </div>
   <the-footer />
 </div>
</template>

<style>


</style>

<script>

import theMenu from '@/components/TheMenu.vue'
import theFooter from "@/components/TheFooter";
import {useStore} from "vuex";

export default {
  components: {theFooter, theMenu},
  updated() {

    let user = localStorage.getItem('user')
    // if(!user){
    //   document.getElementById('login').classList.remove('d-none')
    //   document.getElementById('cart').classList.add('d-none')
    //   document.getElementById('profile').classList.add('d-none')
    //   document.getElementById('logout').classList.add('d-none')
    // }else{
    //   document.getElementById('login').classList.add('d-none')
    //   document.getElementById('cart').classList.remove('d-none')
    //   document.getElementById('profile').classList.remove('d-none')
    //   document.getElementById('logout').classList.remove('d-none')
    // }
  },
  setup(){

    const store = useStore();
    const url = store.state.panelUrl;

    return{
      store, url
    }
  }
}
</script>
<style>

/*body, html {*/
/*  font-family: IranSans !important;*/
/*}*/
/*.main_title {*/
/*  font-family: 'MjFlowBold' !important;*/
/*}*/
</style>