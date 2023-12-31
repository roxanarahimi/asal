<template>
  <div class="w-100 px-4 text-light "
       style="background: url('/img/loginBack.svg') top center no-repeat; background-size: cover">
    <div class="text-center">
      <img src="/img/Beelogo.png" style="width: 160px" class="my-5" alt="">
    </div>

    <h4 class="my-font my-color text-center mt-4">ثبت نام</h4>


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
          <div id="priceHelp" class="form-text error"></div>
          <p class="form-text error m-0" v-for="e in errors.price">{{ e }}</p>
        </div>
        <div v-if="type=='real'" class="col-12">
          <label>کد ملی</label>
          <input id="nationalCode" type="text" class="form-control form-control-sm" required>
          <div id="priceHelp" class="form-text error"></div>
          <p class="form-text error m-0" v-for="e in errors.price">{{ e }}</p>
        </div>

        <div v-if="type=='legal'" class="col-12">
          <label>نام شرکت</label>
          <input id="name" type="text" class="form-control form-control-sm" required>
          <div id="priceHelp" class="form-text error"></div>
          <p class="form-text error m-0" v-for="e in errors.price">{{ e }}</p>
        </div>
        <div id="operator" v-if="type=='legal'" class="col-12">
          <label>نام و نام خانوادگی نماینده</label>
          <input type="text" class="form-control form-control-sm" required>
          <div id="priceHelp" class="form-text error"></div>
          <p class="form-text error m-0" v-for="e in errors.price">{{ e }}</p>
        </div>
        <div v-if="type=='legal'" class="col-6">
          <label>شناسه ملی</label>
          <input id="nationalCode" type="text" class="form-control form-control-sm" required>
          <div id="priceHelp" class="form-text error"></div>
          <p class="form-text error m-0" v-for="e in errors.price">{{ e }}</p>
        </div>
        <div v-if="type=='legal'" class="col-6">
          <label>شماره ثبت</label>
          <input id="registration_number" type="text" class="form-control form-control-sm" required>
          <div id="priceHelp" class="form-text error"></div>
          <p class="form-text error m-0" v-for="e in errors.price">{{ e }}</p>
        </div>


        <div class="col-6">
          <label>شماره تلفن</label>
          <input id="phone" type="text" class="form-control form-control-sm" required>
          <div id="priceHelp" class="form-text error"></div>
          <p class="form-text error m-0" v-for="e in errors.price">{{ e }}</p>
        </div>
        <div class="col-6">
          <label>شماره موبایل</label>
          <input id="mobile" type="text" class="form-control form-control-sm" required>
          <div id="priceHelp" class="form-text error"></div>
          <p class="form-text error m-0" v-for="e in errors.price">{{ e }}</p>
        </div>


        <div class="col-6">
          <label>استان</label>
          <select id="province_id" class="form-select form-select-sm" required>
            <option></option>
          </select>
          <div id="priceHelp" class="form-text error"></div>
          <p class="form-text error m-0" v-for="e in errors.price">{{ e }}</p>
        </div>
        <div class="col-6">
          <label>شهر</label>
          <select id="city_id" class="form-select form-select-sm" required>
            <option></option>
          </select>
          <div id="priceHelp" class="form-text error"></div>
          <p class="form-text error m-0" v-for="e in errors.price">{{ e }}</p>
        </div>

        <div class="col-12">
          <label>آدرس</label>
          <input id="address" type="text" class="form-control form-control-sm" required>
          <div id="priceHelp" class="form-text error"></div>
          <p class="form-text error m-0" v-for="e in errors.price">{{ e }}</p>
        </div>
        <div class="col-12">
          <label>کد پستی</label>
          <input id="postal_code" type="text" class="form-control form-control-sm" required>
          <div id="priceHelp" class="form-text error"></div>
          <p class="form-text error m-0" v-for="e in errors.price">{{ e }}</p>
        </div>
      </div>

      <div v-if="type=='legal'" class="row">
        <div  class="col-6">
         <drop-zone id="dropZone1" :title="'تصویر آخرین روزنامه رسمی'" :index="1" :has-error="img1Error"  required/>
          <div ></div>

        </div>
        <div  class="col-6">
         <drop-zone id="dropZone2" :title="'تصویر  '" :index="2" :has-error="img2Error"  required/>
          <div ></div>

        </div>
      </div>

      <div class=" d-flex justify-content-center mt-4">
        <button @click.prevent = "submit" class="btn-orange my-font">ثبت</button>
      </div>
    </form>
  </div>
</template>


<script>
import {onMounted, ref, watch} from "vue";
import dropZone from "../components/DropZone";

export default {
  name: "Profile",
  components: { dropZone},
  setup() {

    const errors = ref([])
    const type = ref();
    const img1Error = ref(false)
    const img2Error = ref(false)
    const typeToggle = (index)=>{
      let req = document.querySelectorAll('[required]');
      req.forEach((element) => {
        element.classList.remove('hasError');
      })
      if (type.value == 'real' && index == 2){
        document.querySelectorAll('.registerRadio').forEach((element)=>{
          element.classList.remove('activeRegisterRadio');
        })
        document.querySelector('#legal').classList.add('activeRegisterRadio');
        type.value = 'legal'
      }else if(type.value== 'legal' && index == 1){
        document.querySelectorAll('.registerRadio').forEach((element)=>{
          element.classList.remove('activeRegisterRadio');
        })
        document.querySelector('#real').classList.add('activeRegisterRadio');
        type.value = 'real'

      }

    }
    const submit = ()=>{
      errors.value = [];
      let emptyFieldsCount = 0;
      let req = document.querySelectorAll('[required]');
      req.forEach((element) => {
        if (element.value === "") {
          element.classList.add('hasError');
          element.nextSibling.innerHTML = "فیلد اجباری";
          emptyFieldsCount++;
        } else {
          element.classList.remove('hasError');
          element.nextSibling.innerHTML = "";
        }

        if(document.querySelector('#img1')?.classList.contains('hasError')){
          img1Error.value = true;
        }else{
          img1Error.value = false;

        }
        if(document.querySelector('#img2')?.classList.contains('hasError')){
          img2Error.value = true;
        }else{
          img2Error.value = false;

        }
      });
      if (emptyFieldsCount === 0) {

      }

    }


    onMounted(()=>{
      type.value = 'real'
    })
    return {
      type, typeToggle, submit, errors, img1Error,img2Error
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

</style>
