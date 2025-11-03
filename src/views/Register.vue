<template>
  <div class="w-100 px-4 px-lg-5 text-light "
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
        📌 توجه:
        ثبت مشخصات فردی و بارگذاری مدارک (مانند پروانه زنبورداری یا کارت ملی) به منظور تأیید هویت و تسهیل فرآیند خرید انجام می‌گیرد.
        پس از بررسی و تأیید اطلاعات توسط کارشناسان فروش کوپابی، امکان نهایی‌سازی و پیگیری سفارش‌ها برای شما فعال خواهد شد.
      </p>
      <p>
        <i class="bi bi-check-square-fill text-success"></i>
        با ثبت‌نام، از پشتیبانی تخصصی، اطلاع‌رسانی محصولات جدید و پیشنهادهای ویژه نیز بهره‌مند می‌شوید.
      </p>
    </div>

    <div class="d-flex justify-content-between justify-content-lg-start mt-5">
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
        <div v-if="type=='real'" class="col-12 col-lg-3">
          <label>نام و نام خانوادگی</label>
          <input id="name" type="text" class="form-control form-control-sm" required>
          <div id="nameHelp" class="form-text error"></div>
          <p class="form-text error m-0" v-for="e in errors.name">{{ e }}</p>
        </div>
        <div v-if="type=='real'" class="col-6 col-lg-3">
          <label>کد ملی</label>
          <input id="national_code" type="text" class="en form-control form-control-sm" required>
          <div id="national_codeHelp" class="form-text error"></div>
          <p class="form-text error m-0" v-for="e in errors.national_code">{{ e }}</p>
        </div>
        <div v-if="type=='real'" class="col-6 col-lg-3">
          <label>تاریخ تولد</label>
          <input id="birth_date" type="text" class="en form-control form-control-sm" required>
          <div id="birth_dateHelp" class="form-text error"></div>
          <p class="form-text error m-0" v-for="e in errors.birth_date">{{ e }}</p>
        </div>

        <div v-if="type=='legal'" class="col-12 col-lg-3">
          <label>نام شرکت</label>
          <input id="name" type="text" class="form-control form-control-sm" required>
          <div id="nameHelp" class="form-text error"></div>
          <p class="form-text error m-0" v-for="e in errors.name">{{ e }}</p>
        </div>
        <div id="operator" v-if="type=='legal'" class="col-12 col-lg-3">
          <label>نام و نام خانوادگی نماینده</label>
          <input type="text" class="form-control form-control-sm" required>
          <div id="operatorHelp" class="form-text error"></div>
          <p class="form-text error m-0" v-for="e in errors.operator">{{ e }}</p>
        </div>
        <div v-if="type=='legal'" class="col-6 col-lg-3">
          <label>شناسه ملی</label>
          <input id="national_code" type="text" class="en form-control form-control-sm" required>
          <div id="national_codeHelp" class="form-text error"></div>
          <p class="form-text error m-0" v-for="e in errors.national_code">{{ e }}</p>
        </div>
        <div v-if="type=='legal'" class="col-6 col-lg-3">
          <label>شماره ثبت</label>
          <input id="registration_number" type="text" class="en form-control form-control-sm" required>
          <div id="registration_numberHelp" class="form-text error"></div>
          <p class="form-text error m-0" v-for="e in errors.registration_number">{{ e }}</p>
        </div>

        <div class="col-6 col-lg-3">
          <label>شماره موبایل</label>
          <input id="mobile" type="number" class="form-control form-control-sm en" maxLength="11" required>
          <div id="mobileHelp" class="form-text error"></div>
          <p class="form-text error m-0" v-for="e in errors.mobile">{{ e }}</p>
        </div>
        <div class="col-6 col-lg-3">
          <label>شماره تلفن</label>
          <input id="phone" type="text" class="en form-control form-control-sm" required>
          <div id="phoneHelp" class="form-text error"></div>
          <p class="form-text error m-0" v-for="e in errors.phone">{{ e }}</p>
        </div>



