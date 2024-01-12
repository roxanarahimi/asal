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
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع
          با هدف بهبود ابزارهای کاربردی می باشد.
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
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها
                  و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
                  کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item bg-transparent my-border text-white rounded-0">
            <h2 class="accordion-header">
              <button style="font-size: 12px !important;" class="accordion-button bg-transparent text-white collapsed"
                      type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                      aria-controls="collapseTwo">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها
                  و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
                  کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item bg-transparent my-border text-white rounded-0">
            <h2 class="accordion-header">
              <button style="font-size: 12px !important;" class="accordion-button bg-transparent text-white collapsed"
                      type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                      aria-controls="collapseThree">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها
                  و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
                  کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
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
          <h3 class="mb-5 my-font">شرکای عسل لذیذ</h3>
          <p style="font-weight: bolder ; font-size:12px; padding-right: 90px; padding-left: 90px">
            شرکت عسل لذیذ با تکیه به دانش فنی ،عملیاتی گروه معظم آماده لذیذ و نیز دانش تحقیقاتی ،علمی پژوهشکده گیاهان و
            مواد اولیه دارویی دانشگاه شهید بهشتی کار تولید نیمه صنعتی خود را آغاز کرد.
            در ادامه جهت دریافت بازخوردهای صحیح از محصولات تحقیقاتی ،بر آن شدیم تا با اتحادیه زنبورداران ایران زمین
            تفاهم نامه همکاری امضا و سپس زنبورستان علمی تحقیقاتی عسل لذیذ در محل دانشگاه شهید بهشتی احداث گردید تا
            بتوانیم پس از آن تمامی تولیدات نیمه صنعتی خود را با کمک هر دو بخش به بهترین نحو ممکن به دست زنبورداران
            برسانیم
          </p>
          <div class="text-center  mt-5">
            <router-link to="/collaboration" class="btn-black my-font " style="padding-top: 12px">شرکای ما</router-link>

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
