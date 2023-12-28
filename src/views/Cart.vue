<template>
  <div class="w-100 px-4 text-light" style=" font-family: MjFlow !important;background: url('/img/loginBack.svg') top center no-repeat; background-size: cover">


    <h2 class="my-color mt-5 text-center">سبد خرید</h2>



   <div class="px-4 mt-5">
     <div class="mb-3">
       <div class="d-flex justify-content-between">
         <h4>خمیر ساده 3 کیلو 5 بسته</h4>
         <div>
           <img src="/img/minus.png" alt="">
         </div>
       </div>
       <div class="text-center">
         <img src="/img/hr.png" class="w-100" alt="">
       </div>
     </div>
     <div class="mb-3">
       <div class="d-flex justify-content-between">
         <h4>خمیر ساده 3 کیلو 5 بسته</h4>
         <div>
           <img src="/img/minus.png" alt="">
         </div>
       </div>
       <div class="text-center">
         <img src="/img/hr.png" class="w-100" alt="">
       </div>
     </div>
     <div class="mb-3">
       <div class="d-flex justify-content-between">
         <h4>خمیر ساده 3 کیلو 5 بسته</h4>
         <div>
           <img src="/img/minus.png" alt="">
         </div>
       </div>
       <div class="text-center">
         <img src="/img/hr.png" class="w-100" alt="">
       </div>
     </div>
   </div>


    <div class="d-flex justify-content-center">
      <router-link to="/products" class="btn-orange2 text-black pt-3">
        <i class="bi bi-plus"></i>
        افزودن محصول</router-link>
    </div>

  </div>
</template>


<script>
import {onMounted, ref} from "vue";
import {useStore} from "vuex";

export default {
  name: "Profile",
  setup() {

    return {}
  }

}
</script>

<style scoped>

</style>
