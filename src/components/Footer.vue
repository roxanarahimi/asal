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
              <message-form v-if="innerWidth<992"/>
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
          <div v-if="innerWidth>= 992" class="col-lg-5 pb-3">
            <message-form />
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
  </footer>
</template>

<script>

import Loader from "@/components/Loader2.vue"
import MessageForm from "@/components/MessageForm.vue"
import {onMounted, onUnmounted, ref, watch} from "vue";


export default {
  name: "Footer",
  components: {Loader,MessageForm},
  setup() {
    const innerWidth = ref(window.innerWidth)

    function updateWidth() {
      innerWidth.value = window.innerWidth
    }

    onMounted(() => window.addEventListener('resize', updateWidth))
    onUnmounted(() => window.removeEventListener('resize', updateWidth))

    // watch(innerWidth, (newWidth, oldWidth)=>{console.log('...')});
    return {
      innerWidth,
    }
  }
}
</script>

<style scoped>

</style>