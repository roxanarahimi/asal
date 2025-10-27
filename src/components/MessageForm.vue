<template>
  <div id="form" class="py-5 text-dark my-padding main-bg border-radius mb-3">

    <p class="mb-4  fw-bold">در کمتر از 24 ساعت پاسخ سریع دریافت کنید</p>
    <p class="mb-4 fw-bold text-success d-none" id="msgSuccess">
      پیام شما با موفقیت ثبت شد. پس از بررسی، کارشناسان ما با شما ارتباط میگیرند.</p>
    <p class="mb-4 fw-bold text-success d-none" id="msgFail">در ارسال پیام خطایی رخ داد. لطفا دوباره تلاش
      کنید.</p>
    <div class="row">

      <div class="col-12 mb-2 px-1">
        <label for="message">پیام یا سوال</label>
        <textarea v-model="message" id="message" class="form-control rounded-0  required"></textarea>
      </div>
      <div class="col-12 mb-2 px-1">
        <label for="messageEmail">ایمیل</label>
        <input id="messageEmail" type="email" :value="user?.email" class="form-control  rounded-0 en">
      </div>
      <div class="col-12 mb-2 px-1">
        <label for="messageName">نام و نام خانوادگی (اختیاری)</label>
        <input id="messageName" type="text" :value="user?.name" class="form-control rounded-0 ">
      </div>
      <!--      <div class="col-6 mb-2 px-1">-->
      <!--        <label for="messageCiyId">شهر</label>-->
      <!--        <input  id="messageCiyId" type="text" :value="user?.city_id" class="form-control rounded-0 ">-->
      <!--      </div>-->

      <div class="col-6 mb-2 px-1">
        <label>شهر</label>
        <div class="required" >
          <Multiselect
                       v-model="selectedCity"
                       :options="cities"
                       label="name"
                       mode="single"
                       value-prop="id"
                       track-by="name"
                       placeholder="نام شهر را جستجو کنید..."
                       :searchable="true"
                       :close-on-select="true"
          />
        </div>
        <input type="hidden" id="messageCiyId" v-model="selectedCity">
        <div id="city_idHelp" class="form-text error"></div>
        <p class="form-text error m-0" v-for="e in errors.city_id">{{ e }}</p>
      </div>

      <div class="col-6 mb-2 px-1">
        <label for="messageMobile">تلفن همراه</label>
        <input v-if="user" type="text" disabled :value="user.mobile" class="form-control rounded-0 en ">
        <input v-else v-model="mobile" id="messageMobile" type="text"
               class="form-control rounded-0 en  required">
        <div v-if="errors?.mobile?.length" class="text-danger mt-2 fw-bold">
          <ul>
            <li v-for="error in errors['mobile']"><small>{{ error }}</small></li>
          </ul>
        </div>

      </div>

      <div class="text-center col-lg-12 mt-3">
        <button v-if="user" class="btn-black-rect" @click="storeMessage">ثبت</button>
        <button v-if="!user" class="btn-black-rect" @click="showModal('message')">ثبت</button>
      </div>
    </div>
  </div>
  <button data-bs-toggle="modal" class="d-none" id="modal-btn-h" data-bs-target="#AuthorizeModal"></button>

</template>
<script>
import {useStore} from "vuex";
import {computed, onMounted, ref, watch} from "vue";
import Loader from "@/components/Loader2.vue"
import Multiselect from '@vueform/multiselect'  //npm install @vueform/multiselect
import '@vueform/multiselect/themes/default.css'


export default {
  name: "Footer",
  components: {Loader, Multiselect},//
  setup() {
    const store = useStore();
    const serverUrl = store.state.serverUrl;
    const isLoading = ref(false);
    const errors = ref([]);
    const user = ref();
    const mobile = ref();
    const message = ref();
    const name = ref();
    const email = ref();
    const city_id = ref();
    const emptyFieldsCount = ref();
    const validated = ref(false);
    const selectedCity = ref(null);

    onMounted(() => {
      document.querySelector('.multiselect-search')?.setAttribute('autocomplete', 'off');
      user.value = JSON.parse(localStorage.getItem('user'));
      getCities();
    })

    const setForm = async (form) => {
      localStorage.setItem('form', form);
      validate();
    }
    const validate = () => {
      errors.value = [];
      errors.value['mobile'] = [];
      emptyFieldsCount.value = 0;
      let req = document.querySelectorAll('.required');

      req.forEach((element) => {
        if (element.value === "") {
          element.classList.add('hasError');
          // element.nextSibling.innerHTML = "فیلد اجباری";
          emptyFieldsCount.value++;
        } else {
          element.classList.remove('hasError');
          // element.nextSibling.innerHTML = "";
        }
      });
      if (mobile.value && mobile.value?.length !== 11) {
        errors.value['mobile'].push('شماره موبایل باید 11 رقم باشد');
        document.getElementById('messageMobile').classList.add('hasError');
        emptyFieldsCount.value++;
      }
      if (mobile.value && !mobile.value?.startsWith('09')) {
        errors.value['mobile'].push('شماره موبایل باید با 09 شروع شود');
        document.getElementById('messageMobile').classList.add('hasError');
        emptyFieldsCount.value++;
      }
      if (!localStorage.getItem('user') && emptyFieldsCount.value === 0) {
        document.getElementById('modal-btn-h').click();
      }
    }
    const storeMessage = async () => {
      try {
        document.getElementById('msgSuccess').classList.add('d-none');
        document.getElementById('msgFail').classList.add('d-none');
        validate();
        if (user.value && emptyFieldsCount.value === 0) {
          await fetch(serverUrl + '/api/message/store', {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify({
              user_id: user.value.id,
              message: document.getElementById('message').value
            }),
          })
              .then(async (response) => {
                if (response.status === 201) {
                  document.getElementById('msgSuccess').classList.remove('d-none');
                } else {
                  document.getElementById('msgFail').classList.remove('d-none');
                  const errorData = await response.json().catch(() => ({}));
                  throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
                }
              })
              .catch((error) => {
                console.error(error.message);
              });
        }
      } catch (error) {
        console.error('API call failed:', error);
        document.getElementById('msgFail').classList.remove('d-none');
      }
    }
    const showModal = async (type) => {
      await setForm(type);
      validate();
      if (emptyFieldsCount.value === 0) {
        document.getElementById('modal-btn-h').click();
      }
    }
    const getCities = async () => {
      try {
        await store.dispatch('getCities', '');
        // if(!store.state.contents.length){
        //   notFund.value = true;
        // }
        // isLoading.value = false;
        console.log(store.state.cities)
      } catch (error) {
        console.error('API call failed:', error);
      }
    };
    watch(selectedCity.value, (newWidth, oldWidth) => {
      console.log(`Width changed from ${oldWidth} → ${newWidth}`)
    })
    return {
      cities: computed(() => store.state.cities),
      getCities,
      selectedCity,
      store,
      serverUrl,
      isLoading,
      errors,
      setForm,
      user,
      mobile,
      message,
      name,
      email,
      city_id,
      storeMessage,
      validate,
      validated,
      emptyFieldsCount,
      showModal
    }

  },
}
</script>
<style scoped>
:deep(.multiselect-search) {
  width: 100% !important;
  height: 37.6px !important;
  border: none !important;
  border-radius: 0 !important;
}

:deep(.multiselect,.multiselect-wrapper) {
  width: 100% !important;
  border-radius: 0 !important;
  height: 37.6px !important;
  padding-left: 10px !important;

}
:deep(.multiselect-single-label) {
  width: 100% !important;
  right: 0 !important;
  left:unset !important;
  height: 100% !important;
}
</style>