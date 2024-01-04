<template>
  <div class="w-100 px-4 text-light " style="background: url('/img/loginBack.svg') top center no-repeat; background-size: cover">

    <h2 class="my-color mt-5 text-center my-font">سفارشات اخیر</h2>

   <div v-if="data.length" class="px-4 mt-5 my-font" style="">
     <div v-for="item in data" class="mb-3">
       <div class="d-flex justify-content-between">
         <div>
           <h4>15-425868</h4>
           <router-link to="/products" class="btn-orangePill text-black">
             مشاهده فاکتور
           </router-link>
         </div>
         <div class="d-grid text-end">
           <h4 class="align-self-start">1402/10/02</h4>

           <small class="align-self-end my-color mx-auto">{{ item.status }}</small>
         </div>
       </div>
       <div class="text-center">
         <img src="/img/hr.png" class="w-100" alt="">
       </div>
     </div>

   </div>


    <div class="d-flex justify-content-center my-font">
      <router-link to="/products" class="btn-orangePill text-black">
<!--        <i class="bi bi-plus"></i>-->
        سفارش جدید
      </router-link>
    </div>

  </div>
</template>


<script>
import {onMounted, ref} from "vue";
import {useStore} from "vuex";

export default {
  name: "Orders",
  setup() {
    const store = useStore()
    const data = ref([]);
    onMounted(()=>{
     getData();
    })


    // /userOrders/{user}
    const getData = () => {
      axios.get(store.state.panelUrl + '/api/userOrders/' + JSON.parse(localStorage.getItem('user')).id)
          .then((response) => {
            data.value = response.data;
            console.log(response.data)
          }).catch((error) => {
        console.error(error)
      })
    }

    return { getData, store, data }
  }

}
</script>

<style scoped>

</style>
