<template>
  <footer class="bg-black">
    <div class="row">
      <div id="contact" class="col-lg-12 text-white py-5">


        <div class="row px-5 justify-content-around h-100">
          <div class="col-lg-5 d-lg-grid h-100">
            <div class="align-self-lg-end">
              <div id="chat" class="my-4">
                <p class="text-center">راه های ارتباطی</p>
                <div class="d-flex justify-content-between  mb-3">
                  <a target="_blank" href="https://t.me/Copabee1"> <img class="footer-icon" src="/img/icon-t.png"
                                                                        alt=""></a>
                  <a target="_blank" href="https://wa.me/989125802203"> <img class="footer-icon" src="/img/icon-w.png"
                                                                             alt=""></a>
                  <a target="_blank" href="https://eitaa.com/Copabee"> <img class="footer-icon" src="/img/icon-e.png"
                                                                            alt=""></a>
                  <a target="_blank" href="https://ble.ir/copabee"> <img class="footer-icon" src="/img/icon-b.png"
                                                                         alt=""></a>
                </div>
              </div>
              <div id="btns-1" class="row justify-content-between m-0 p-0 mb-3 ">
                <div class="col-6 px-1">
                  <a target="_blank" class="btn btn-sm btn-outline-light d-block px-2"
                     href="https://wa.me/989125802203">
                    <i class="bi bi-whatsapp  me-2 text-success"></i>ارسال پیام فوری</a></div>
                <div class="col-6 px-1"><a class="btn btn-sm btn-outline-light d-block px-2" href="tel:02128425205"><i
                    class="bi bi-telephone  me-2 text-primary"></i>021-28425205</a></div>
              </div>
              <div id="form" class="d-lg-none py-5 text-dark my-padding main-bg border-radius mb-3">

                <p class="mb-4  fw-bold">در کمتر از 24 ساعت پاسخ سریع دریافت کنید</p>
                <div class="row">

                  <div class="col-12 mb-2 px-1">
                    <label for="message">پیام یا سوال</label>
                    <textarea v-model="message" id="message"
                              class="form-control rounded-0 messageForm required"></textarea>
                  </div>
                  <div class="col-12 mb-2 px-1">
                    <label for="messageEmail">ایمیل</label>
                    <input v-model="email" id="messageEmail" type="email" class="form-control messageForm rounded-0 en">
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
                    <input v-model="mobile" id="messageMobile" type="text"
                           class="form-control rounded-0 en messageForm required">
                    <div v-if="errors?.mobile?.length" class="text-danger mt-2 fw-bold">
                      <ul>
                        <li v-for="error in errors['mobile']"><small>{{ error }}</small></li>
                      </ul>
                    </div>

                  </div>

                  <div class="text-center col-lg-12 mt-3">
                    <button v-if="user" class="btn-black-rect" @click="storeMessage">ثبت</button>
                    <button v-else class="btn-black-rect" @click="setForm('message')">ثبت</button>
                  </div>
                </div>
              </div>

              <div id="info" class="px-2 py-3">
                <p><i class="bi bi-envelope-fill me-2"></i>info@asallaziz.com</p>
                <p><i class="bi bi-pin-map-fill me-2"></i>ایران، تهران، گیشا، خیابان هشتم، پلاک 58</p>
                <p><i class="bi bi-clock-fill me-2"></i>شنبه تا پنج شنبه از ساعت 9 الی 18</p>
              </div>
              <div id="btns-2" class="row justify-content-between p-0 m-0 mb-3 ">
                <div class="col-6 mb-2 px-1"><a class="btn btn-sm btn-outline-light d-block px-1"
                                                href="tel:09103170950">
                  <span class="text-nowrap">ارتباط با واحد پشتیبانی</span>
                  09103170950</a></div>
                <div class="col-6 mb-2 px-1"><a class="btn btn-sm btn-outline-light d-block px-1"
                                                href="tel:09125802203">
                  <span class="text-nowrap">ارتباط با واحد فروش</span>
                  09125802203</a></div>
                <div class="col-12 mb-2 px-1"><a class="btn btn-sm btn-outline-light d-block px-1"
                                                 href="tel:09103170951">
                  <span class="text-nowrap">سوالات تخصصی زنبورداری</span>
                  <br>
                  09103170951
                </a></div>
              </div>
              <div id="social" class="my-4">
                <p class="text-center">ما را در شبکه های اجتماعی دنبال کنید</p>
                <div class="d-flex justify-content-between  mb-4">
                  <a target="_blank" href="https://www.instagram.com/copabeefeed"> <img class="footer-icon"
                                                                                        src="/img/icon-i.png"
                                                                                        alt=""></a>
                  <a target="_blank" href="https://www.youtube.com/@copabee"> <img class="footer-icon"
                                                                                   src="/img/icon-y.png" alt=""></a>
                  <a target="_blank" href="https://www.aparat.com/copabee.com"> <img class="footer-icon"
                                                                                     src="/img/icon-a.png" alt=""></a>
                  <a target="_blank" href="https://rubika.ir/copabee"> <img class="footer-icon" src="/img/icon-r.png"
                                                                            alt=""></a>
                </div>
              </div>
            </div>
          </div>
          <div class="d-none d-lg-grid col-lg-5 pb-3">
            <div id="form" class="align-self-lg-end py-5 text-dark my-padding main-bg border-radius mb-3">

              <p class="mb-4  fw-bold">در کمتر از 24 ساعت پاسخ سریع دریافت کنید</p>
              <p class="mb-4 fw-bold text-success d-none" id="msgSuccess">پیام شما با موفقیت ثبت شد. کارشناسان ما در اسرع وقت با شما ارتباط میگیرند.</p>
              <p class="mb-4 fw-bold text-success d-none" id="msgFail">در ارسال پیام خطایی رخ داد. لطفا دوباره تلاش کنید.</p>
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
                  <button v-if="user" class="btn-black-rect" @click="storeMessage">ثبت</button>
                  <button v-if="!user" class="btn-black-rect" @click="setForm('message')">ثبت</button>
                </div>
              </div>
            </div>
          </div>
          <div id="logos" class="d-grid px-2 pb-4 col-lg-1 d-none d-lg-flex">
            <div class="d-flex justify-content-between d-lg-block align-self-lg-end">
              <div class="d-grid img-footer mb-lg-3">
                <a target="_blank" href="https://amadehlaziz.com">
                  <img src="/img/f1.png" class="align-self-center w-100" alt="">
                </a>
              </div>
              <div class="d-grid img-footer mb-lg-3">
                <a target="_blank" href="https://www.actotechaccelerator.com/">
                  <img src="/img/f2.png" class="align-self-center w-100" alt="">
                </a>
              </div>
              <div class="d-grid img-footer mb-lg-3"><a target="_blank" href="https://mpdri.sbu.ac.ir/">
                <img src="/img/f3.png" class="align-self-center w-100" alt="">
              </a>
              </div>
              <div class="d-grid img-footer ">
                <a target="_blank" href="http://iranianbee.ir/">
                  <img src="/img/f4.png" class="align-self-center w-100" alt="">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="logos" class="d-grid px-2 pb-4 d-lg-none">
        <div class="d-flex justify-content-between d-lg-block align-self-lg-end">
          <div class="d-grid img-footer mb-lg-3">
            <a target="_blank" href="https://amadehlaziz.com">
              <img src="/img/f1.png" class="align-self-center w-100" alt="">
            </a>
          </div>
          <div class="d-grid img-footer mb-lg-3">
            <a target="_blank" href="https://www.actotechaccelerator.com/">
              <img src="/img/f2.png" class="align-self-center w-100" alt="">
            </a>
          </div>
          <div class="d-grid img-footer mb-lg-3"><a target="_blank" href="https://mpdri.sbu.ac.ir/">
            <img src="/img/f3.png" class="align-self-center w-100" alt="">
          </a>
          </div>
          <div class="d-grid img-footer ">
            <a target="_blank" href="http://iranianbee.ir/">
              <img src="/img/f4.png" class="align-self-center w-100" alt="">
            </a>
          </div>
        </div>
      </div>
    </div>
    <button data-bs-toggle="modal" class="d-none" id="modal-btn-h" data-bs-target="#AuthorizeModal"></button>
  </footer>
