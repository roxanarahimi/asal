<template>
  <div class="w-100 my-padding text-light" style="background: url('/img/loginBack.svg') top center no-repeat; background-size: cover">

    <div class="text-center">
      <img src="/img/Beelogo.png" style="width: 160px" class="my-5" alt="">
    </div>
    <h3 class="my-color my-3">ورود</h3>

    <div id="mobileForm" class="mb-3">
      <label for="mobile" class="text-light mb-2 pointer">شماره تماس</label>

      <div class="d-flex bg-light">
        <button class="btn-code" @click="getCode">دریافت کد</button>
        <input id="mobile" type="number" maxlength="11" minlength="11" class="en form-control bg-transparent border-0">
      </div>
      <div class="text-start mt-2">
        <li class="error" v-for="item in message"><span >{{ item }}</span></li>
      </div>
      <p class="my-5 text-center py-5">حساب کاربری ندارید؟
        <br>
        <router-link to="/register" class="my-color">ثبت نام</router-link> کنید</p>

    </div>


    <!--    -->
    <div id="codeForm" class="row pb-4 d-none">
      <p class="text-light mt-5">کد تایید را وارد نمایید</p>
      <div class="d-flex justify-content-center mb-3" dir="ltr">
        <div class="d-flex justify-content-center" style=" display: grid; width: 93px; height: 85px;background: url('/img/input.png') top center no-repeat; background-size: 100% ">
          <input type="text" id="code1" @input="autoTab($event)" class="w-100 align-self-center text-center bg-transparent border-0 text-light form-control" minLength="1" maxLength="1" min="0" max="9">
        </div>
        <div class="d-flex justify-content-center" style=" display: grid; width: 93px; height: 85px;background: url('/img/input.png') top center no-repeat; background-size: 100% ">
          <input type="text" id="code2" @input="autoTab($event)" class="w-100 align-self-center text-center bg-transparent border-0 text-light form-control"  minLength="1" maxLength="1" min="0" max="9">
        </div>
        <div class="d-flex justify-content-center" style=" display: grid; width: 93px; height: 85px;background: url('/img/input.png') top center no-repeat; background-size: 100% ">
          <input type="text" id="code3" @input="autoTab($event)" class="w-100 align-self-center text-center bg-transparent border-0 text-light form-control" minLength="1" maxLength="1" min="0" max="9">
        </div>
        <div class="d-flex justify-content-center" style=" display: grid; width: 93px; height: 85px;background: url('/img/input.png') top center no-repeat; background-size: 100% ">
          <input type="text" id="code4" @input="autoTab($event)" class="w-100 align-self-center text-center bg-transparent border-0 text-light form-control" minLength="1" maxLength="1" min="0" max="9">
        </div>
      </div>

      <div class="text-start my-2">
        <li class="error" v-for="item in message"><span >{{ item }}</span></li>
      </div>

      <small id="time-section" v-show="time != '00'" class="d-flex">
        <span id="resend">دریافت مجدد کد در</span>
        <span id="time" style="width: 30px !important; text-align: left" class="my-color time"></span>
        :00
      </small>
      <div v-if="time == '00'" class="d-flex justify-content-center">
        <button class="btn-orange2">دریافت مجدد کد</button>
      </div>

    </div>


   <!--    <div dir="ltr">-->
<!--      <div class="d-flex mb-2">-->
<!--        <img src="/img/phoneLogo.png" class="mx-2" width="20px" alt="">-->
<!--        <small>09300432833</small>-->
<!--      </div>-->
<!--      <div class="d-flex mb-2">-->
<!--        <img src="/img/emailLogo.png" class="mx-2" width="20px" alt="">-->
<!--        <small>copabee.example@gmail.com</small>-->
<!--      </div>-->
<!--      <div class="d-flex mb-2">-->
<!--        <img src="/img/whatsappLogo.png" class="mx-2" width="20px" alt="">-->
<!--        <small>09300432833</small>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>


<script>
import {onMounted, ref} from "vue";
import { useStore } from "vuex";

export default {
  name: "Login",
  setup() {
    onMounted(()=>{
      // localStorage.clear();
    });
    const store = useStore();
    const scope= ref('user');
    const errors= ref([]);
    const message= ref([]);
    const mobile = ref();
    const time = ref(59);
    onMounted(() => {
      document.getElementById("code1").value = '';
      document.getElementById("code2").value = '';
      document.getElementById("code3").value = '';
      document.getElementById("code4").value = '';
    });
    const getCode = () => {
      message.value = [];
      mobile.value = document.getElementById('mobile').value;
      if(mobile.value.length === 0){
        message.value.push('لطفا شماره موبایل را وارد کنید');
      }else{
        if (mobile.value.length  < 11){
          message.value.push('شماره موبایل باید 11 رقم باشد');
        }
        if(!mobile.value.startsWith('09')){
          message.value.push('شماره موبایل باید با 09 شروع شود');
        }
      }


      if(mobile.value.length === 11 && mobile.value.startsWith('09')){
        message.value = [];
        axios.post('https://panel.asal.webagent.ir/api/otp/mobile', {
          mobile: document.getElementById('mobile').value,
          scope: 'user'
        }, {progress: false})
            .then((res) => {
              if (res.status === 200) {
                document.getElementById('mobileForm').classList.add('d-none');
                document.getElementById('codeForm').classList.remove('d-none');
              }else{
                // message.value = res;
                console.log(res)
              }
            })
            .then(()=>{
              document.getElementById('resend').setAttribute('disabled', 'disabled')
              counter();
              setTimeout(()=>{
                document.getElementById('resend').removeAttribute('disabled')
              },60000)
            })
            .catch((err) => {
              console.error(err)
              message.value = err.response.data.message;
            })
      }

    }

    const editNumber = ()=>{
      location.reload();
    }
    const resend = ()=>{

      getCode();
    }
    const counter=()=> {

      var distance = 59;
      var x = null;
      clearInterval(x);
      time.value = 0;
      x = setInterval(function () {

        // document.getElementById("time").classList.remove('d-none');


        distance--;
        time.value = distance;
        var t = time.value  < 10 ? "0" : "";
        document.getElementById("time").innerHTML = t + time.value ;

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
      let code =
          document.getElementById("code1").value +
          document.getElementById("code2").value +
          document.getElementById("code3").value +
          document.getElementById("code4").value;

      if (code.length === 4) {

        axios.post('https://panel.asal.webagent.ir/api/mobile/login', {
          mobile: document.getElementById('mobile').value,
          scope: 'user',
          password: document.getElementById("code1").value + document.getElementById("code2").value + document.getElementById("code3").value + document.getElementById("code4").value
        })
            .then((res) => {
              if (res.status === 200) {
                localStorage.setItem('user',JSON.stringify(res.data.user))
                localStorage.setItem('token',JSON.stringify(res.data.access_token))
                localStorage.setItem('expire',JSON.stringify(res.data.expire));
                window.location = '/profile';
              }else{
                console.log(res)
              }
            }).catch((err) => {
          message.value = err.response.data.message;
        })

      }

      if (e.target.value.length === e.target.maxLength) {
        e.target.parentElement.nextElementSibling?.firstChild?.focus();
      }
    }

    onMounted(()=>{
      console.log(localStorage);

    })
    return {
      autoTab, getCode, scope, message, mobile, counter, time, resend, editNumber, errors, store,
    }
  }

}
</script>

<style scoped>

</style>
