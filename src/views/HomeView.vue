<template>
  <div class="home">
    <div class="bg-black text-white">

      <the-menu />

      <div class="px-3">
        <h1 class="w-75 my-4 main_title" style="color: #F7941D">
          به عسل لذیذ
          <br>
          خوش آمدید
        </h1>

        <p class="col-8" style="font-size: 12px">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع
          با هدف بهبود ابزارهای کاربردی می باشد.
        </p>


        <div class="d-flex justify-content-end">
          <button class="btn-orange">بیشتر بدانید</button>
        </div>

        <div style=" min-height: 280px; background-image: url('/img/bee.png'); border-radius: 90px; box-shadow: 0 0 30px 30px black inset;">

        </div>
      </div>
    </div>

    <div class="bg-light ">
      <div class=" " style="background: url('/img/flybee.png') center center no-repeat; background-size: 100%">

        <img src="/img/product.png" alt="">
      </div>


      <div class="p-4">
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
        <button class="btn-orange mb-5">بیشتر بدانید</button>
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

    <div class="bg-black text-white pt-5 px-3">

      <h1 class="mb-4" style="color: #F7941D">نمایندگی های فعال </h1>

      <label for="province">استان</label>
      <select id="province" class="form-select rounded-0" style="height: 50px; width: 150px">
        <option>تهران</option>

      </select>

      <div class="text-center w-100">
        <img src="/img/iran.png" class="img-fluid w-100" style="" alt="">
      </div>

      <div>
        <div class="d-flex">


          <div>
            <img class="mt-3 p-1" src="/img/dot.png" alt="">
          </div>
          <p class="mt-3" style="font-size: 12px">
            ایران، تهران، گیشا، خیابان هشتم، پلاک 58
          </p>
        </div>
      </div>
    </div>

    <div class="bg-black ">

      <div class="py-5 px-3" style="background-color: #F7941D; border-radius: 24px">

        <h1 class="mb-4">با ما در ارتباط باشید</h1>


        <p>ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
          بلکه روزنامه و مجله در ستون.
        </p>


        <div class="d-flex justify-content-between">
          <div class="d-flex justify-content-start">

            <div class="me-3" style="width: 20px; height: 20px; border-radius: 2px; border: 1.5px solid black">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2"
                   viewBox="0 0 16 16">
                <path
                    d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
              </svg>
            </div>
            <p>سوال</p>
          </div>
          <div class="d-flex justify-content-start">

            <div class="me-3" style="width: 20px; height: 20px; border-radius: 2px; border: 1.5px solid black">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2"
                   viewBox="0 0 16 16">
                <path
                    d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
              </svg>
            </div>
            <p>انتقاد و پیشنهاد</p>
          </div>
        </div>

        <div class="mb-3">
          <label for="message">پیام</label>
          <textarea id="message" class="form-control rounded-0"></textarea>
        </div>

        <div class="d-flex justify-content-start">
          <div class="me-3" style="width: 20px; height: 20px; border-radius: 2px; border: 1.5px solid black">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2"
                 viewBox="0 0 16 16">
              <path
                  d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
            </svg>
          </div>
          <p>ناشناس</p>

        </div>
        <div class="row">
          <div class="col-12 mb-3">
            <label for="name">نام و نام خانوادگی</label>
            <input type="text" id="name" class="form-control rounded-0">
          </div>
          <div class="col-6">
            <label for="province_2">استان</label>
            <select id="province_2" class="form-select rounded-0">
              <option>تهران</option>
            </select>
          </div>
          <div class="col-6 mb-3">
            <label for="phone">تلفن</label>
            <input type="number" id="phone" class="form-control rounded-0">
          </div>
        </div>


        <div class="text-center">
          <button class="btn-black-rect">ثبت</button>
        </div>
      </div>
    </div>

    <div class="bg-black text-white py-5 px-4">

      <h2 class="mb-4 my-color">سوالات متداول شما</h2>
      <div style="font-size: 12px !important; color: white" class="mb-3">

        <div class="accordion bg-transparent" id="accordionExample">
          <div class="accordion-item bg-transparent my-border text-white rounded-0">
            <h2 class="accordion-header ">
              <button style="font-size: 12px !important;"  class="accordion-button  bg-transparent text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item bg-transparent my-border text-white rounded-0">
            <h2 class="accordion-header">
              <button style="font-size: 12px !important;" class="accordion-button bg-transparent text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item bg-transparent my-border text-white rounded-0">
            <h2 class="accordion-header">
              <button style="font-size: 12px !important;" class="accordion-button bg-transparent text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
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
          <h3 class="mb-5">درباره ما بیشتر بدانید</h3>
          <p style="font-weight: bolder ; font-size:12px; padding-right: 70px; padding-left: 70px">  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع
          با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
          متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
          پیشرو در زبان فارسی</p>
          <div class="text-center  mt-5">
            <button class="btn-black">بیشتر بدانید</button>

          </div>
        </div>


      </div>


    </div>

    <the-footer />
  </div>
</template>

<script>
// @ is an alias to /src
import theMenu from '@/components/TheMenu.vue'
import theFooter from "@/components/TheFooter";
export default {
  name: 'HomeView',
  components: {theFooter, theMenu}
}
</script>
