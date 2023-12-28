<template>
  <div class="w-100 px-4 text-light " style="background: url('/img/loginBack.svg') top center no-repeat; background-size: cover">
    <div class="text-center">
      <img src="/img/BeeLogo.png" style="width: 160px" class="my-5" alt="">
    </div>

    <h4 class="my-font my-color text-center mt-4">ثبت نام</h4>


    <div class="d-flex justify-content-between mt-5">
      <div class="d-flex pe-4">
        <p class="me-2">شخص حقیقی</p>
        <div class="registerRadio activeRegisterRadio"></div>
      </div>
      <div class="d-flex ">
        <p class="me-2">شخص حقوقی</p>
        <div class="registerRadio "></div>
      </div>
    </div>




    <form>

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
  </div>
</template>


<script>
import {onMounted, ref} from "vue";
import {useStore} from "vuex";

export default {
  name: "Profile",
  setup() {

    return {}
  }

}
</script>

<style scoped>
label{
  color: #FFB571 !important;
  font-size: 13px;
  margin: 5px;
}
</style>
