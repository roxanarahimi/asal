<template>
  <div class="w-100 px-4 text-light " style="background: url('/img/loginBack.svg') top center no-repeat; background-size: cover">

    <h2 class="my-color mt-5 text-center my-font">سبد خرید</h2>

   <div class="px-4 mt-5 my-font" style="">
     <div class="mb-3">
       <div class="d-flex justify-content-between">
         <h4>خمیر ساده 3 کیلویی 5 بسته</h4>
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
         <h4>خمیر ساده 3 کیلویی 5 بسته</h4>
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
         <h4>خمیر ساده 3 کیلویی 5 بسته</h4>
         <div>
           <img src="/img/minus.png" alt="">
         </div>
       </div>
       <div class="text-center">
         <img src="/img/hr.png" class="w-100" alt="">
       </div>
     </div>
   </div>


    <div class="d-flex justify-content-center my-font">
      <router-link to="/products" class="btn-orange2 text-black pt-3">
        <i class="bi bi-plus"></i>
        افزودن محصول</router-link>
    </div>

    <div class="my-border mt-5 p-3 text-center">
      <h3> مبلغ نهایی: 500.000.000</h3>
      <h3> تخفیف ریالی: 5.000.000</h3>
    </div>


    <div class="d-flex justify-content-between mt-5">

      <p class="mb-0 my-color mt-2">نحوه تسویه</p>

      <div class="d-flex">
        <button class="btn-black2 me-3" style="width: 80px !important">نقدی</button>
        <button class="btn-orange2" style="width: 80px !important">چک</button>
      </div>
    </div>

    <div class="d-flex mt-5 justify-content-center">
      <button class="btn-orange2">ثبت سفارش</button>
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
