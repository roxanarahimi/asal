<template>
  <!-- Button trigger modal -->


  <!-- Modal -->
  <div class="modal fade" id="AuthorizeModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
       aria-labelledby="AuthorizeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content bg-black my-border  text-light">
        <div class="d-flex justify-content-start p-2 ">
          <div class="text-light cursor-pointer" data-bs-dismiss="modal" id="closeAuthorizeModal" @click="reset"><i
              class="bi bi-x-lg"></i></div>
        </div>
        <div class="modal-body" style="height: 140px">
          <p class="mb-4 ms-3">{{ message }}</p>
          <input type="hidden" id="authForm" v-model="form">
         <div class="mx-auto" style="max-width: 250px">
            <div class="code-section row" dir="ltr">
              <label :class="{'d-none': level!==1}" for="">شماره موبایل</label>
              <input :class="{'d-none': level!==1}" type="text" id="authMobile" class="form-control my-border bg-transparent en text-white" v-model="mobile">

              <div v-if="level === 2" class="col-3">
                <input  class="text-center col-3 my-border bg-transparent text-light form-control"
                       @input="autoTab($event)" minLength="1" maxLength="1" min="0" max="9" type="text" id="code1"
                       autocomplete="off">
              </div>
              <div v-if="level === 2" class="col-3">
                <input  class="text-center col-3 my-border bg-transparent text-light form-control"
                       @input="autoTab($event)" minLength="1" maxLength="1" min="0" max="9" type="text" id="code2"
                       autocomplete="off">
              </div>
              <div v-if="level === 2" class="col-3">
                <input class="text-center col-3 my-border bg-transparent text-light form-control"
                       @input="autoTab($event)" minLength="1" maxLength="1" min="0" max="9" type="text" id="code3"
                       autocomplete="off">
              </div>
              <div v-if="level === 2" class="col-3">
                <input class="text-center col-3 my-border bg-transparent text-light form-control"
                       @input="autoTab($event)" minLength="1" maxLength="1" min="0" max="9" type="text" id="code4"
                       autocomplete="off">
              </div>
            </div>
          </div>
        </div>
        <div class="p-2 text-end" :class="{'d-flex justify-content-between': level === 2}">
          <!--          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>-->
          <button v-if="level === 1 && form === 'register'" type="button" class="btn btn-orange-rect my-border"
                  @click="sendOtp">دریافت کد تایید
          </button>
          <button v-if="level === 1 && form !== 'register'" type="button" class="btn btn-orange-rect my-border"
                  @click="sendOtp">ورود
          </button>
          <button v-if="level === 2" type="button" class="btn btn-orange-rect my-border" @click="clean">پاک کن</button>
          <button v-if="level === 2" type="button" class="btn btn-orange-rect my-border" @click="verifyMobile">تایید
          </button>
          <button v-if="level === 3" type="button" class="btn btn-orange-rect my-border" @click="reset">ادامه</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {computed, onBeforeMount, onMounted, ref} from "vue";
import {useStore} from "vuex";
import App from "@/App.vue";

