<template>
  <div class="w-100 px-4 text-light "
       style="background: url('/img/loginBack.svg') top center no-repeat; background-size: cover">
    <div class="text-center">
      <img src="/img/BeeLogo.png" style="width: 160px" class="my-5" alt="">
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


    <form v-if="type=='real'">
      <div class="row">
        <div class="col-12">
          <label>نام و نام خانوادگی</label>
          <input type="text" class="form-control form-control-sm">
        </div>
        <div class="col-12">
          <label>کد ملی</label>
          <input type="text" class="form-control form-control-sm">
        </div>
        <div class="col-6">
          <label>شماره تلفن</label>
          <input type="text" class="form-control form-control-sm">
        </div>
        <div class="col-6">
          <label>شماره موبایل</label>
          <input type="text" class="form-control form-control-sm">
        </div>


        <div class="col-6">
          <label>استان</label>
          <select class="form-select form-select-sm">
            <option></option>
          </select>
        </div>
        <div class="col-6">
          <label>شهر</label>
          <select class="form-select form-select-sm">
            <option></option>
          </select>
        </div>

        <div class="col-12">
          <label>آدرس</label>
          <input type="text" class="form-control form-control-sm">
        </div>
        <div class="col-12">
          <label>کد پستی</label>
          <input type="text" class="form-control form-control-sm">
        </div>
      </div>

      <div class=" d-flex justify-content-center mt-5">
        <button class="btn-orange my-font">ثبت</button>
      </div>
    </form>
    <form v-else>
      <div class="row">
        <div class="col-12">
          <label>نام شرکت</label>
          <input type="text" class="form-control form-control-sm">
        </div>
        <div class="col-12">
          <label>نام و نام خانوادگی نماینده</label>
          <input type="text" class="form-control form-control-sm">
        </div>
        <div class="col-6">
          <label>شناسه ملی</label>
          <input type="text" class="form-control form-control-sm">
        </div>
        <div class="col-6">
          <label>شماره ثبت</label>
          <input type="text" class="form-control form-control-sm">
        </div>
        <div class="col-6">
          <label>شماره تلفن</label>
          <input type="text" class="form-control form-control-sm">
        </div>
        <div class="col-6">
          <label>شماره موبایل</label>
          <input type="text" class="form-control form-control-sm">
        </div>


        <div class="col-6">
          <label>استان</label>
          <select class="form-select form-select-sm">
            <option></option>
          </select>
        </div>
        <div class="col-6">
          <label>شهر</label>
          <select class="form-select form-select-sm">
            <option></option>
          </select>
        </div>

        <div class="col-12">
          <label>آدرس</label>
          <input type="text" class="form-control form-control-sm">
        </div>
        <div class="col-12">
          <label>کد پستی</label>
          <input type="text" class="form-control form-control-sm">
        </div>

        <div class="col-6">
          <label>تصویر آخرین روزنامه رسمی</label>
          <div class="dropAreaContainer"><div class="dropArea"></div></div>

        </div>
        <div class="col-6">
          <label>تصویر</label>
          <div class="dropAreaContainer"><div class="dropArea"></div></div>

        </div>


      <div class=" d-flex justify-content-center mt-5">
        <button class="btn-orange my-font">ثبت</button>
      </div>
</div>
  </form>
  </div>
</template>


<script>
import {onMounted, ref} from "vue";
import {useStore} from "vuex";

export default {
  name: "Profile",
  setup() {

    const type = ref();
    const typeToggle = (index)=>{
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

    onMounted(()=>{
      type.value = 'real'
    })
    return {
      type, typeToggle
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
