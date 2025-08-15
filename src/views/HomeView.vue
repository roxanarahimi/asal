<template>
  <div class="home">
    <!--    <img src="/img/copabeeExport.png"  width="100%" height="auto" alt="">-->

    <div class="bg-black text-white pt-5">
      <div class="main-banner mt-5 mb-4"></div>
      <div class="main-banner2 mb-4"></div>
      <div class="my-padding">
        <h1 class="mt-5 mb-2  main_title my-color">
          <img src="/img/Beelogo.png" class="mb-0" alt="">
          ، آپی</h1>
        <h1 class=" main_title my-color mb-3">پاســتای ایرانی</h1>

        <div class="pb-5" style="background: url('/img/s1bg.png') center center no-repeat; background-size: cover;">
          <p class="col-8 " style="font-size: 15px">
            کوپابی با هدف تولید تغذیه کامل زنبور عسل، مشابه نمونه‌ وارداتی تأسیس شد. ما با تکیه بر دانش فنی گروه آماده
            لذیذ و پشتوانه علمی پژوهشکده گیاهان و مواد اولیه دارویی دانشگاه شهید بهشتی، تولید نیمه‌صنعتی خود را آغاز
            کردیم.
          </p>
        </div>


        <div class="d-flex justify-content-end ">
          <router-link to="/about" class="btn-orange" style="padding-top: 12px">بیشتر بدانید</router-link>
        </div>

        <div class="main-slider mb-4"></div>
      </div>
    </div>

    <div class=" " style="border-radius: 250px 250px 0 0; padding-top: 100px; background-color: #D9D6D2">
      <div class="product-section text-center pt-3" style="">

        <!--        <img src="/img/p2.png" width="180px" alt="">-->
        <img src="/img/p22.png" width="180px" alt="">
      </div>
      <div class="p-4 px-5">
        <div class="" style="background: url('/img/frame.png') center center no-repeat; background-size: 100%">
          <div class="d-flex p-4">


            <div>
              <img class="mt-3" src="/img/dot.png" width="15px" style="padding: 2px" alt="">
            </div>
            <p class="mt-3" style="font-size: 12px">
              کوپابی یک خوراک نیمه‌جامد آماده مصرف برای زنبور عسل است که با هدف تغذیه کمکی کلنی‌ها در فصل‌هایی با کمبود
              منابع طبیعی تولید شده است.
            </p>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-center">
        <router-link to="/product" class="btn-orange mb-5" style="padding-top: 12px">بیشتر بدانید</router-link>
      </div>
    </div>

    <div class="text-center">
      <div class="p-3" style="background: url('/img/bg2.png') center center no-repeat; background-size: cover; ">
        <p class="p-4 px-5 text-white rounded" style="backdrop-filter: blur(15px); font-size: 14px">
          یکی از اصلی ترین تفاوت های کوپابی با شربت های دست ساز زنبور داران ،میتوان به مواردی همچون کنترل رطوبت، دما و
          مقدار شکر و نیز غلظت قندها ،محصولی عاری از سم های مضر ،آلودگی های شیمیایی،میکروبی و فیزیکی مختلف تولید اشاره
          کرد.
        </p>
      </div>
    </div>

    <!--    <div class="bg-black text-white pt-5 my-padding">-->

    <!--      <h1 class="mb-4 my-font my-color">نمایندگی های فعال </h1>-->


    <!--      <div class=" w-100">-->
    <!--        &lt;!&ndash;        <img src="/img/iran.png" class="img-fluid w-100" style="" alt="">&ndash;&gt;-->
    <!--        <iran-map/>-->
    <!--      </div>-->


    <!--    </div>-->

    <div class="bg-black ">
      <contact-form/>
    </div>

    <div class="bg-black text-white py-5 px-4">

      <h2 class="mb-4 my-color my-font">سوالات متداول شما</h2>
      <div style="font-size: 12px !important; color: white" class="mb-3">

        <div class="accordion bg-transparent" id="accordionExample">
          <div class="accordion-item bg-transparent my-border text-white rounded-0">
            <h2 class="accordion-header ">
              <button style="font-size: 12px !important;" class="accordion-button  bg-transparent text-white collapsed"
                      type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                      aria-controls="collapseOne">
                <!--                خمیر شیرین چیست؟-->
                برخی از زنبورداران می‌گویند محصول شُل است؛ آیا این ایراد محسوب می‌شود؟
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>
                  <!--                  زنبورهای عسل از طریق گرده افشانی، نقش مهمی در تامین منابع غذایی برای انسان ها، حیوانات و همچنین-->
                  <!--                  گوناگونی زیستی در اکوسیستم های طبیعی و کشاورزی را برعهده دارند...-->
                  خیر. نیمه‌جامد بودن محصول یک مزیت فنی است، نه ایراد. این ویژگی باعث می‌شود...
                  <router-link to="/faq" class="text-primary">ادامه</router-link>

                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item bg-transparent my-border text-white rounded-0">
            <h2 class="accordion-header">
              <button style="font-size: 12px !important;" class="accordion-button bg-transparent text-white collapsed"
                      type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                      aria-controls="collapseTwo">
                <!--                چرا کوپابی را جیگزین شهد شیرین کنیم؟-->
                تفاوت خوراک زنبور کوپابی با سایر برندهای بازار چیست؟
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>
                  <!--                  خمیر شیرین کوپابی نسبت به شربت های دست ساز زنبورداران مزیت های زیر را دارا میباشد: خمیرشیرین در روند-->
                  <!--                  تولید با کنترل رطوبت،دما ،اندازه ذره ای بلورها و مقدار شکر...-->
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

    <div class="text-center">
      <div class="p-4 py-5" style="background: url('/img/bg3.png') center center no-repeat; background-size: cover; ">
        <div class="py-5 mx-2 rounded" style="backdrop-filter: blur(15px); font-size: 14px;">
          <h3 class="mb-5 my-font fw-bold">شرکای راهبردی کوپابی</h3>
          <p style="font-weight: bold ; font-size:13px; padding-right: 50px; padding-left: 50px; text-align: justify;">
            در مسیر توسعه تغذیه تخصصی زنبورعسل، کوپابی با همکاری مجموعه‌ای از معتبرترین نهادهای علمی، پژوهشی، صنعتی و
            زنبورداری کشور، از جمله پژوهشکده گیاهان دارویی دانشگاه شهید بهشتی، شتاب‌دهنده دارویی و غذایی اکتوتک، نهاد
            رسمی زنبورداری کشور (اتحادیه سراسری زنبورداران ایران) و گروه صنایع غذایی آماده لذیذ، زنجیره‌ای مطمئن از
            دانش، تولید، توزیع و تجربه را شکل داده است.
          </p>
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
import iranMap from '../components/Map'
import ContactForm from "@/components/ContactForm";
import {ref} from "vue";

export default {
  components: {ContactForm, iranMap},
  name: 'HomeView',

}
</script>
<style>
.accordion-header{
  line-height: 20px;
}
</style>