<template>
  <div class="py-5 my-padding" style="background-color: #F7941D; border-radius: 24px">

    <h1 class="mb-4 my-font">با ما در ارتباط باشید</h1>


    <p>
      زنبوردار عزیز،الویت عسل لذیذ دریافت بازخورد از محصولات مجموعه می‌باشد، در صورت هرگونه نیاز به انتقال نظرات و
      سوالات خود ،فرم زیر را تکمیل نمایید.
    </p>


    <div class="d-flex justify-content-between">
      <div class="ms-4 d-flex justify-content-start">
        <div class="me-3 check-box" @click="setMsgType('question')">
          <i class="bi bi-check-lg msgQ d-none"></i>
        </div>
        <p  @click="setMsgType('question')">سوال</p>
      </div>
      <div class="d-flex justify-content-start">
        <div class="me-3 check-box" @click="setMsgType('compliment')">
          <i class="bi bi-check-lg msgC"></i>
        </div>
        <p class="me-4"  @click="setMsgType('compliment')">انتقاد و پیشنهاد</p>
      </div>
    </div>

    <div class="mb-3">
      <label for="message">پیام</label>
      <textarea id="message" class="form-control rounded-0"></textarea>
    </div>

    <div class="row" v-if="msgType == 'compliment'">
      <div class="col-6">
        <label for="seri">سری ساخت</label>
        <input id="seri" type="text" class="form-control rounded-0">
      </div>
      <div class="col-6">
        <label for="provinceQ">استان</label>
        <select name="" id="provinceQ" class="form-select rounded-0">
          <option value=""></option>
        </select>
      </div>
      <div class="accordion bg-transparent mb-3 " id="accordionExample" >
        <div class="accordion-item bg-transparent my-border  rounded-0">
          <h2 class="accordion-header justify-content-start">
            <button style="" class=" text-primary accordion-button  bg-transparent  collapsed"
                    type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                    aria-controls="collapseOne">
              سری ساخت چیست؟
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
            <div class="accordion-body p-0 border border-black">
              <img src="/img/sery.png" class="w-100" alt="">
              <p class="p-2" style="font-size: 13px">
                سری ساخت، کدی است که در پشت جلد محصول درج شده است
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-3" v-else>
      <label for="mailQ">ایمیل</label>
      <input id="mailQ" type="text" class="form-control rounded-0">
    </div>


    <div class="d-flex justify-content-start">
      <div class="me-3 check-box" @click="setSenderType()">
        <i class="bi bi-check-lg " :class="{'d-none': !unknownSender}"></i>
      </div>
      <p @click="setSenderType()">ناشناس</p>

    </div>
    <div class="row" v-if="!unknownSender">
      <div class="col-12 mb-3">
        <label for="name">نام و نام خانوادگی</label>
        <input type="text" id="name" class="form-control rounded-0">
      </div>
      <div class="col-6">
        <label for="province_2">شهر</label>
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

</template>

<script>
import {ref} from "vue";

export default {
  name: "ContactForm",
  setup(){
    const msgType = ref('compliment')
    const unknownSender = ref(false)
    const setMsgType = (type)=>{

      if(type == 'question'){
        document.querySelector('.msgQ').classList.remove('d-none')
        document.querySelector('.msgC').classList.add('d-none');
        msgType.value = 'question';
      }else{
        document.querySelector('.msgQ').classList.add('d-none')
        document.querySelector('.msgC').classList.remove('d-none')
        msgType.value = 'compliment';

      }
    }
    const setSenderType = ()=>{
      unknownSender.value = !unknownSender.value;
    }
    return {
      setMsgType, setSenderType, unknownSender, msgType
    }
  }
}
</script>

<style scoped>
.accordion-button::after {
  font-size: 12px !important;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='black'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");

  margin: 0 5px !important;
}
.accordion-button::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230d6efd'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}
</style>