<template>
  <div style="position: relative;">
    <nav class="d-flex justify-content-between" style="height: 50px;position: relative; color: #F7941D">
      <div @click = "menuToggle" class="pointer"><img src="/img/Burgerbutton.png" class="m-3" style="width: 46px" alt=""></div>
      <img src="/img/logo.png" style="width: 110px ; position: absolute; left: 0; top: 0;" alt="">
    </nav>

    <div id="menuContent" class="w-100 vh-100 p-3" style="background: url('/img/Hive.png')center center no-repeat; background-size: cover; background-color:  #F7941D; color: black; position: absolute;opacity: 0; right: -100%; top:0; transition: 1s ease">

      <div class="d-flex justify-content-between">
        <div class="d-flex pointer"  @click = "menuToggle">
          <i style="font-size: 25px; margin-top: -5px" class="bi bi-arrow-right"></i>
          <small>بازگشت</small>
        </div>
        <div>
          <img src="/img/BeeLogoBlack.png" width="56px" alt="">
        </div>
      </div>


      <div style="display: grid; height: calc(100vh - 50px); font-size: 16px">
        <ul style="list-style: none; align-self: center">
          <li v-for="item in links" class="d-flex">
            <div class="text-start" style="width: 15px; height: 15px; "><img v-if="$route.name == item.name" src="/img/dotBlack.png" style="" alt=""></div>
            <router-link @click="menuToggle" :to="item.link" >{{ item.title }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>


</template>

<script>
import {ref} from "vue";

export default {
  name: "TheMenu",
  setup(){
    const flag = ref(0);
    const links = [
      { title: 'خانه', link: '/', name: 'home' },
      { title: 'محصول', link: '/product', name: 'product' },

      // { title: 'دریافت پیش فاکتور', link: '/factor', name: 'factor' },
      // { title: 'نمایندگی های فعال', link: '/subs', name: 'subs' },
      { title: 'درباره ما', link: '/about', name: 'about' },
      // { title: 'شرکای ما', link: '/colabs', name: 'colabs' },
      { title: 'سوالات متداول', link: '/faq', name: 'faq' },
      // { title: 'ارتباط با ما', link: '/contact', name: 'contact' },
      { title: 'ورود', link: '/login', name: 'login' },
      { title: 'ثبت نام', link: '/register', name: 'register' },
      { title: 'پروفایل', link: '/profile', name: 'profile' },
      { title: 'خروج', link: '/', name: 'logout' },
    ];
    const menuToggle = ()=>{
      if(flag.value){
        document.querySelector('#menuContent').style.right = '-100%';
        document.querySelector('#menuContent').style.opacity = '0';
        flag.value = 0;
      }else{
        document.querySelector('#menuContent').style.right = '0';
        document.querySelector('#menuContent').style.opacity = '1';
        flag.value = 1;
      }
    }
    return{
      links, flag, menuToggle
    }
  }
}
</script>

<style scoped>
a, a:hover{
  color: black !important;
  text-decoration: none !important;
}
</style>