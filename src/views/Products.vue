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






    <div class="d-grid mb-5" style="height: 75px; background: url('/img/devprofile.png') top center no-repeat; background-size: cover">

      <h3 class="my-color align-self-center">سفارش کالا</h3>

      <div class="d-flex justify-content-start align-self-end">
        <div v-for="(item, index) in data" :key="index" class="productCat"  :id="'category'+item.id" @click="categoryToggle(item)">{{ item.title }}</div>

      </div>

    </div>

    <div class="mb-4" style="height: 110px">

      <div v-if="selectedCategory" class="d-flex justify-content-start ">
        <div v-for="item in selectedCategory.products" :key="item.id" class="d-flex pe-4">
          <p class="me-2 pointer" @click="productToggle(item)">{{ item.title }}</p>
          <div class="productRadio" :id="'product'+item.id" @click="productToggle(item)"></div>
        </div>

      </div>


      <div v-if="selectedProduct" class="d-flex justify-content-between mt-4">
        <div v-for="item in selectedProduct.sizes" :key="item.id" class="d-flex pe-2">
          <p class="me-2 pointer" @click="productSizeToggle(item)">{{ item.size }}</p>
          <div class="productSizeRadio" :id="'size'+item.id" @click="productSizeToggle(item)"></div>
        </div>
      </div>
    </div>


<!--    <div class="d-flex my-3" style="font-size: 13px">-->
<!--      <small class="my-color">قیمت واحد: </small>-->
<!--      <small>500.000 </small>-->
<!--      <small>ریال </small>-->
<!--    </div>-->
    <div style="height: 62px">
      <div v-if="selectedSize" class="row">
        <label v-if="selectedSize.size == 'فله'">وزن</label>
        <label v-else>تعداد</label>
        <div class="col-6 d-flex">
          <input v-model="quantity" type="number" class="form-control me-3">
          <p v-if="selectedSize.size == 'فله'" class="mb-0">کیلو</p>
          <p v-else class="mb-0">بسته</p>
        </div>

      </div>
    </div>

    <div class="d-flex justify-content-between mt-5">
      <button class="btn-orange2" @click="addToCart">افزودن به سبد</button>
      <router-link to="/cart" class="btn-black2 pt-2">سبد خرید</router-link>
    </div>
  </div>
</template>


<script>
import {computed, onMounted, ref} from "vue";
import {useStore} from "vuex";


export default {
  name: "Products",
  setup() {
    const store = useStore();
    const panelUrl = store.state.panelUrl;
    const getData = () => {
      store.commit('getProductCats');
      console.log(store.state)
    }

    onMounted(()=>{
      getData();
    })
    const selectedCategory = ref();
    const selectedProduct = ref();
    const selectedSize = ref();
    const quantity = ref();

    const categoryToggle = (item)=>{
      document.querySelectorAll('.productCat').forEach((element)=>{
        element.classList.remove('activeProductCat');
      })
      document.querySelector('#category'+item.id).classList.add('activeProductCat');
      selectedCategory.value = item;


      document.querySelectorAll('.productRadio').forEach((element)=>{
        element.classList.remove('activeProductRadio');
      })
      selectedProduct.value = null
      document.querySelectorAll('.productSizeRadio').forEach((element)=>{
        element.classList.remove('activeProductSizeRadio');
      })
      selectedSize.value = null;

      quantity.value = null;

    }
    const productToggle = (item)=>{
      document.querySelectorAll('.productRadio').forEach((element)=>{
        element.classList.remove('activeProductRadio');
      })
      document.querySelector('#product'+item.id).classList.add('activeProductRadio');
      selectedProduct.value = item;
      document.querySelectorAll('.productSizeRadio').forEach((element)=>{
        element.classList.remove('activeProductSizeRadio');
      })
      selectedSize.value = null;
      quantity.value = null;

    }
    const productSizeToggle = (item)=>{
      document.querySelectorAll('.productSizeRadio').forEach((element)=>{
        element.classList.remove('activeProductSizeRadio');
      })
      document.querySelector('#size'+item.id).classList.add('activeProductSizeRadio');
      selectedSize.value = item;
      quantity.value = null;


    }
    const addToCart = ()=>{
      if (quantity.value != null){
        alert('محصول با موفقیت به سبد خرید افزوده شد');
        document.querySelectorAll('.productCat').forEach((element)=>{
          element.classList.remove('activeProductCat');
        })
        document.querySelectorAll('.productRadio').forEach((element)=>{
          element.classList.remove('activeProductRadio');
        })
        document.querySelectorAll('.productSizeRadio').forEach((element)=>{
          element.classList.remove('activeProductSizeRadio');
        })
        selectedCategory.value = null;
        selectedProduct.value = null;
        selectedSize.value = null;

      }else{
        alert('لطفا مراحل سفارش را کامل کنید')
      }
    }

    return {categoryToggle, productToggle, productSizeToggle, getData,addToCart, store,panelUrl,
      data: computed(()=>store.state.productsCats),
      selectedCategory , selectedProduct, selectedSize, quantity
    }
  }

}
</script>

<style scoped>

</style>