</template>

<script>
import {useStore} from "vuex";
import {computed, onMounted, ref} from "vue";
import Loader from "@/components/Loader2.vue"


export default {
  name: "Footer",
  components: {Loader},
  setup() {
    const store = useStore();
    const serverUrl = store.state.serverUrl;
    const isLoading = ref(false);
    const errors = ref([]);
    const user = computed(() => JSON.parse(localStorage.getItem('user'))) || null;
    const mobile = ref();
    const message = ref();
    const name = ref();
    const email = ref();
    const city_id = ref();
    const emptyFieldsCount = ref(null);


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
    const setForm = async (form) => {
      localStorage.setItem('form', form);
      validate();
    }
    const storeMessage = async () => {
      try {
        document.getElementById('msgFail').classList.add('d-none');
        document.getElementById('msgSuccess').classList.add('d-none');


        fetch(serverUrl + '/api/message/store', {
          method: 'POST',
          headers: {'Content-Type': 'application/json',},
          body: JSON.stringify({
            user_id: JSON.parse(localStorage.getItem('user'))?.id,
            message: document.getElementById('message').value
          }),
        })
            .then(async (response) => {
              if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
              } else {
                const data = await response.json();
                document.getElementById('msgSuccess').classList.remove('d-none');
              }
            })
            .catch((error) => {
              message.value = error.message;
            });
      } catch (error) {
        console.error('API call failed:', error);
        document.getElementById('msgFail').classList.remove('d-none');

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
      emptyFieldsCount
    }
  }
}
</script>

<style scoped>

</style>