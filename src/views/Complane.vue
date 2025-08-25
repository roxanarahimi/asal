<template>
  <h1 class="d-block mt-4 my-5  my-font fw-bold text-center my-color">سوال، انتقاد و پیشنهاد</h1>

  <div class="row justify-content-lg-center ">
    <div class="col-lg-8">
      <form class="mt-3 px-3 text-light"   @submit.prevent="submit">
        <div class="row"> <!--     v-if="msgType == 'compliment'"-->
          <div class="col-6 col-lg-3 mb-2">
            <label for="name">نام و نام خانوادگی</label>
            <input id="name" type="text" class="form-control rounded-0">
          </div>
          <div class="col-6 col-lg-3 mb-2">
            <label for="">تلفن تماس</label>
            <input id="name" type="text" class="form-control rounded-0">
          </div>
          <div class="col-6 col-lg-3 mb-2">
            <label for="">استان</label>
            <select name="" id="" class="form-select rounded-0">
              <option value=""></option>
            </select>
          </div>
          <div class="col-6 col-lg-3 mb-2">
            <label for="">شهر</label>
            <select name="" id="" class="form-select rounded-0">
              <option value=""></option>
            </select>
          </div>
          <div class="col-12 mb-2">
            <label for="">ادرس</label>
            <select name="" id="" class="form-select rounded-0">
              <option value=""></option>
            </select>
          </div>

          <b class="my-4 text-center my-color">شرح محصول خریداری شده</b>

          <div class="col-12 col-lg-3 mb-2">
            <label for="">سریال ساخت</label>
            <input id="name" type="text" class="form-control rounded-0">
          </div>
          <div class="col-12 col-lg-3 mb-2">
            <label for="">تاریخ تولید</label>
            <input id="name" type="text" class="form-control rounded-0">
          </div>
          <div class="col-12 col-lg-3 mb-2">
            <label for="">سریال فاکتور خریداری شده (اختیاری):</label>
            <input id="name" type="text" class="form-control rounded-0">
          </div>
          <div class="col-12 col-lg-3 mb-2">
            <label for="">تاریخ خرید</label>
            <input id="name" type="text" class="form-control rounded-0">
          </div>
          <div class="col-6 col-lg-3 mb-2">
            <label for="">نوع محصول</label>
            <select name="" id="" class="form-select rounded-0">
              <option value="">انتخاب کنید</option>
              <option value="1">تغذیه ساده</option>
              <option value="2">تغذیه ویژه</option>
              <option value="3">شربت ویژه</option>
            </select>
          </div>
          <div class="col-6 col-lg-3 mb-2">
            <label for="">وزن محصول</label>
            <select name="" id="" class="form-select rounded-0">
              <option value="">انتخاب کنید</option>
              <option value="">4 کیلوگرم</option>
              <option value="">1 کیلوگرم</option>
              <option value="">590 گرم</option>
            </select>
          </div>

<!--          <b class="my-4 text-center my-color">شرح مشکلات محصول</b>-->

          <div class="col-12 col-lg-3 mb-2">
            <label for="">تاریخ بروز مشکل</label>
            <input id="name" type="text" class="form-control rounded-0">
          </div>


          <div class="col-12 col-lg-3 mb-2">
            <label for="">دمای محیط نگهداری محصول</label>
            <input id="name" type="text" class="form-control rounded-0">
          </div>

          <b class="my-4 text-center my-color">موضوع مشکل</b>

          <div class="col-12 ">
            <div class="d-flex flex-wrap justify-content-between">
              <div class="d-flex justify-content-start cursor-pointer ">
                <p class="text-nowrap checkbox-label" @click="checkboxToggle('ch-1')">مقدار محصول تحویلی</p>
                <div id="ch-1" class="ms-1 check-box" :check-box-checked="0"  @click="checkboxToggle('ch-1')">
                  <i class="bi bi-check-lg opacity-0"></i>
                </div>
              </div>

              <div class="d-flex justify-content-start cursor-pointer ">
                <p class="text-nowrap checkbox-label" @click="checkboxToggle('ch-2')">کیفیت محصول</p>
                <div id="ch-2" class="ms-1 check-box" :check-box-checked="0"  @click="checkboxToggle('ch-2')">
                  <i class="bi bi-check-lg opacity-0"></i>
                </div>
              </div>
              <div class="d-flex justify-content-start cursor-pointer ">
                <p class="text-nowrap checkbox-label" @click="checkboxToggle('ch-3')">زمان تحویل</p>
                <div id="ch-3" class="ms-1 check-box" :check-box-checked="0"  @click="checkboxToggle('ch-3')">
                  <i class="bi bi-check-lg opacity-0"></i>
                </div>
              </div>
              <div class="d-flex justify-content-start cursor-pointer ">
                <p class="text-nowrap checkbox-label" @click="checkboxToggle('ch-4')">بسته بندی</p>
                <div id="ch-4" class="ms-1 check-box" :check-box-checked="0"  @click="checkboxToggle('ch-4')">
                  <i class="bi bi-check-lg opacity-0"></i>
                </div>
              </div>
              <div class="d-flex justify-content-start cursor-pointer ">
                <p class="text-nowrap checkbox-label" @click="checkboxToggle('ch-5')">مالی</p>
                <div id="ch-5" class="ms-1 check-box" :check-box-checked="0"  @click="checkboxToggle('ch-5')">
                  <i class="bi bi-check-lg opacity-0"></i>
                </div>
              </div>
              <div class="d-flex justify-content-start cursor-pointer ">
                <p class="text-nowrap checkbox-label" @click="checkboxToggle('ch-6')">رفتار پرسنل</p>
                <div id="ch-6" class="ms-1 check-box" :check-box-checked="0"  @click="checkboxToggle('ch-6')">
                  <i class="bi bi-check-lg opacity-0"></i>
                </div>
              </div>
              <div class="col-12 mb-3">
                <label for="name">سایر موارد</label>
                <!--            <textarea class="form-control rounded-0" rows="2"></textarea>-->
                <input id="name" type="text" class="form-control rounded-0">
              </div>
            </div>
          </div>


          <div class="col-12 mb-2">
            <label for="name">شرح کامل موضوع</label>
            <textarea class="form-control rounded-0" rows="5"></textarea>
          </div>

          <div class="col-12 mb-2 text-center my-3">
            <button class="btn-orange-rect" type="submit">ثبت</button>

          </div>

        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Complane",
  setup(){
    const checkboxToggle = (id)=>{
      let x = document.getElementById(id);
      let y;
      if (x.getAttribute('check-box-checked')==0){
        y=1;
        x.firstChild.classList.remove('opacity-0');
      }else{
        y=0;
        x.firstChild.classList.add('opacity-0');
      }
      document.getElementById(id).setAttribute('check-box-checked', y);
    }

    const submit = ()=>{
      let message = 'با تشکر، اطلاعات شما ثبت گردید\n' +
          'کارشناسان ما، با شما تماس خواهند گرفت.';
      alert(message);
    }
    return{
      checkboxToggle, submit
    }
  }
}
</script>

<style scoped>
.checkbox-label, label{
  font-size: 14px;
}
</style>