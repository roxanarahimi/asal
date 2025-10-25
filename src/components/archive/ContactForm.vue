<template>
  <div id="form" class="py-5 text-dark my-padding main-bg border-radius mb-3">

    <p class="mb-4  fw-bold">در کمتر از 24 ساعت پاسخ سریع دریافت کنید</p>
    <div class="row">

      <div class="col-12 mb-2 px-1">
        <label for="message">پیام یا سوال</label>
        <textarea v-model="message" id="message"
                  class="form-control rounded-0 messageForm required"></textarea>
      </div>
      <div class="col-12 mb-2 px-1">
        <label for="messageEmail">ایمیل</label>
        <input id="messageEmail" type="text" class="form-control rounded-0 en messageForm">
      </div>
      <div class="col-12 mb-2 px-1">
        <label for="messageName">نام و نام خانوادگی (اختیاری)</label>
        <input v-model="name" id="messageName" type="text" class="form-control rounded-0 messageForm">
      </div>
      <div class="col-6 mb-2 px-1">
        <label for="messageCiyId">شهر</label>
        <input v-model="city_id" id="messageCiyId" type="text" class="form-control rounded-0 messageForm">
      </div>
      <div class="col-6 mb-2 px-1">
        <label for="messageMobile">تلفن همراه</label>
        <input id="messageMobile" v-model="mobile" value="user?.mobile" type="text"
               class="form-control rounded-0 en messageForm required">
        <div v-if="errors?.mobile?.length" class="text-danger mt-2 fw-bold">
          <ul>
            <li v-for="error in errors['mobile']"><small>{{ error }}</small></li>
          </ul>
        </div>
      </div>

      <div class="text-center col-lg-12 mt-3">
        <button v-if="user?.id" class="btn-black-rect" @click="storeMessage">send</button>
        <button v-if="!user?.id" class="btn-black-rect" @click="showModal('message')">modal</button>
      </div>
    </div>
  </div>
  <button data-bs-toggle="modal" class="d-none" id="modal-btn-h" data-bs-target="#AuthorizeModal"></button>
</template>

<script>
import {useStore} from "vuex";
import {computed, onMounted, ref} from "vue";
import Loader from "@/components/Loader2.vue"
import AuthorizeModal from '@/components/AuthorizeModal.vue';


export default {
  name: "ContactForm",
  components: {Loader,AuthorizeModal},//
  setup() {
    const store = useStore();
    const serverUrl = store.state.serverUrl;
    const isLoading = ref(false);
    const errors = ref([]);
    // const user = computed(() => JSON.parse(localStorage.getItem('user')));
    const user = ref();
    const mobile = ref();
    const message = ref();
    const name = ref();
    const email = ref();
    const city_id = ref();
    const emptyFieldsCount = ref();
    const validated = ref(false);

    onMounted(()=>{
      user.value = computed(() => JSON.parse(localStorage.getItem('user')));
      // localStorage.removeItem('user');
    })

    const setForm = async (form) => {
      localStorage.setItem('form', form);
    }
    const validate = () => {
      errors.value = [];
      errors.value['mobile'] = [];
      emptyFieldsCount.value = 0;
      let req = document.querySelectorAll('.required');
      console.log('reqs',req)
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
      // if (emptyFieldsCount.value === 0) {
      //   document.getElementById('modal-btn-h').click();
      // }
    }
    const storeMessage = async () => {
      try {
        await validate();
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
                  alert('پیام شما با موفقیت ثبت شد. کارشناسان ما در اسرع وقت با شما ارتباط میگیرند.')
                } else {
                  alert('در ارسال پیام خطایی رخ داد. لطفا دوباره تلاش کنید.')
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
      await validate();
      console.log('oo', emptyFieldsCount.value);
      if (emptyFieldsCount.value === 0) {
        document.getElementById('modal-btn-h').click();
      }
    }

    return {
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
  }
}

</script>

<style scoped>
.accordion-button::after {
  font-size: 12px !important;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='black'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");

  margin: 0 5px !important;
}

.accordion-button::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230d6efd'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

.multiselect {
  border-radius: 0 !important;
  height: 38px;
}
</style>