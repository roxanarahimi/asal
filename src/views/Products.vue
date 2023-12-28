<template>
  <div class="w-100 px-4 text-light"
       style="background: url('/img/loginBack.svg') top center no-repeat; background-size: cover">

    <p class="mb-0 mt-5"> نام شرکت: ایران گستر شرق</p>
    <p class="mb-0"> کاربر گرامی: محمد احمدی</p>
    <p class="mb-5"> کد مشتری: 152458</p>

    <div class="d-flex justify-content-between">
      <p class="mb-0 my-color">استعلام اعتبار خرید: </p>
      <div class="d-flex">
        <div class="px-2"><img src="/img/radioGreen.png" width="18px" alt=""></div>
        <p>بیش از 50% اعتبار</p>
      </div>
<!--      <div class="d-flex">-->
<!--        <div class="px-2"><img src="/img/radioOrange.png" width="18px" alt=""></div>-->
<!--        <p>کمتر از 50% اعتبار</p>-->
<!--      </div>-->

    </div>

    <div class="d-flex justify-content-between mb-3">
      <p class="mb-0 my-color">مانده اعتبار ریالی: </p>

        <p>1.000.000.000 ریال</p>

    </div>






    <div class="d-grid" style="height: 75px; background: url('/img/devprofile.png') top center no-repeat; background-size: cover">

      <h3 class="my-color align-self-center">سفارش کالا</h3>

      <div class="d-flex justify-content-start align-self-end">
        <div class="productCat" :id="'category'+1" @click="categoryToggle(1)">خمیر</div>
        <div class="productCat" :id="'category'+2" @click="categoryToggle(2)">کیک</div>
        <div class="productCat" :id="'category'+3" @click="categoryToggle(3)">شربت</div>
        <div class="productCat" :id="'category'+4" @click="categoryToggle(4)">دارو</div>
      </div>

    </div>

    <div class="d-flex justify-content-start mt-5">
      <div class="d-flex pe-4">
        <p class="me-2">ساده</p>
        <div class="productRadio"></div>
      </div>
      <div class="d-flex pe-4">
        <p class="me-2">اولترا</p>
        <div class="productRadio activeProductRadio"></div>
      </div>
    </div>


    <div class="d-flex justify-content-between mt-4">
      <div class="d-flex pe-2">
        <p class="me-2">1 کیلویی</p>
        <div class="productSizeRadio"></div>
      </div>
      <div class="d-flex pe-2">
        <p class="me-2">3 کیلویی</p>
        <div class="productSizeRadio activeProductSizeRadio"></div>
      </div>
      <div class="d-flex pe-2">
        <p class="me-2">5 کیلویی</p>
        <div class="productSizeRadio"></div>
      </div>
      <div class="d-flex pe-2">
        <p class="me-2">فله</p>
        <div class="productSizeRadio"></div>
      </div>
    </div>

    <div class="d-flex mb-3" style="font-size: 13px">
      <small class="my-color">قیمت واحد: </small>
      <small>500.000 </small>
      <small>ریال </small>
    </div>
    <div class="row">
      <label >تعداد</label>
      <div class="col-6 d-flex">
        <input type="number" class="form-control me-3">
        <p class="mb-0">بسته</p>
      </div>

    </div>

    <div class="d-flex justify-content-between mt-5">
      <button class="btn-orange2" @click="addToCart">افزودن به سبد</button>
      <router-link to="/cart" class="btn-black2 pt-2">سبد خرید</router-link>
    </div>
  </div>
</template>


<script>
import {onMounted, ref} from "vue";
import {useStore} from "vuex";

export default {
  name: "Products",
  setup() {

    const categoryToggle = (index)=>{

      document.querySelectorAll('.productCat').forEach((element)=>{
        element.classList.remove('activeProductCat');
      })

      document.querySelector('#category'+index).classList.add('activeProductCat');
    }
    return {categoryToggle}
  }

}
</script>

<style scoped>

</style>