export default {
  components:{App},
  setup() {
    const store = useStore();
    const message = ref();
    const form = ref(localStorage.getItem('form'));
    const mobile = ref();
    const serverUrl = store.state.serverUrl;
    const isLoading = ref(false);
    const errors = ref([]);
    const user = computed(() => JSON.parse(localStorage.getItem('user')));
    const level = ref(1);
    const setFirstMessage = () => {
      switch (form.value) {
        case 'message': {
          message.value = 'برای ارسال پیام، ابتدا باید وارد سایت شوید'
        }
          break;
        case 'collaboration': {
          message.value = 'برای ارسال درخواست همکاری، ابتدا باید وارد سایت شوید'
        }
          break;
        case 'complane': {
          message.value = 'برای ارسال سوال، انتقاد یا پیشنهاد، ابتدا باید وارد سایت شوید'
        }
          break;
        case 'register': {
          message.value = 'برای ثبت نام در سایت، لطفا شماره موبایل خود را با ارسال کد، تایید کنید'
        }
          break;
      }
    }
    onBeforeMount(() => {
      setFirstMessage();
    });
   onMounted(()=>{
   })
    const sendOtp = async () => {
      try {
        let info;
        if(form.value==='register') {
          info = {
            mobile: document.getElementById('mobile')?.value,
          }
        }else{
           info = {
             mobile: document.getElementById('authMobile').value,
          }
        }

        fetch(serverUrl + '/api/user/otp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(info),
        })
            .then(async (response) => {
              if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
              }
              return response.json();
            })
            .then((data) => {
              level.value = 2;
              message.value = 'کد تایید برای شماره ' + document.getElementById('messageMobile').value + ' ارسال شد. لطفا آنرا وارد کنید';
              setTimeout(()=>{
                document.getElementById('code1')?.focus();
              },300)
            })
            .catch((error) => {
              message.value = error.message;
            });
      } catch (error) {
        console.error('API call failed:', error);
      }
    }
    const verifyMobile = async () => {
      try {
        let code = document.getElementById('code1').value
            + document.getElementById('code2').value
            + document.getElementById('code3').value
            + document.getElementById('code4').value;

            let info = {
            mobile: document.getElementById('authMobile').value,
            code: code
          }

        fetch(serverUrl + '/api/user/verify', {
          method: 'POST',
          headers: {'Content-Type': 'application/json',},
          body: JSON.stringify({
            mobile: document.getElementById('authMobile').value,
            code: code
          }),
        })
            .then(async (response) => {
              if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
              } else {
                const data = await response.json();
                localStorage.setItem('user', JSON.stringify(data.user))
              }
            })
            .then((data) => {
              user.value = {}
              user.value = computed(()=>JSON.parse(localStorage.getItem('user')))
              // this.$parent.setup().user.value = computed(()=>JSON.parse(localStorage.getItem('user')))
              level.value = 3;
              message.value = 'شما با موفقیت وارد شدید.';
            })
            .catch((error) => {
              message.value = error.message;
            });

      } catch (error) {
        console.error('API call failed:', error);
      }

    }

    const reset = () => {
      level.value = 1;
      setFirstMessage();
      document.getElementById('closeAuthorizeModal').click();
      if (form.value !=='register'){
        window.location.reload();
      }
    }
    const clean = () => {
      message.value = 'کد تایید برای شماره ' + document.getElementById('messageMobile')?.value || document.getElementById('mobile')?.value + ' ارسال شد. لطفا آنرا وارد کنید'
      document.getElementById('code1').value = '';
      document.getElementById('code2').value = '';
      document.getElementById('code3').value = '';
      document.getElementById('code4').value = '';
      document.getElementById('code1').focus();
    }
    const counter = () => {

      var distance = 59;
      var x = null;
      clearInterval(x);
      time.value = 0;
      x = setInterval(function () {

        // document.getElementById("time").classList.remove('d-none');


        distance--;
        time.value = distance;
        var t = time.value < 10 ? "0" : "";
        document.getElementById("time").innerHTML = t + time.value;

        if (distance < 1) {
          clearInterval(x);
          // document.getElementById("time").classList.add('d-none');

        }
      }, 1000);

      time.value = 0;
      // if(time.value === 0){
      //   document.getElementById('resend').removeAttribute('disabled')
      // }

    }
    const autoTab = (e) => {
      if (e.target.value.length === e.target.maxLength) {
        e.target.parentElement.nextElementSibling?.firstElementChild?.focus();
      }
    }

    return {
      sendOtp,
      verifyMobile,
      store,
      serverUrl,
      isLoading,
      errors,
      form,
      user,
      mobile,
      message,
      level,
      reset,
      setFirstMessage,
      clean,
      autoTab,
      counter,
    }
  }
}
</script>
<style scoped>

</style>