<!--        <div class="col-6">-->
<!--          <label>استان</label>-->
<!--          <Multiselect-->
<!--              v-model="selectedProvince" @change="getCities"-->
<!--              placeholder=""-->
<!--              dir="rtl"-->
<!--              :mode="'single'"-->
<!--              :options="provinces"-->
<!--              :searchable="true"-->
<!--              :create-option="true"-->
<!--          />-->
<!--          <div id="province_idHelp" class="form-text error"></div>-->
<!--          <p class="form-text error m-0" v-for="e in errors.province_id">{{ e }}</p>-->
<!--        </div>-->

        <div class="col-6 col-lg-3">
          <label>استان</label>
            <div>
              <Multiselect
                  v-model="selectedProvince"
                  :options="provinces"
                  :is-selected="user?.city_id"
                  label="name"
                  mode="single"
                  value-prop="id"
                  track-by="name"
                  placeholder="نام استان را جستجو کنید..."
                  :searchable="true"
                  :close-on-select="true"
              />
            </div>
            <input type="hidden" id="province_id" @change="" v-model="selectedProvince">
            <div id="city_idHelp" class="form-text error"></div>
            <p class="form-text error m-0" v-for="e in errors.city_id">{{ e }}</p>
          </div>

        <div class="col-6 col-lg-3">
          <label>شهر</label>
            <div>
              <Multiselect
                  v-model="selectedCity"
                  :options="cities"
                  label="name"
                  mode="single"
                  value-prop="id"
                  track-by="name"
                  placeholder="نام شهر را جستجو کنید..."
                  :searchable="true"
                  :close-on-select="true"
              />
            </div>
            <input type="hidden" id="city_id" v-model="selectedCity">
            <div id="city_idHelp" class="form-text error"></div>
            <p class="form-text error m-0" v-for="e in errors.city_id">{{ e }}</p>
          </div>

          <!--        <div class="col-6">-->
<!--          <label>شهر</label>-->
<!--          <Multiselect-->
<!--              v-model="selectedCity"-->
<!--              placeholder=""-->
<!--              dir="rtl"-->
<!--              :mode="'single'"-->
<!--              :options="cities"-->
<!--              :searchable="true"-->
<!--              :create-option="true"-->
<!--          />-->
<!--          <div id="city_idHelp" class="form-text error"></div>-->
<!--          <p class="form-text error m-0" v-for="e in errors.city_id">{{ e }}</p>-->
<!--        </div>-->

        <div class="col-12 col-lg-3">
          <label>کد پستی</label>
          <input id="postal_code" type="text" class="en form-control form-control-sm" required>
          <div id="postal_codeHelp" class="form-text error"></div>
          <p class="form-text error m-0" v-for="e in errors.postal_code">{{ e }}</p>
        </div>
        <div class="col-12" :class="{'col-lg-9': type=='legal'}">
          <label>آدرس</label>
          <input id="address" type="text" class="form-control form-control-sm" required>
          <div id="addressHelp" class="form-text error"></div>
          <p class="form-text error m-0" v-for="e in errors.address">{{ e }}</p>
        </div>

      </div>

      <div>
        <div v-if="type=='legal'" class="row justify-content-lg-center">
          <div class="col-12 col-lg-5 mt-5">
            <drop-zone id="dropZone1" :title="'تصویر آخرین روزنامه رسمی'" :index="1" :has-error="img1Error" required/>
            <div></div>
          </div>
        </div>
        <div v-else class="row justify-content-lg-center">
          <div class="col-12 col-lg-5 mt-5">
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
import {computed, onMounted, ref, watch} from "vue";
import dropZone from "@/components/DropZone";
import {useStore} from "vuex";
import Multiselect from "@vueform/multiselect";
import Loader from "@/components/Loader2.vue";


