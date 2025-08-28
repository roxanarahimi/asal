<template>

  <div class="d-block overflow-x-hidden">
    <loader v-if="isLoading"/>
    <floating-btns/>
    <the-menu/>
    <div class="bg-black w-100" style="min-height: 500px; padding-top:74px;">
      <router-view/>
    </div>
    <the-footer/>
  </div>
</template>
<script>

import FloatingBtns from '@/components/FloatingBtns.vue'
import theMenu from '@/components/TheMenu.vue'
import theFooter from "@/components/Footer";
import {useStore} from "vuex";
import Loader from "@/components/Loader";
import {useRoute} from "vue-router/dist/vue-router";


export default {
  components: {theFooter, theMenu, FloatingBtns, Loader},
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    this.isLoading = true;
    document.getElementById('body').classList.add('stop-scrolling');

    document.querySelector('.loader-wrapper')?.classList.add('opacity-1')
    document.onreadystatechange = () => {
      if (document.readyState === 'complete') {
        setTimeout(() => {
          document.querySelector('.loader-wrapper')?.classList.add('opacity-0')
          document.getElementById('body').classList.remove('stop-scrolling');
          this.isLoading = false;
        }, 3000)
      }
    };
  },
  unmounted() {
    document.querySelector('.loader-wrapper')?.classList.add('opacity-0')
  },
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
  setup() {
    const route = useRoute();

    const store = useStore();
    const url = store.state.panelUrl;

    return {
      store, url, route
    }
  }
}
</script>
<style>


</style>