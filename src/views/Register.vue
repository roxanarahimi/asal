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
        ثبت مشخصات فردی و بارگذاری مدارک (مانند پروانه زنبورداری یا کارت ملی) به منظور تأیید هویت و تسهیل فرآیند خرید
        انجام می‌گیرد.
        پس از بررسی و تأیید اطلاعات توسط کارشناسان فروش کوپابی، امکان نهایی‌سازی و پیگیری سفارش‌ها برای شما فعال خواهد
        شد.
      </p>
      <p>
        <i class="bi bi-check-square-fill text-success"></i>
        با ثبت‌نام، از پشتیبانی تخصصی، اطلاع‌رسانی محصولات جدید و پیشنهادهای ویژه نیز بهره‌مند می‌شوید.
      </p>
    </div>

    <div class="d-flex justify-content-between justify-content-lg-start mt-5">
      <div class="d-flex pe-4">
        <div @click="typeToggle(1)" id="person" class="me-2 registerRadio activeRegisterRadio"></div>
        <p @click="typeToggle(1)" class="pointer">شخص حقیقی</p>
      </div>
      <div class="d-flex ">
        <div @click="typeToggle(2)" id="company" class="me-2 registerRadio "></div>
        <p @click="typeToggle(2)" class="pointer">شخص حقوقی</p>
      </div>
    </div>


    <form>
      <div class="row">
        <div class="col-12 col-lg-3">
          <label v-if="type==='person'">نام و نام خانوادگی</label>
          <label v-else>نام شرکت</label>
          <input id="name" type="text" class="form-control form-control-sm" required>
          <div id="nameHelp" class="form-text error"></div>
          <p class="form-text error m-0" v-for="e in errors.name">{{ e }}</p>
        </div>
        <div v-if="type=='person'" class="col-6 col-lg-3">
          <label>کد ملی</label>
          <input id="national_id" type="text" class="en form-control form-control-sm" required>
          <div id="national_idHelp" class="form-text error"></div>
          <p class="form-text error m-0" v-for="e in errors.national_id">{{ e }}</p>
        </div>

        <div v-if="type=='person'" class="col-6 col-lg-3">
          <label>تاریخ تولد</label>
          <date-picker v-model="date" :locale-config="{
    fa: {
      displayFormat: 'jYYYY/jMM/jDD',
      lang: { label: 'شمسی' }
    },
    en: {
      displayFormat: 'YYYY/MM/DD',
      lang: { label: 'Gregorian' }
    }
  }" locale="fa,en"/>
          <!--          <input id="birth_date" type="text" class="en form-control form-control-sm" required>-->
          <!--          <div id="birth_dateHelp" class="form-text error"></div>-->
          <p class="form-text error m-0" v-for="e in errors.birth_date">{{ e }}</p>
        </div>

        <div id="contact_person" v-if="type==='company'" class="col-12 col-lg-3">
          <label>نام و نام خانوادگی نماینده</label>
          <input type="text" class="form-control form-control-sm" required>
          <div id="contact_personHelp" class="form-text error"></div>
          <p class="form-text error m-0" v-for="e in errors.contact_person">{{ e }}</p>
        </div>
        <div v-if="type==='company'" class="col-6 col-lg-3">
          <label>شناسه ملی</label>
          <input id="national_id" type="text" class="en form-control form-control-sm" required>
          <div id="national_idHelp" class="form-text error"></div>
          <p class="form-text error m-0" v-for="e in errors.national_id">{{ e }}</p>
        </div>
        <div v-if="type=='company'" class="col-6 col-lg-3">
          <label>شماره ثبت</label>
          <input id="publish_code" type="text" class="en form-control form-control-sm" required>
          <div id="publish_codeHelp" class="form-text error"></div>
          <p class="form-text error m-0" v-for="e in errors.publish_code">{{ e }}</p>
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

        <div class="col-6 col-lg-3">
          <label>استان</label>
          <div>
            <Multiselect
                v-model="selectedProvince"
                :options="provinces"
                :is-selected="user?.city?.province_id"
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
          <div id="province_idHelp" class="form-text error"></div>
          <p class="form-text error m-0" v-for="e in errors.province_id">{{ e }}</p>
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

        <div class="col-12 col-lg-3">
          <label>کد پستی</label>
          <input id="postal_code" type="text" class="en form-control form-control-sm" required>
          <div id="postal_codeHelp" class="form-text error"></div>
          <p class="form-text error m-0" v-for="e in errors.postal_code">{{ e }}</p>
        </div>
        <div class="col-12" :class="{'col-lg-9': type==='company'}">
          <label>آدرس</label>
          <input id="address" type="text" class="form-control form-control-sm" required>
          <div id="addressHelp" class="form-text error"></div>
          <p class="form-text error m-0" v-for="e in errors.address">{{ e }}</p>
        </div>

      </div>

      <div>
        <div class="row justify-content-lg-center">
          <div class="col-12 col-lg-5 mt-5">
            <drop-zone id="dropZone1" :title="title" v-model:files="selectedFiles" :index="1" :has-error="img1Error"/>
            <div></div>
          </div>
        </div>
      </div>


      <div class=" d-flex justify-content-center mt-4">
        <button v-if="!validated" @click.prevent="validate" class="btn-orange my-font">validate</button>
        <button v-if="validated" @click.prevent="submit" class="btn-orange my-font">ثبت</button>
