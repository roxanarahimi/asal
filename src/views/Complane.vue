<template>
  <h1 class="d-block mt-4 my-5  my-font fw-bold text-center my-color">سوال، انتقاد و پیشنهاد</h1>

  <div class="row justify-content-lg-center ">
    <div class="col-lg-8">
      <form class="mt-3 px-3 text-light" @submit.prevent="submit">
        <div class="row"> <!--     v-if="msgType == 'compliment'"-->
          <div class="col-6 col-lg-3 mb-2">
            <label for="name">نام و نام خانوادگی</label>
            <input id="name" :value="user?.name" type="text" class="form-control rounded-0">
          </div>
          <div class="col-6 col-lg-3 mb-2">
            <label for="mobile">شماره موبایل</label>
            <input id="mobile" :value="user?.mobile"  type="text" class="form-control rounded-0">
          </div>
          <div class="col-6 col-lg-3 mb-2">
            <label for="province_id">استان</label>
            <select id="province_id" class="form-select rounded-0">
              <option value=""></option>
            </select>
          </div>
          <div class="col-6 col-lg-3 mb-2">
            <label for="city_id">شهر</label>
            <select id="city_id" class="form-select rounded-0">
              <option value=""></option>
            </select>
          </div>
          <div class="col-12 mb-2">
            <label for="address">ادرس</label>
            <select id="address" class="form-select rounded-0">
              <option :value="user?.address"></option>
            </select>
          </div>

          <b class="my-4 text-center my-color">شرح محصول خریداری شده</b>

          <div class="col-12 col-lg-3 mb-2">
            <label for="serial">سریال ساخت</label>
            <input id="serial" type="text" class="form-control rounded-0">
          </div>
          <div class="col-12 col-lg-3 mb-2">
            <label for="p_date">تاریخ تولید</label>
            <input id="p_date" type="text" class="form-control rounded-0">
          </div>
          <div class="col-12 col-lg-3 mb-2">
            <label for="invoice_serial">سریال فاکتور خریداری شده (اختیاری):</label>
            <input id="invoice_serial" type="text" class="form-control rounded-0">
          </div>
          <div class="col-12 col-lg-3 mb-2">
            <label for="invoice_date">تاریخ خرید</label>
            <input id="invoice_date" type="text" class="form-control rounded-0">
          </div>
          <div class="col-6 col-lg-3 mb-2">
            <label for="product_type">نوع محصول</label>
            <select id="product_type" class="form-select rounded-0">
              <option value="">انتخاب کنید</option>
              <option value="1">تغذیه ساده</option>
              <option value="2">تغذیه ویژه</option>
              <option value="3">شربت ویژه</option>
            </select>
          </div>
          <div class="col-6 col-lg-3 mb-2">
            <label for="product_weight">وزن محصول</label>
            <select id="product_weight" class="form-select rounded-0">
              <option value="">انتخاب کنید</option>
              <option value="4kg">4 کیلوگرم</option>
              <option value="1kg">1 کیلوگرم</option>
              <option value="590g">590 گرم</option>
            </select>
          </div>

          <!--          <b class="my-4 text-center my-color">شرح مشکلات محصول</b>-->

          <div class="col-12 col-lg-3 mb-2">
            <label for="problem_date">تاریخ بروز مشکل</label>
            <input id="problem_date" type="text" class="form-control rounded-0">
          </div>


          <div class="col-12 col-lg-3 mb-2">
            <label for="temperature">دمای محیط نگهداری محصول</label>
            <input id="temperature" type="text" class="form-control rounded-0">
          </div>

          <b class="my-4 text-center my-color">موضوع مشکل</b>

          <div class="col-12 ">
            <div class="d-flex flex-wrap justify-content-between">
              <div class="d-flex justify-content-start cursor-pointer ">
                <p class="text-nowrap checkbox-label" @click="checkboxToggle('ch-1')">مقدار محصول تحویلی</p>
                <div id="ch-1" class="subject_weight ms-1 check-box" :check-box-checked="0"
                     @click="checkboxToggle('ch-1')">
                  <i class="bi bi-check-lg opacity-0"></i>
                </div>
              </div>

              <div class="d-flex justify-content-start cursor-pointer ">
                <p class="text-nowrap checkbox-label" @click="checkboxToggle('ch-2')">کیفیت محصول</p>
                <div id="ch-2" class="subject_quality ms-1 check-box" :check-box-checked="0"
                     @click="checkboxToggle('ch-2')">
                  <i class="bi bi-check-lg opacity-0"></i>
                </div>
              </div>
              <div class="d-flex justify-content-start cursor-pointer ">
                <p class="text-nowrap checkbox-label" @click="checkboxToggle('ch-3')">زمان تحویل</p>
                <div id="ch-3" class="subject_delivery_time ms-1 check-box" :check-box-checked="0"
                     @click="checkboxToggle('ch-3')">
                  <i class="bi bi-check-lg opacity-0"></i>
                </div>
              </div>
              <div class="d-flex justify-content-start cursor-pointer ">
                <p class="text-nowrap checkbox-label" @click="checkboxToggle('ch-4')">بسته بندی</p>
                <div id="ch-4" class="subject_packaging ms-1 check-box" :check-box-checked="0"
                     @click="checkboxToggle('ch-4')">
                  <i class="bi bi-check-lg opacity-0"></i>
                </div>
              </div>
              <div class="d-flex justify-content-start cursor-pointer ">
                <p class="text-nowrap checkbox-label" @click="checkboxToggle('ch-5')">مالی</p>
                <div id="ch-5" class="subject_finance ms-1 check-box" :check-box-checked="0"
                     @click="checkboxToggle('ch-5')">
                  <i class="bi bi-check-lg opacity-0"></i>
                </div>
              </div>
              <div class="d-flex justify-content-start cursor-pointer ">
                <p class="text-nowrap checkbox-label" @click="checkboxToggle('ch-6')">رفتار پرسنل</p>
                <div id="ch-6" class="subject_behavior ms-1 check-box" :check-box-checked="0"
                     @click="checkboxToggle('ch-6')">
                  <i class="bi bi-check-lg opacity-0"></i>
                </div>
              </div>
              <div class="col-12 mb-3">
                <label for="name">سایر موارد</label>
                <input id="subject_other" type="text" class="form-control rounded-0">
              </div>
            </div>
          </div>


          <div class="col-12 mb-2">
            <label for="issue">شرح کامل موضوع</label>
            <textarea id="issue" class="form-control rounded-0" rows="5"></textarea>
          </div>

          <div class="col-12 mb-2 text-center my-3">
            <button v-if="user !== null" class="btn-orange-rect" @click.prevent="submit">ثبت</button>
            <button v-else class="btn-orange-rect" @click.prevent="setForm('complane')" data-bs-toggle="modal" data-bs-target="#AuthorizeModal">ثبت</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  name: "Complane",
  setup() {
    const store = useStore();
    const serverUrl = store.state.serverUrl;
    const user = computed(() => JSON.parse(localStorage.getItem('user')));
    const checkboxToggle = (id) => {
      let x = document.getElementById(id);
      let y;
      if (x.getAttribute('check-box-checked') == 0) {
        y = 1;
        x.firstChild.classList.remove('opacity-0');
      } else {
        y = 0;
        x.firstChild.classList.add('opacity-0');
      }
      document.getElementById(id).setAttribute('check-box-checked', y);
    }

    const submit = () => {
      let message = 'با تشکر، اطلاعات شما ثبت گردید\n' +
          'کارشناسان ما، با شما تماس خواهند گرفت.';
      axios.post(serverUrl + '/api/complane/store', {
        user_id: user.id,
        serial: document.getElementById('serial').value,
        p_date: document.getElementById('p_date').value,
        invoice_serial: document.getElementById('invoice_serial').value,
        invoice_date: document.getElementById('invoice_date').value,
        product_type: document.getElementById('product_type').value,
        product_weight: document.getElementById('product_weight').value,
        problem_date: document.getElementById('problem_date').value,
        temperature: document.getElementById('temperature').value,
        subject_weight: document.querySelector('.subject_weight').value,
        subject_quality: document.querySelector('.subject_quality').value,
        subject_delivery_time: document.querySelector('.subject_delivery_time').value,
        subject_packaging: document.querySelector('.subject_packaging').value,
        subject_finance: document.querySelector('.subject_finance').value,
        subject_behavior: document.querySelector('.subject_behavior').value,
        subject_other: document.getElementById('subject_other').value,
        issue: document.getElementById('issue').value,
      })
          .then((response) => {
            console.log(response)
          })
          .catch((error) => {
            console.error(error)
          });
    }
    const setForm = async (form) => {
      localStorage.setItem('form',form);
    }
    return {
      checkboxToggle, submit, store, serverUrl, user,setForm
    }
  }
}
</script>

<style scoped>
.checkbox-label, label {
  font-size: 14px;
}
</style>