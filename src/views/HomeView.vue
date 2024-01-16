<template>
  <div class="home">
    <div class="bg-black text-white">
      <div class="my-padding">
        <h1 class="w-75 my-4 main_title my-color">
          به عسل لذیذ
          <br>
          خوش آمدید
        </h1>

        <p class="col-8 font-size-12">
          عسل لذیذ با هدف تولید خوراک کامل زنبور عسل و با چشم انداز ارتقای کیفیت محصولات صنعت زنبورداری کشور همکاری خود
          را با شتابدهنده اکتوتک و طرح تحقیقاتی ،صنعتی تولید غذای کامل زنبور عسل ،مشابه نمونه محصول وارداتی در دستور کار
          خود قرار داد.
        </p>


        <div class="d-flex justify-content-end mb-3">
          <router-link to="/about" class="btn-orange" style="padding-top: 12px">بیشتر بدانید</router-link>
        </div>

        <div class="main-slider"></div>
      </div>
    </div>

    <div class="bg-light " style="border-radius: 250px 250px 0 0; padding-top: 100px">
      <div class="product-section text-center pt-3" style="">

        <img src="/img/p2.png" width="150px" alt="">
      </div>
      <div class="p-4 px-5">
        <div class="" style="background: url('/img/frame.png') center center no-repeat; background-size: 100%">
          <div class="d-flex p-4">


            <div>
              <img class="mt-3 p-2" src="/img/dot.png" alt="">
            </div>
            <p class="mt-3" style="font-size: 12px">
              ما در کوپابی با در نظر گرفتن ژنوتیپ،آناتومی و مقدار مورد نیازبرای تیپیک غالب زنبورهای مناطق مختلف کشور و
              دنیا به فرمولاسیون خاص و کاربردی رسیده ایم تا بهترین و با کیفیت ترین غذای زنبورعسل را ارائه کنیم.
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

    <div class="bg-black text-white pt-5 my-padding">

      <h1 class="mb-4 my-font my-color">نمایندگی های فعال </h1>


      <div class=" w-100">
        <!--        <img src="/img/iran.png" class="img-fluid w-100" style="" alt="">-->
        <iran-map/>
      </div>


    </div>

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
                خمیر شیرین چیست؟
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>
                  زنبورهای عسل از طریق گرده افشانی، نقش مهمی در تامین منابع غذایی برای انسان ها، حیوانات و همچنین
                  گوناگونی زیستی در اکوسیستم های طبیعی و کشاورزی را برعهده دارند. همچنین عسل، ژل رویال، گرده گل، موم
                  زنبور عسل، بره موم و زهر زنبور عسل از فرآورده های ارزشمند زنبور عسل بشمار می روند.
                  این حشره مانند سایر میکروارگانیسم ها نیازمند آب و منابع غذایی بوده و شهد و گرده گل از جمله منابع غذایی
                  مورد علاقه زنبور عسل هستند. شهد گل ها و عسل ذخیره شده در کندو، کربوهیدرات ها را برای این حشره فراهم می
                  کنند، در حالی که که گرده گل، پروتئین، لیپید، ویتامین ها و اجزای معدنی رژیم غذایی آن ها چرا کوپابی
                  جایگزین شربت شهد کنیم؟ تامین می کند. زنبورهای عسل انرژی لازم جهت پرواز را از شکستن کربوهیدرات ها بدست
                  می آورند و باید همیشه مقداری کربوهیدرات های ذخیره شده داشته باشند.
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item bg-transparent my-border text-white rounded-0">
            <h2 class="accordion-header">
              <button style="font-size: 12px !important;" class="accordion-button bg-transparent text-white collapsed"
                      type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                      aria-controls="collapseTwo">
                چرا کوپابی را جیگزین شهد شیرین کنیم؟
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>
                  خمیر شیرین کوپابی نسبت به شربت های دست ساز زنبورداران مزیت های زیر را دارا میباشد: خمیرشیرین در روند
                  تولید با کنترل رطوبت،دما ،اندازه ذره ای بلورها و مقدار شکر و نیز غلظت قندها باعث عاری شدن محصول از
                  هرگونه تولید سم های مضر ،آلودگی میکروبی و مقرون به صرفه بودن برای زنبورداران و نیز در نهایت کیفیت
                  نهایی عسل میگردد. ما در کوپابی با در نظر گرفتن ژنوتیپ،آناتومی و مقدار مورد نیازبرای تیپیک غالب
                  زنبورهای مناطق مختلف کشور و دنیا به فرمولاسیون خاص و کاربردی رسیده ایم تا بهترین و با کیفیت ترین غذای
                  زنبورعسل را ارائه کنیم.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>

    <div class="text-center">
      <div class="p-4 py-5" style="background: url('/img/bg3.png') center center no-repeat; background-size: cover; ">
        <div class="py-5 rounded" style="backdrop-filter: blur(15px); font-size: 14px;">
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
            <router-link to="/collaboration" class="btn-black my-font fw-bold" style="padding-top: 12px">شرکای ما</router-link>

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