export default {
  name: "Register",
  components: {dropZone, Multiselect, Loader},
  setup() {
    const store = useStore();
    const serverUrl = store.state.serverUrl;
    const isLoading = ref(false);
    const errors = ref([]);
    const user = computed(() => JSON.parse(localStorage.getItem('user')));
    const mobile = ref();
    const message = ref();
    const name = ref();
    const email = ref();
    const city_id = ref();
    const emptyFieldsCount = ref();
    const validated = ref(false);
    const provinces = ref([]);
    const cities = ref([]);
    const selectedCity = ref();
    const selectedProvince = ref()
    const selectedFiles = ref([])

    const type = ref();
    const img1Error = ref(false)
    const img2Error = ref(false)

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


    const reload = () => {
      window.location.reload();
    }

    const setForm = async (form) => {
      localStorage.setItem('form', form);
      validate();
    }
    const validate = () => {
      mobile.value = document.getElementById('mobile').value;
      errors.value = [];
      errors.value['mobile'] = [];
      emptyFieldsCount.value = 0;
      let req = document.querySelectorAll('[required]');
      req.forEach((element) => {
        if (element.value === "") {
          element.classList.add('hasError');
          // element.nextSibling.innerHTML = "فیلد اجباری";
          emptyFieldsCount.value++;
        } else {
          element.classList.remove('hasError');
          // element.nextSibling.innerHTML = "";
        }
      });
      if (document.querySelector('#img1')?.classList.contains('hasError')) {
        img1Error.value = true;
      } else {
        img1Error.value = false;
      }
      if (mobile.value && mobile.value?.length !== 11) {
        errors.value['mobile'].push('شماره موبایل باید 11 رقم باشد');
        document.getElementById('messageMobile').classList.add('hasError');
        emptyFieldsCount.value++;
      }
      if (mobile.value && !mobile.value?.startsWith('09')) {
        errors.value['mobile'].push('شماره موبایل باید با 09 شروع شود');
        document.getElementById('messageMobile').classList.add('hasError');
        emptyFieldsCount.value++;
      }
      if (!localStorage.getItem('user') && emptyFieldsCount.value === 0) {
        document.getElementById('modal-btn-h').click();
      }
    }
    const showModal = async (type) => {
      await setForm(type);
      validate();
      if (emptyFieldsCount.value === 0) {
        document.getElementById('modal-btn-h').click();
      }
    }
    const getProvinces = async () => {
      try {
        await store.dispatch('getProvinces');
        provinces.value = store.state.provinces;

      } catch (error) {
        console.error('API call failed:', error);
      }
    };
    const getCities = async (id) => {
      try {
        await store.dispatch('getCities', id);
        cities.value = store.state.cities;
      } catch (error) {
        console.error('API call failed:', error);
      }
    };

    const checkboxToggle = (id) => {
      let x = document.getElementById(id);
      let y = x.getAttribute('check-box-checked') == 0 ? 1 : 0;
      if (y === 1) {
        x.firstChild.classList.remove('opacity-0');
      } else {
        x.firstChild.classList.add('opacity-0');
      }
      document.getElementById(id).setAttribute('check-box-checked', y);
    }
    const storeRequest = async () => {
      try {
        document.getElementById('sendSuccess')?.classList.add('d-none');
        document.getElementById('sendFail')?.classList.add('d-none');
        validate();
        if (user.value && emptyFieldsCount.value === 0) {
          if (!selectedFiles.value.length) {
            alert('Please upload at least one image.')
            return
          }

          const formData = new FormData()

          // ✅ Append each file
          selectedFiles.value.forEach((file, i) => {
            formData.append('images[]', file)
          })

          formData.append('user_id', user.value.id);
          formData.append('commercial', document.getElementById('commercial').getAttribute('check-box-checked'));
          formData.append('scientific', document.getElementById('scientific').getAttribute('check-box-checked'));
          formData.append('custom_production', document.getElementById('custom_production').getAttribute('check-box-checked'));
          formData.append('honey', document.getElementById('honey').getAttribute('check-box-checked'));
          formData.append('pollen', document.getElementById('pollen').getAttribute('check-box-checked'));
          formData.append('propolis', document.getElementById('propolis').getAttribute('check-box-checked'));
          formData.append('royal_jelly', document.getElementById('royal_jelly').getAttribute('check-box-checked'));
          formData.append('bee_venom', document.getElementById('bee_venom').getAttribute('check-box-checked'));
          formData.append('description', document.getElementById('description').getAttribute('check-box-checked'));

          await fetch(serverUrl + '/api/collab/store', {
            method: 'POST',
            body: formData,
          })
              .then(async (response) => {
                if (response.status === 201) {
                  document.getElementById('sendSuccess')?.classList.remove('d-none');
                } else {
                  document.getElementById('sendFail')?.classList.remove('d-none');
                  const errorData = await response.json().catch(() => ({}));
                  throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
                }
              })
              .catch((error) => {
                console.error(error.message);
              });
        }
      } catch (error) {
        console.error('API call failed:', error);
        document.getElementById('sendFail').classList.remove('d-none');
      }
    }

    onMounted(() => {
      type.value = 'real';
      getProvinces();
      document.querySelectorAll('.multiselect-search')?.forEach((e) => {
        e.setAttribute('autocomplete', 'off');
      })
    })
    watch(selectedProvince, (newValue, oldValue) => {
      getCities(newValue);
    })

    const checkUser = ()=>{
      if (!localStorage.getItem('user')) {
        setForm('collaboration');
        document.getElementById('modal-btn-h').click();
      }
    }
    return {
      checkUser,
      storeRequest,
      checkboxToggle, selectedProvince, getProvinces,
      provinces,
      cities, selectedCity,
      getCities,
      store,
      serverUrl,
      isLoading,
      errors,
      setForm,
      user,
      mobile,
      message,
      name,
      email,
      city_id,
      validate,
      validated,
      emptyFieldsCount,
      showModal,selectedFiles,

      type, typeToggle, submit, img1Error, img2Error, reload,
    }
  }

}
</script>

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

:deep(.multiselect-search) {
  width: 100% !important;
  border-radius: 0 !important;
}

:deep(.multiselect,.multiselect-wrapper) {
  width: 100% !important;
  padding-left: 10px !important;

}

:deep(.multiselect-single-label) {
  width: 100% !important;
  right: 0 !important;
  left: unset !important;
  height: 100% !important;
}

</style>
