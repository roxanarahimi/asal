<template>
  <div class="home ">
    <div class="row justify-content-lg-center p-0 m-0">
      <div class="col-lg-10 px-0 bg-black text-white min-vh-100 align-self-lg-center">
        <div class="my-padding h-100">
          <div class="row p-0 m-0 h-100">
            <div class="col-lg-6">
              <h1 class=" mt-5 mb-2  main_title my-color mb-0">
                <img src="/img/Beelogo.png" class="mb-0" alt="">
                ، آپی</h1>
              <h1 class=" main_title my-color mb-3"> پاستای ایرانی</h1>

              <div class="pb-5"
                   style="background: url('/img/s1bg.png') center center no-repeat; background-size: cover;">
                <p class="col-8  main_p">
                  عسل لذیذ با هدف تولید تغذیه کامل زنبور عسل مشابه نمونه محصول اسپانیایی و با چشم انداز ارتقای کیفیت
                  محصولات
                  صنعت زنبورداری کشور ، همکاری خود را با تکیه بر تحقیقات علمی دانشگاه شهید بهشتی آغار نمود.
                </p>
              </div>


              <div class="d-flex justify-content-end justify-content-lg-start ">
                <router-link to="/about" class="btn-orange" style="padding-top: 12px">بیشتر بدانید</router-link>
              </div>
            </div>
            <div class="col-lg-6 px-0 d-grid">
              <div class="main-slider align-self-end mb-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="row" style="border-radius: 250px 250px 0 0; padding-top: 100px; background-color: #D9D6D2">
      <div class="row justify-content-md-center">
        <div class="row col-lg-10">
          <div class="col-lg-6 product-section text-center pt-3 pb-lg-5" style="">
            <img src="/img/p2.png" class="p2 mx-auto d-lg-block" width="180px" alt="">
            <img src="/img/p4.png" class="p4 mx-auto d-lg-block mb-lg-5" width="180px" alt="">
          </div>
          <div class="col-lg-5 p-4 px-5">
            <div class="" style="background: url('/img/frame.png') center center no-repeat; background-size: 100%">
              <div class="d-flex p-4">
                <div>
                  <img class="mt-3" src="/img/dot.png" width="15px" style="padding: 2px" alt="">
                </div>
                <p class="mt-3" style="font-size: 12px">
                  ما در کوپابی با در نظر گرفتن ژنوتیپ،آناتومی و مقدار مورد نیازبرای تیپیک غالب زنبورهای مناطق مختلف کشور
                  و
                  دنیا به فرمولاسیون خاص و کاربردی رسیده ایم تا بهترین و با کیفیت ترین غذای زنبورعسل را ارائه کنیم.
                </p>
              </div>
              <div class="d-flex p-4">
                <div>
                  <img class="mt-3" src="/img/dot.png" width="15px" style="padding: 2px" alt="">
                </div>
                <p class="mt-3" style="font-size: 12px">
                  یکی از اصلی ترین تفاوت های کوپابی با شربت های دست ساز زنبور
                  داران ،میتوان به مواردی همچون کنترل رطوبت، دما و مقدار شکر و نیز غلظت قندها ،محصولی عاری از سم های مضر
                  ،آلودگی های شیمیایی،میکروبی و فیزیکی مختلف تولید اشاره کرد.
                </p>
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <router-link to="/product" class="btn-orange mb-5" style="padding-top: 12px">بیشتر بدانید</router-link>
            </div>
          </div>

        </div>
      </div>


    </div>
    <div class="text-center">
      <div class="row justify-content-md-center p-3" style="background: url('/img/bg2.png') center center no-repeat; background-size: cover; ">
        <p class="col-lg-6 p-4 px-5 text-white rounded ttxxtt" style="backdrop-filter: blur(15px);">
          یکی از اصلی ترین تفاوت های کوپابی با شربت های دست ساز زنبور داران ،میتوان به مواردی همچون کنترل رطوبت، دما و
          مقدار شکر و نیز غلظت قندها ،محصولی عاری از سم های مضر ،آلودگی های شیمیایی،میکروبی و فیزیکی مختلف تولید اشاره
          کرد.
        </p>
      </div>
    </div>


    <div class="bg-black text-white pt-5 my-padding">

      <h1 class="mb-4 my-font my-color text-lg-center">نمایندگی های فعال </h1>


      <div class=" w-100">
        <iran-map/>
      </div>


    </div>

    <div class="bg-black ">
      <contact-form/>
    </div>

    <div class="bg-black text-white py-5 px-4 px-lg-5">

      <h2 class="mb-4 my-color my-font">سوالات متداول شما</h2>
      <div style="font-size: 12px !important; color: white" class="mb-3">

        <div class="row justify-content-lg-center">
        <div class="col-lg-10">
          <div class="accordion bg-transparent" id="accFaq">
            <div class="accordion-item bg-transparent my-border text-white rounded-0">
              <h2 class="accordion-header ">
                <button style="font-size: 12px !important;" class="accordion-button  bg-transparent text-white collapsed"
                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true"
                        aria-controls="collapse1">
                  خمیر شیرین چیست؟
                </button>
              </h2>
              <div id="collapse1" class="accordion-collapse collapse " data-bs-parent="#accFaq">
                <div class="accordion-body">
                  <p>
                    زنبورهای عسل از طریق گرده افشانی، نقش مهمی در تامین منابع غذایی برای انسان ها، حیوانات و همچنین
                    گوناگونی زیستی در اکوسیستم های طبیعی و کشاورزی را برعهده دارند...
                    <router-link to="/faq" class="text-primary">ادامه</router-link>
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item bg-transparent my-border text-white rounded-0">
              <h2 class="accordion-header">
                <button style="font-size: 12px !important;" class="accordion-button bg-transparent text-white collapsed"
                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false"
                        aria-controls="collapse2">
                  چرا کوپابی را جیگزین شهد شیرین کنیم؟
                </button>
              </h2>
              <div id="collapse2" class="accordion-collapse collapse" data-bs-parent="#accFaq">
                <div class="accordion-body">
                  <p>
                    خمیر شیرین کوپابی نسبت به شربت های دست ساز زنبورداران مزیت های زیر را دارا میباشد: خمیرشیرین در روند
                    تولید با کنترل رطوبت،دما ،اندازه ذره ای بلورها و مقدار شکر...
                    <router-link to="/faq" class="text-primary">ادامه</router-link>

                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
        </div>
      </div>


    </div>

    <div class="text-center">
      <div class="p-4 py-5" style="background: url('/img/bg3.png') center center no-repeat; background-size: cover; ">
        <div class="py-5 mx-2 rounded" style="backdrop-filter: blur(15px); font-size: 14px;">
          <h3 class="mb-5 my-font fw-bold">شرکای عسل لذیذ</h3>
          <p style="font-weight: bolder ; font-size:12px; padding-right: 90px; padding-left: 90px">
            شرکت عسل لذیذ با تکیه به دانش فنی ،عملیاتی گروه معظم آماده لذیذ و نیز دانش تحقیقاتی ،علمی پژوهشکده گیاهان و
            مواد اولیه دارویی دانشگاه شهید بهشتی کار تولید نیمه صنعتی خود را آغاز کرد.
            در ادامه جهت دریافت بازخوردهای صحیح از محصولات تحقیقاتی ،بر آن شدیم تا با اتحادیه زنبورداران ایران زمین
            تفاهم نامه همکاری امضا و سپس زنبورستان علمی تحقیقاتی عسل لذیذ در محل دانشگاه شهید بهشتی احداث گردید تا
            بتوانیم پس از آن تمامی تولیدات نیمه صنعتی خود را با کمک هر دو بخش به بهترین نحو ممکن به دست زنبورداران
            برسانیم
          </p>
          <div class="text-center  mt-5">
            <router-link to="/collaboration" class="btn-black my-font fw-bold" style="padding-top: 14px">شرکای ما
            </router-link>

          </div>
        </div>


      </div>


    </div>


  </div>
</template>

<script>
// @ is an alias to /src
import iranMap from '../components/Map'
import ContactForm from "@/components/ContactForm";

export default {
  components: {ContactForm, iranMap},
  name: 'HomeView',
}
</script>
