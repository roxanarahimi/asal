<template>
  <div class="w-100 px-4 text-light "
       style="background: url('/img/loginBack.svg') top center no-repeat; background-size: cover">
<!--    <div class="text-center">-->
<!--      <img src="/img/Beelogo.png" style="width: 160px" class="my-5" alt="">-->
<!--    </div>-->

    <h1 class="my-font my-color text-center fw-bold mt-4 mb-5">ثبت نام در کوپابی</h1>

    <div>
      <p>
        برای ثبت سفارش در سامانه کوپابی، لازم است ابتدا حساب کاربری ایجاد نمایید.
      </p>
      <p>
        <i class="bi bi-pin-angle-fill text-danger"></i>
        توجه:
        ثبت مشخصات فردی و بارگذاری مدارک (مانند پروانه زنبورداری یا کارت ملی) به منظور تأیید هویت و تسهیل فرآیند خرید
        انجام می‌گیرد.
        پس از بررسی و تأیید اطلاعات توسط کارشناسان فروش کوپابی، امکان نهایی‌سازی و پیگیری سفارش‌ها برای شما فعال خواهد شد.

      </p>
      <p>
        <i class="bi bi-check-square-fill text-success"></i>
        با ثبت‌نام، از پشتیبانی تخصصی، اطلاع‌رسانی محصولات جدید و پیشنهادهای ویژه نیز بهره‌مند می‌شوید.
      </p>
    </div>

    <div class="d-flex justify-content-between mt-5">
      <div class="d-flex pe-4">
        <div @click="typeToggle(1)" id="real" class="me-2 registerRadio activeRegisterRadio"></div>
        <p @click="typeToggle(1)" class="pointer">شخص حقیقی</p>
      </div>
      <div class="d-flex ">
        <div @click="typeToggle(2)" id="legal" class="me-2 registerRadio "></div>
        <p @click="typeToggle(2)" class="pointer">شخص حقوقی</p>
      </div>
    </div>


    <form>
      <div class="row">
        <div v-if="type=='real'" class="col-12">
          <label>نام و نام خانوادگی</label>
          <input id="name" type="text" class="form-control form-control-sm" required>
          <div id="nameHelp" class="form-text error"></div>
          <p class="form-text error m-0" v-for="e in errors.name">{{ e }}</p>
        </div>
        <div v-if="type=='real'" class="col-6">
          <label>کد ملی</label>
          <input id="national_code" type="text" class="en form-control form-control-sm" required>
          <div id="national_codeHelp" class="form-text error"></div>
          <p class="form-text error m-0" v-for="e in errors.national_code">{{ e }}</p>
        </div>
        <div v-if="type=='real'" class="col-6">
          <label>تاریخ تولد</label>
          <input id="birth_date" type="text" class="en form-control form-control-sm" required>
          <div id="birth_dateHelp" class="form-text error"></div>
          <p class="form-text error m-0" v-for="e in errors.birth_date">{{ e }}</p>
        </div>

        <div v-if="type=='legal'" class="col-12">
          <label>نام شرکت</label>
          <input id="name" type="text" class="form-control form-control-sm" required>
          <div id="nameHelp" class="form-text error"></div>
          <p class="form-text error m-0" v-for="e in errors.name">{{ e }}</p>
        </div>
        <div id="operator" v-if="type=='legal'" class="col-12">
          <label>نام و نام خانوادگی نماینده</label>
          <input type="text" class="form-control form-control-sm" required>
          <div id="operatorHelp" class="form-text error"></div>
          <p class="form-text error m-0" v-for="e in errors.operator">{{ e }}</p>
        </div>
        <div v-if="type=='legal'" class="col-6">
          <label>شناسه ملی</label>
          <input id="national_code" type="text" class="en form-control form-control-sm" required>
          <div id="national_codeHelp" class="form-text error"></div>
          <p class="form-text error m-0" v-for="e in errors.national_code">{{ e }}</p>
        </div>
        <div v-if="type=='legal'" class="col-6">
          <label>شماره ثبت</label>
          <input id="registration_number" type="text" class="en form-control form-control-sm" required>
          <div id="registration_numberHelp" class="form-text error"></div>
          <p class="form-text error m-0" v-for="e in errors.registration_number">{{ e }}</p>
        </div>


        <div class="col-6">
          <label>شماره تلفن</label>
          <input id="phone" type="text" class="en form-control form-control-sm" required>
          <div id="phoneHelp" class="form-text error"></div>
          <p class="form-text error m-0" v-for="e in errors.phone">{{ e }}</p>
        </div>
        <div class="col-6">
          <label>شماره موبایل</label>
          <input id="mobile" type="number" class="form-control form-control-sm en" maxLength="11" required>
          <div id="mobileHelp" class="form-text error"></div>
          <p class="form-text error m-0" v-for="e in errors.mobile">{{ e }}</p>
        </div>


        <div class="col-6">
          <label>استان</label>
          <Multiselect
              v-model="selectedProvince" @change="getCities"
              placeholder=""
              dir="rtl"
              :mode="'single'"
              :options="provinces"
              :searchable="true"
              :create-option="true"
          />
          <div id="province_idHelp" class="form-text error"></div>
          <p class="form-text error m-0" v-for="e in errors.province_id">{{ e }}</p>
        </div>


        <div class="col-6">
          <label>شهر</label>
          <Multiselect
              v-model="selectedCity"
              placeholder=""
              dir="rtl"
              :mode="'single'"
              :options="cities"
              :searchable="true"
              :create-option="true"
          />
          <div id="city_idHelp" class="form-text error"></div>
          <p class="form-text error m-0" v-for="e in errors.city_id">{{ e }}</p>
        </div>

        <div class="col-12">
          <label>آدرس</label>
          <input id="address" type="text" class="form-control form-control-sm" required>
          <div id="addressHelp" class="form-text error"></div>
          <p class="form-text error m-0" v-for="e in errors.address">{{ e }}</p>
        </div>
        <div class="col-12">
          <label>کد پستی</label>
          <input id="postal_code" type="text" class="en form-control form-control-sm" required>
          <div id="postal_codeHelp" class="form-text error"></div>
          <p class="form-text error m-0" v-for="e in errors.postal_code">{{ e }}</p>
        </div>
      </div>

      <div>
        <div v-if="type=='legal'" class="row">
          <div class="col-12 mt-5">
            <drop-zone id="dropZone1" :title="'تصویر آخرین روزنامه رسمی'" :index="1" :has-error="img1Error" required/>
            <div></div>
          </div>
        </div>
        <div v-else class="row">
          <div class="col-12 mt-5">
            <drop-zone id="dropZone1" :title="'تصویر کارت ملی یا شناسنامه زنبورداری'" :index="1" :has-error="img1Error"
                       required/>
            <div></div>
          </div>
        </div>
      </div>


      <div class=" d-flex justify-content-center mt-4">
        <button @click.prevent="submit" class="btn-orange my-font">ثبت</button>
      </div>
    </form>
  </div>
  <!-- Modal -->
  <div class="modal fade" id="register-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
       aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <!--          <button type="button" class="btn-close m-2 me-auto" data-bs-dismiss="modal" aria-label="Close"></button>-->
        <div class="modal-body ">

          <p class="text-center">اطلاعات شما با موفقیت ثبت شد</p>
          <img src="/img/check.png" alt="">
          <p class="text-center">فعال شدن حساب کاربری شما تا 24 ساعت آینده، از طریق پیامک اطلاع رسانی می شود</p>
        </div>
        <div class="d-flex justify-content-center">
          <button type="button" class="btn-black-rect my-3" @click="reload" style="width: 100px; height:40px"
                  data-bs-dismiss="modal">تائید
          </button>

        </div>
      </div>

    </div>
  </div>
