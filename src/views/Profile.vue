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


    <div class="d-flex justify-content-between">
      <router-link to="/orders" class="btn-orange2 text-black pt-3">سفارش ها</router-link>
      <router-link to="/products" class="btn-black2 text-black pt-3 my-color">ثبت سفارش</router-link>
    </div>


  </div>
</template>


<script>
import {onMounted, ref} from "vue";
import {useStore} from "vuex";
import App from "@/App";

export default {
  name: "Profile",
  setup() {
onMounted(()=>{
  console.log(localStorage);
updateUserInfo();
})
    const updateUserInfo=()=> {
      if (localStorage.getItem('user')) {
        axios.get(App.setup().url+'/api/user/' + JSON.parse(localStorage.getItem('user')).id)
            .then(async (response) => {

              if (response.status === 200 && response.data.scope === 'user') {
                await localStorage.setItem('user', JSON.stringify(response.data));
                this.user = response.data;

              }
            })
            .then(() => {
              // if(this.user?.cart?.items?.length) {
              // document.getElementById('cart_count').classList.remove('d-none')
              if (this.user?.cart?.items?.length === undefined || this.user?.cart?.items?.length === 0) {
                document.getElementById('cart_count').innerHTML = '';
              } else {
                document.getElementById('cart_count').innerHTML = this.user?.cart?.items?.length;

              }
              // }  // }else{
              //     document.getElementById('cart_count').classList.add('d-none')
              // }
              // if (this.user){
              //     console.log(this.user);
              //     console.log(this.user.cart);
              //     console.log(this.user.cart.items);
              //     console.log(this.user.cart.items?.length);
              //     console.log(this.user.cart-items-count);
              // }
            })
            .catch((error) => {
              console.log(error);
            })
      }

    }
    return {
  updateUserInfo
    }
  }

}
</script>

<style scoped>

</style>
