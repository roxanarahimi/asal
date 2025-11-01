<template>

  <div class="d-block overflow-x-hidden">
    <loader v-if="isLoading"/>
    <floating-btns/>
    <the-menu/>
    <div class="bg-black w-100" style="min-height: 500px; padding-top:60px;">
      <router-view/>
    </div>
    <the-footer/>
  </div>
  <search-modal />
  <authorize-modal />
  <button data-bs-toggle="modal" class="d-none" id="modal-btn-h" data-bs-target="#AuthorizeModal"></button>

</template>

<script>
// @ is an alias to /src
import SearchModal from "@/components/SearchModal";
import FloatingBtns from '@/components/FloatingBtns.vue'
import theMenu from '@/components/TheMenu.vue'
import theFooter from "@/components/Footer";
import {useStore} from "vuex";
import Loader from "@/components/Loader";
import {useRoute} from "vue-router/dist/vue-router";
import AuthorizeModal from '@/components/AuthorizeModal.vue';

export default {
  components: {theFooter, theMenu, FloatingBtns, Loader, SearchModal,AuthorizeModal},
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
          this.isLoading = false;
        document.getElementById('body').classList.remove('stop-scrolling');

      }
    };
  },
  unmounted() {
    document.querySelector('.loader-wrapper')?.classList.add('opacity-0')
  },
  updated() {

    // alert(localStorage.getItem('searchScroll'))
    let tag = document.querySelectorAll('h3,h4')?.forEach((element)=>{
      if (element.innerHTML.match(localStorage.getItem('searchScroll'))){
        console.log('ee',element);
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const scrollToPosition = elementPosition - offset;

        window.scrollTo({top: scrollToPosition});
        localStorage.removeItem('searchScroll');
      }
    });

    // let user = localStorage.getItem('user')
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
    const url = store.state.serverUrl;

    return {
      store, url, route
    }
  }
}
</script>
<style>


</style>