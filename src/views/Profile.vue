<template>
 <div class="p-5 m-5 text-light">
   <h5>کاربر گرامی خوش آمدید</h5>
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
      user.value = JSON.parse(localStorage.getItem('user'))
      if(!user){
        window.location='/';
      }
      updateUserInfo();
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
