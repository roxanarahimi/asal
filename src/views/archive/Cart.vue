<template>
  <div class="w-100 px-4 text-light "
       style="background: url('/img/loginBack.svg') top center no-repeat; background-size: cover">

    <h2 class="my-color mt-5 text-center my-font">سبد خرید</h2>

    <div v-if="data?.items?.length" class="px-4 mt-5 my-font" style="">
      <div v-for="item in data.items" class="mb-3">
        <div class="d-flex justify-content-between">
          <h5>{{ item.product.category.title }}
            {{ item.product.title }}
            {{ item.size.size }}
            {{ item.quantity }}
            <span v-if="item.size.size == 'فله'">کیلو</span>
            <span v-else>بسته</span>
          </h5>
          <div>
            <img @click="showRemoveItemModal(item)" src="/img/minus.png" alt="">
          </div>
        </div>
        <div class="text-center">
          <img src="/img/hr.png" class="w-100" alt="">
        </div>
      </div>
    </div>

    <div v-else class="my-5" >سبد شما خالی است</div>

    <div class="d-flex justify-content-center my-font my-5">
      <router-link to="/products" class="btn-orangePill text-black">
        <i class="bi bi-plus"></i>افزودن محصول
      </router-link>
    </div>



    <div v-if="data?.items?.length">
      <div class="my-border mt-5 p-3 text-center ">
      <h4> مبلغ نهایی: {{ data?.amount }} ریال</h4>
      <h4> تخفیف ریالی: {{ data?.off || 0 }} ریال</h4>
    </div>

      <div class="d-flex justify-content-between mt-5">

        <p class="mb-0 my-color mt-2">نحوه تسویه</p>

        <div class="d-flex">
          <button @click="paymentToggle(1)" id="cash" class="paymentRadio  me-3"
                  :class="{'activePaymentRadio': pay=='cash'}" style="width: 80px !important">نقدی
          </button>
          <button @click="paymentToggle(2)" id="check" class="paymentRadio" :class="{'activePaymentRadio': pay=='check'}"
                  style="width: 80px !important">چک
          </button>
        </div>
      </div>

      <div class="d-flex mt-5 justify-content-center">
        <button class="btn-orange2" @click="confirmOrder">ثبت سفارش</button>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div  class="modal fade"  id="remove-order-item-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <!--          <button type="button" class="btn-close m-2 me-auto" data-bs-dismiss="modal" aria-label="Close"></button>-->
        <div class="modal-body text-center">

          <p  class="text-center" >
            (
            {{ remove?.product?.category.title }}
            {{ remove?.product?.title }}
            {{ remove?.size?.size }}
            {{ remove?.quantity }}
            <span v-if="remove?.size?.size == 'فله'">کیلو</span>
            <span v-else>بسته</span>
            )
          </p>
<!--          <img src="/img/check.png" alt="">-->
          <p class="text-center">حذف شود؟</p>
        </div>
        <div class="d-flex justify-content-around">
          <button type="button" class="btn-orange-rect my-3" style="width: 100px; height:40px" data-bs-dismiss="modal">انصراف</button>
          <button type="button" class="btn-black-rect my-3" @click="removeOrderItem(remove?.id)" style="width: 100px; height:40px" data-bs-dismiss="modal">تائید</button>
        </div>
      </div>

    </div>
  </div>

</template>


<script>
import {onMounted, ref} from "vue";
import {useStore} from "vuex";

export default {
  name: "Profile",
  setup() {
    const store = useStore()
    const pay = ref();
    const data = ref([]);
    const remove = ref({});

    onMounted(() => {
      getData();


    })
    const paymentToggle = (index) => {
      if (pay.value == 'cash' && index == 2) {
        document.querySelector('.activePaymentRadio').classList.remove('activePaymentRadio');
        document.querySelector('#check').classList.add('activePaymentRadio');
        pay.value = 'check'
      } else if (pay.value == 'check' && index == 1) {
        document.querySelector('.activePaymentRadio').classList.remove('activePaymentRadio');
        document.querySelector('#cash').classList.add('activePaymentRadio');
        pay.value = 'cash'
      }

      axios.post(store.state.panelUrl + '/api/order/' + data.value.id, {
        payment: pay.value,
        status: 'cart',
        payed: 0,
      }).then((response) => {
        console.log(response);
      }).catch((error) => console.error(error));

    }
    const getData = () => {
      axios.get(store.state.panelUrl + '/api/cart/' + JSON.parse(localStorage.getItem('user')).id)
          .then((response) => {
            data.value = response.data;
          })
          .then(() => {
            console.log(data.value)
            pay.value = data.value.pay;
          }).catch((error) => {
        console.error(error)
      })
    }
    const confirmOrder=() =>{
      axios.post(store.state.panelUrl + '/api/order/' + data.value.id, {
        payment: pay.value,
        status: 'in-progress',
        payed: 0,
      }).then((response)=>{
        let myModal = new bootstrap.Modal(document.getElementById('confirm-order-modal'))
        myModal.show();
      }).catch((error) => console.error(error));

    }
    const reload = ()=>{
      window.location = '/orders';
    }
    const showRemoveItemModal = (item)=>{
      remove.value = item;
      console.log(item)
        let myModal = new bootstrap.Modal(document.getElementById('remove-order-item-modal'))
        myModal.show();

    }
    const removeOrderItem = (id)=>{
      axios.post(store.state.panelUrl+'/api/item/remove',{
        order_item_id: id
      })
      .then((response)=>{
        getData();
      }).catch((error)=>{console.error(error)})

    }
    return {paymentToggle, pay, store, getData, data, confirmOrder, reload , remove,showRemoveItemModal, removeOrderItem }
  }

}
</script>

<style scoped>

.modal-dialog{
  width: 350px !important;
  margin: 0 auto !important;
  text-align: center;
}

</style>