<!--        <button @click.prevent="submit" class="btn-orange my-font">ثبت</button>-->
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
import Loader from "@/components/Loader.vue";
import DatePicker from 'vue3-persian-datetime-picker'


export default {
  name: "Register",
  components: {dropZone, Multiselect, Loader, DatePicker},
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
    const provinces = ref([]);
    const cities = ref([]);
    const selectedCity = ref();
    const selectedProvince = ref()
    const selectedFiles = ref([])
    const file = ref([])
    const title = ref('تصویر کارت ملی یا شناسنامه زنبورداری')

    const type = ref();
    const img1Error = ref(false)
    const date = ref()
    const validated = ref(false)

    const typeToggle = (index) => {
      errors.value = [];
      let req = document.querySelectorAll('input');
      req.forEach((element) => {
        element.classList?.remove('hasError');
        element.value = ""
        // element.nextSibling.innerHTML = "";
        img1Error.value = false;
      })
      if (type.value === 'person' && index === 2) {
        document.querySelectorAll('.registerRadio').forEach((element) => {
          element.classList?.remove('activeRegisterRadio');
        })
        document.querySelector('#company').classList.add('activeRegisterRadio');
        title.value ='تصویر آخرین روزنامه رسمی';
        type.value = 'company'
      } else if (type.value === 'company' && index === 1) {
        document.querySelectorAll('.registerRadio').forEach((element) => {
          element.classList?.remove('activeRegisterRadio');
        })
        document.querySelector('#person').classList.add('activeRegisterRadio');
        title.value ='تصویر کارت ملی یا شناسنامه زنبورداری';
        type.value = 'person'

      }

    }

    const reload = () => {
      window.location.reload();
    }

    const setForm = async (form) => {
      localStorage.setItem('form', form);
    }
    const validate = () => {
      validated.value = false;
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
      // if (document.querySelector('#img')?.classList.contains('hasError')) {
      //   img1Error.value = true;
      // }
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
      if(emptyFieldsCount.value===0){validated.value = true; showModal();}

    }
    const showModal = async () => {
      document.getElementById('modal-btn-h').click();
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
        x.firstChild.classList?.remove('opacity-0');
      } else {
        x.firstChild.classList.add('opacity-0');
      }
      document.getElementById(id).setAttribute('check-box-checked', y);
    }
    const submit = async () => {
      try {
        document.getElementById('sendSuccess')?.classList.add('d-none');
        document.getElementById('sendFail')?.classList.add('d-none');
        // if (emptyFieldsCount.value === 0) {
          // if (!file.value.length) {
          //   alert('Please upload at least one image.')
          //   return
          // }

          const formData = new FormData();
        selectedFiles.value.forEach((file, i) => {
          formData.append('images[]', file)
        });
        formData.append('name', document.getElementById('name').value);
          formData.append('national_id', document.getElementById('national_id').value);
          formData.append('birth_date', document.querySelector('.persian_date_picker_input').value);
          formData.append('mobile', document.getElementById('mobile').value);
          formData.append('phone', document.getElementById('phone').value);
          formData.append('city_id', selectedCity.value);
          formData.append('postal_code', document.getElementById('postal_code').value);
          formData.append('address', document.getElementById('address').value);
          formData.append('contact_person', document.getElementById('contact_person')?.value);
          formData.append('type', type.value);

          console.log('fd', formData);

          await fetch(serverUrl + '/api/user/store', {
            method: 'POST',
            body: formData,
          })
              .then(async (response) => {
                if (response.status === 201 || response.status === 200) {
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
        // }
      } catch (error) {
        console.error('API call failed:', error);
        document.getElementById('sendFail')?.classList.remove('d-none');
      }
    }

    onMounted(() => {
      type.value = 'person';
      checkUser();
      getProvinces();
      // document.querySelectorAll('.multiselect-search')?.forEach((e) => {
      //   e.setAttribute('autocomplete', 'off');
      // })
    })
    watch(selectedProvince, (newValue) => {
      getCities(newValue);
    })

    const checkUser = () => {
      if (!localStorage.getItem('user')) {
        setForm('register');
        // document.getElementById('modal-btn-h').click();
      }else{
        window.location = '/profile';
      }
    }
    return {
      checkUser,  submit, checkboxToggle, selectedProvince, getProvinces, provinces, cities, selectedCity,
      getCities, store, serverUrl, isLoading, errors, setForm, user, mobile, message, name, email, city_id,
      validate,validated, emptyFieldsCount, showModal, date, selectedFiles,title, type, typeToggle, img1Error,
      reload,file,

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
