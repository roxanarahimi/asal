<template>
  <div class="home">
    <!--    <img src="/img/copabeeExport.png"  width="100%" height="auto" alt="">-->


    <div class="bg-black text-white pt-5">
      <main-carousel  class="mb-3 w-100"/>
      <div class="my-padding row justify-content-around">
        <div class="col-lg-4 d-lg-grid">
          <div class="align-self-lg-center">
            <h1 class="mt-2 mb-0  main_title my-color"><img src="/img/Beelogo.png" class="mb-0" alt=""></h1>
            <h1 class=" main_title my-color mb-3">آپی پاستای ایرانی</h1>
            <div class="pb-5" style="background: url('/img/s1bg.png') center center no-repeat; background-size: cover;">
              <p class="col-8 font-size-15">
                کوپابی با هدف تولید تغذیه کامل زنبور عسل، مشابه نمونه‌ وارداتی تأسیس شد. ما با تکیه بر دانش فنی گروه آماده
                لذیذ و پشتوانه علمی پژوهشکده گیاهان و مواد اولیه دارویی دانشگاه شهید بهشتی، تولید نیمه‌صنعتی خود را آغاز
                کردیم.
              </p>
              <div class="d-flex justify-content-end ">
                <router-link to="/about" class="btn-orange" style="padding-top: 12px">بیشتر بدانید</router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="hero mb-4">
            <img src="/img/header.jpg" class="w-100 opacity-0" alt="">
          </div>
        </div>
      </div>
      </div>

    <div class="row justify-content-lg-center" style="border-radius: 250px 250px 0 0; padding-top: 100px; background-color: #D9D6D2">
      <div class="col-lg-5 product-section text-center pt-3 mb-lg-5" style="">
        <img src="/img/p22.png" width="45%" alt="">
      </div>
      <div class="col-lg-4 p-4 px-5 d-lg-grid">
        <div class="align-self-lg-center" style="background: url('/img/frame.png') center center no-repeat; background-size: 100%">
          <div class="d-flex p-4 p-lg-5 font-size-12">
            <div>
              <img class="mt-3" src="/img/dot.png" width="15px" style="padding: 2px" alt="">
            </div>
            <p class="mt-3">
              کوپابی یک خوراک نیمه‌جامد آماده مصرف برای زنبور عسل است که با هدف تغذیه کمکی کلنی‌ها در فصل‌هایی با کمبود
              منابع طبیعی تولید شده است.
            </p>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-center">
        <router-link to="/product" class="btn-orange mb-5 "  style="padding-top: 12px" >بیشتر بدانید</router-link>
      </div>
    </div>

    <div class="text-center ">
      <div class="p-3 row justify-content-lg-center" style="background: url('/img/bg2.png') center center no-repeat; background-size: cover; ">
       <div class="col-lg-6" style="backdrop-filter: blur(15px);">
         <p class="p-4 px-5 text-white rounded font-size-14">
           یکی از اصلی ترین تفاوت های کوپابی با شربت های دست ساز زنبور داران ،میتوان به مواردی همچون کنترل رطوبت، دما و
           مقدار شکر و نیز غلظت قندها ،محصولی عاری از سم های مضر ،آلودگی های شیمیایی،میکروبی و فیزیکی مختلف تولید اشاره
           کرد.
         </p>
       </div>
      </div>
    </div>

    <div>
      <div class="bg-black d-none ">
        <h1 class="my-title my-color my-3 text-center fw-bold my-font">تازه های زنبور داری</h1>
        <contents-carousel category="news"/><!-- or  events -->
        <h1 class="my-title my-color my-3 text-center fw-bold my-font">اخبار و رویدادها</h1>
        <contents-carousel category="events"/><!-- or  events -->
      </div>
    </div>




    <div class="bg-black row justify-content-center">
      <contact-form class="col-lg-12"/>
    </div>

    <div class="bg-black row justify-content-lg-center text-white py-5 px-4">

      <div class=" col-lg-7 my-lg-5">
        <h2 class="mb-4 my-color my-font text-lg-center">سوالات متداول شما</h2>
        <div class="mb-3 text-white font-size-12">

          <div class="accordion bg-transparent" id="accordionExample">
            <div class="accordion-item bg-transparent my-border text-white rounded-0">
              <h2 class="accordion-header ">
                <button class="accordion-button  bg-transparent text-white collapsed font-size-12"
                        type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                        aria-controls="collapseOne">
                  برخی از زنبورداران می‌گویند محصول شُل است؛ آیا این ایراد محسوب می‌شود؟
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p>
                    خیر. نیمه‌جامد بودن محصول یک مزیت فنی است، نه ایراد. این ویژگی باعث می‌شود...
                    <router-link to="/faq" class="text-primary">ادامه</router-link>

                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item bg-transparent my-border text-white rounded-0">
              <h2 class="accordion-header">
                <button  class="accordion-button bg-transparent font-size-12 text-white collapsed"
                        type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                        aria-controls="collapseTwo">
                  <!--                چرا کوپابی را جیگزین شهد شیرین کنیم؟-->
                  تفاوت خوراک زنبور کوپابی با سایر برندهای بازار چیست؟
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p >
                  خوراک زنبور کوپابی برخلاف بسیاری از محصولات موجود در بازار که به‌صورت فوندانت (خمیر شکر) عرضه می‌شوند،
                    به شکل نیمه‌جامد (Semi-solid) تولید شده است. این ویژگی چند مزیت کلیدی را به همراه دارد...
                    <router-link to="/faq" class="text-primary">ادامه</router-link>

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>

    <div class="text-center">
      <div class="row justify-content-center p-4 py-5  home-colabs-wrapper" >
        <div class="row justify-content-center py-5 mx-2 rounded col-lg-6 px-lg-5 home-colabs-inner">
          <h3 class="mb-5 my-font fw-bold ">شرکای راهبردی کوپابی</h3>
          <div class="col-lg-10">
            <p class="home-colabs-p ">
              در مسیر توسعه تغذیه تخصصی زنبورعسل، کوپابی با همکاری مجموعه‌ای از معتبرترین نهادهای علمی، پژوهشی، صنعتی و
              زنبورداری کشور، از جمله پژوهشکده گیاهان دارویی دانشگاه شهید بهشتی، شتاب‌دهنده دارویی و غذایی اکتوتک، نهاد
              رسمی زنبورداری کشور (اتحادیه سراسری زنبورداران ایران) و گروه صنایع غذایی آماده لذیذ، زنجیره‌ای مطمئن از
              دانش، تولید، توزیع و تجربه را شکل داده است.
            </p>
          </div>
          <div class="text-center  mt-5">
            <router-link to="/participants" class="btn-black my-font fw-bold" style="padding-top: 14px">شرکای ما
            </router-link>

          </div>
        </div>


      </div>


    </div>


  </div>
</template>

<script>
// @ is an alias to /src
import MainCarousel from '@/components/MainCarousel'
import ContentsCarousel from "@/components/ContentsCarousel";
import ContactForm from "@/components/ContactForm";
import { useHead } from '@vueuse/head'


export default {
  components: {ContactForm, MainCarousel,ContentsCarousel},
  name: 'HomeViewEn',


}
</script>
<style>
.accordion-header{
  line-height: 20px;
}
</style>