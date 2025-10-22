<template>
  <div v-if="user" class="w-100 px-4 text-light pt-5"
       style="background: url('/img/loginBack.svg') top center no-repeat; background-size: cover">

    <p v-if="user.typeEn == 'legal'" class="mb-0 mt-5"> نام شرکت: {{user.name}}</p>
    <p v-if="user.typeEn == 'real'" class="mb-0"> کاربر گرامی: {{ user.name }}</p>
    <p v-if="user.typeEn == 'legal'" class="mb-0"> اوپراتور گرامی: {{ user.operator }}</p>
    <p class="mb-5"> کد مشتری:  </p>

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
import App from "@/App.vue";

export default {
  name: "Profile",
  setup() {
    const user = ref();
    onMounted(() => {
      console.log(localStorage);
      updateUserInfo();
      user.value = JSON.parse(localStorage.getItem('user'))
    })
    const updateUserInfo = () => {
      if (localStorage.getItem('user')) {
        axios.get(App.setup().url + '/api/user/' + JSON.parse(localStorage.getItem('user')).id)
            .then(async (response) => {

              if (response.status === 200 && response.data.scope === 'user') {
                await localStorage.setItem('user', JSON.stringify(response.data));
                user.value = response.data;

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
      updateUserInfo, user
    }
  }

}
</script>

<style scoped>

</style>