</template>


<script>
import {onMounted, ref} from "vue";
import dropZone from "../components/DropZone";
import {useStore} from "vuex";
import Multiselect from '@vueform/multiselect'  //npm install @vueform/multiselect


export default {
  name: "Profile",
  components: {dropZone, Multiselect},
  setup() {

    const store = useStore()
    const errors = ref([])
    const type = ref();
    const img1Error = ref(false)
    const img2Error = ref(false)
    const cities = ref([])
    const provinces = ref([])
    const selectedProvince = ref({})
    const selectedCity = ref({})
    const typeToggle = (index) => {
      errors.value = [];
      let req = document.querySelectorAll('[required]');
      req.forEach((element) => {
        element.classList.remove('hasError');
        element.value = ""
        // element.nextSibling.innerHTML = "";
        img1Error.value = false;
        img2Error.value = false;
      })
      if (type.value == 'real' && index == 2) {
        document.querySelectorAll('.registerRadio').forEach((element) => {
          element.classList.remove('activeRegisterRadio');
        })
        document.querySelector('#legal').classList.add('activeRegisterRadio');
        type.value = 'legal'
      } else if (type.value == 'legal' && index == 1) {
        document.querySelectorAll('.registerRadio').forEach((element) => {
          element.classList.remove('activeRegisterRadio');
        })
        document.querySelector('#real').classList.add('activeRegisterRadio');
        type.value = 'real'

      }

    }
    const submit = () => {
      errors.value = [];
      let emptyFieldsCount = 0;
      let req = document.querySelectorAll('[required]');
      req.forEach((element) => {
        if (element.value === "") {
          element.classList.add('hasError');
          // element.nextSibling.innerHTML = "فیلد اجباری";
          emptyFieldsCount++;
        } else {
          element.classList.remove('hasError');
          // element.nextSibling.innerHTML = "";
        }

        if (document.querySelector('#img1')?.classList.contains('hasError')) {
          img1Error.value = true;
        } else {
          img1Error.value = false;

        }
        if (document.querySelector('#img2')?.classList.contains('hasError')) {
          img2Error.value = true;
        } else {
          img2Error.value = false;

        }
      });
      errors.value['mobile'] = [];
      errors.value['national_code'] = [];
      errors.value['postal_code'] = [];

      if (document.querySelector('#national_code').value != '') {
        let x, y;
        type.value == 'real' ? (x = 10, y = 'کد ملی') : (x = 11, y = 'شناسه ملی');
        if (document.querySelector('#national_code').value.length != x) {
          errors.value.national_code.push(y + ' باید ' + x + ' رقم باشد.');
        }
      }
      if (document.querySelector('#postal_code').value != '') {
        if (document.querySelector('#postal_code').value.length != 10) {
          errors.value.postal_code.push('کد پستی باید 10 رقم باشد')
        }
      }
      if (document.querySelector('#mobile').value != '') {
        if (!document.querySelector('#mobile').value.startsWith('09')) {
          errors.value.mobile.push('شماره موبایل باید با 09 شروع شود')
        }
        if (document.querySelector('#mobile').value.length != 11) {
          errors.value.mobile.push('شماره موبایل باید 11 رقم باشد')
        }
      }


      if (emptyFieldsCount === 0) {

        let info = {
          name: document.querySelector('#name').value,
          national_code: document.querySelector('#national_code').value,
          phone: document.querySelector('#phone').value,
          mobile: document.querySelector('#mobile').value,
          city_id: selectedCity.value.id,
          address: document.querySelector('#address').value,
          postal_code: document.querySelector('#postal_code').value,
          scope: 'user',
          type: type.value,
        };
        if (type.value == 'legal') {
          info['registration_number'] = document.querySelector('#registration_number').value;
          info['operator'] = document.querySelector('#operator').value;
          info['img1'] = document.querySelector('#img1').value;
          // info['img2'] = document.querySelector('#img2').value;
        }

        axios.post(store.state.panelUrl + '/api/user/register', info)
            .then((response) => {
              let myModal = new bootstrap.Modal(document.getElementById('register-modal'))
              myModal.show();
            })
            .catch((error) => {
              errors.value['mobile'] = [];

              if (error.response.status === 422) {
                errors.value['mobile'] = error.response.data.mobile;
                errors.value['national_code'] = error.response.data.national_code;
                errors.value['registration_number'] = error.response.data.registration_number;
              }
              console.error(error)
            });

      }


    }


    onMounted(() => {
      type.value = 'real';
      getProvinces();
      // getCities();
    })

    const reload = () => {
      window.location.reload();
    }
    const getProvinces = () => {
      axios.get(store.state.panelUrl + '/api/province')
          .then((response) => {
            provinces.value = response.data;
            provinces.value.forEach((element) => {
              element.value = {id: element.id, name: element.title, cities: element.cities};
              element.label = element.title;
            })

            selectedProvince.value = provinces.value[0]
          }).then(() => {
        getCities();
      }).catch((error) => {
        console.error(error)
      })
    }
    const getCities = () => {
      setTimeout(() => {
        cities.value = [];
        if (selectedProvince.value) {
          let x = selectedProvince.value.cities;
          x.forEach((element) => {
            element.value = {id: element.id, name: element.title};
            element.label = element.title;
          })
          cities.value = x;
        }
      }, 1000)

    }
    return {
      type, typeToggle, submit, errors, img1Error, img2Error, store, reload,
      cities, provinces, selectedProvince, selectedCity, getCities, getProvinces,
    }
  }

}
</script>
<style src="@vueform/multiselect/themes/default.css"></style>

<style scoped>
label {
  color: #FFB571 !important;
  font-size: 13px;
  margin: 5px;
}

.modal-dialog {
  width: 350px !important;
  margin: 0 auto !important;
  text-align: center;
}


</style>
