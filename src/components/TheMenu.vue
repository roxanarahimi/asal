<template>
  <div class="my-font fw-bold " style="position: relative; font-size: 16px !important">
    <nav class="d-flex justify-content-between" style="height: 50px;position: relative; color: #F7941D">
      <div @click="menuToggle" class="pointer"><img src="/img/Burgerbutton.png" class="m-3" style="width: 46px" alt="">
      </div>
      <img
          v-if="$route.name == 'register' || $route.name == 'login' || $route.name == 'profile' || $route.name == 'products' || $route.name == 'cart' || $route.name == 'orders'"
          src="/img/Beelogo.png" class="m-3" width="56px" height="18px" alt="">
      <img v-else src="/img/logo.svg" style="width: 110px ; position: absolute; left: 0; top: 0;" alt="">

    </nav>

    <div id="menuContent" class="w-100 vh-100 p-3 pb-0"
         style="z-index: 2000; background: url('/img/menub.svg')center center no-repeat; background-size: 100%; background-color:  #F7941D; color: black; position: absolute;opacity: 0; right: -100%; top:0; transition: 1s ease">

      <div class="d-flex justify-content-between">
        <div class="d-flex pointer" @click="menuToggle">
          <i style="font-size: 25px; margin-top: -5px" class="bi bi-arrow-right"></i>
          <small>بازگشت</small>
        </div>
        <div>
          <img src="/img/BeelogoBlack.png" width="56px" alt="">
        </div>
      </div>


      <div style="display: grid; height: calc(100vh - 70px);">
       <div style="align-self: start">
         <ul style="list-style: none; " class="mt-4 mb-0">
           <li :id="item.name" v-for="item in links" style="font-size: 18px !important" class="my-font fw-bolder mb-3">
             <div v-if="item.subsets" class="" style=" transition: all 2s ease !important;">
              <div class="d-flex">
                <div class="text-start " style="width: 15px; height: 15px;padding-right: 1px ; margin-left: 2px">
                  <img v-if="$route.name == item.name" src="/img/dotB.png" class="" style="width: 80%" alt="">
                </div>
                <p :id="item.name+'submenu'" class="m-0 cursor-pointer" data-flag="0" @click="subMenuToggle(item.name+'submenu')">{{ item.title }}</p>
              </div>
               <ul :id="item.name+'submenu-ul'" style="list-style: none;" class="mt-2 ms-5 mb-0 h-0">
                 <li :id="item.name" v-for="section in item.subsets"  class="cursor-pointer mb-2"  style="font-size: 15px !important">
                   <router-link :to="item.link" @click="menuToggle(section.id),subMenuToggle(item.name+'submenu')">{{ section.title }}</router-link>
                 </li>
               </ul>

             </div>
             <div v-else class="d-flex">
               <div class="text-start " style="width: 15px; height: 15px;padding-right: 1px ; margin-left: 2px">
                 <img v-if="$route.name == item.name" src="/img/dotB.png" class="" style="width: 80%" alt="">
               </div>
               <router-link @click="menuToggle" :to="item.link">{{ item.title }}</router-link>
             </div>
           </li>
         </ul>
         <div @click="menuToggle('contact')" style="font-size: 18px !important; padding-right:calc( 2rem + 15px); cursor: pointer" >ارتباط با ما</div>

       </div>
        <div style="font-size: 18px !important; align-self: end" class="my-font fw-bolder mx-auto">
          <div class="d-flex">
            <div class="text-start" style="width: 15px; height: 15px; ">
              <img v-if="$route.name == 'register'" src="/img/dotB.png" class="w-100" alt="">
            </div>
            <router-link @click="menuToggle" to="register">ایجاد حساب کاربری</router-link>
          </div>
        </div>
      </div>
      </div>

    </div>


</template>

<script>
import {onBeforeMount, onMounted, ref} from "vue";
import App from "@/App";

export default {
  name: "TheMenu",

  components: {App},
  updated() {
    console.log('updated')
    this.checkUser()
  },
  setup() {
    const flag = ref(0);
    const links = ref([])
    onBeforeMount(() => {
      links.value = [
        {title: 'خانه', link: '/', name: 'home'},
        {title: 'محصولات', link: '/product', name: 'product',
          subsets:[
            {title:'خمیر شیرین چیست؟', id: 'what-is'},
            {title:'انواع خوراک زنبور عسل',id:'types'},
            {title:'معرفی کوپابی (Copabee)',id: 'copabee'},
            {title:' روش  مصرف',id:'usage'},
            {title:'مستندات علمی و آزمایشگاهی', id: 'documents'} ,
            {title:'سبد محصولات کوپابی',id:'basket'}

          ]
        },
        // {title: 'نمایندگی های فعال', link: '/subs', name: 'subs'},
        {title: 'درباره ما', link: '/about', name: 'about'},
        {title: 'شرکای ما', link: '/participants', name: 'participants'},
        {title: 'سوالات متداول', link: '/faq', name: 'faq'},

        // {title: 'تازه های زنبورداری', link: '/faq', name: 'faq'},
        // {title: 'اخبار و رویدادها', link: '/faq', name: 'faq'},
        {title: 'همکاری با زنبورداران', link: '/collaboration', name: 'collaboration'},

        // {title: 'حساب کاربری', link: '/login', name: 'login'},
        // {title: 'سفارشات', link: '/orders', name: 'orders'},
        // {title: 'خروج', link: '/', name: 'logout'},
        // {title: 'ارتباط با ما', link: '/contact', name: 'contact'},
      ];

    });
    onMounted(() => {
      // if (JSON.parse(localStorage.getItem('user')) != null) {
      //   document.querySelector('#logout').addEventListener('click', () => {
      //     logout();
      //   })
      // }
    })

    const menuToggle = (param) => {
      if (flag.value) {
        document.querySelector('#menuContent').style.right = '-100%';
        document.querySelector('#menuContent').style.opacity = '0';
        flag.value = 0;
        document.querySelector('body').style.height = 'auto';
        document.querySelector('body').style.overflowY = 'scroll';
      } else {
        document.querySelector('#menuContent').style.right = '0';
        document.querySelector('#menuContent').style.opacity = '1';
        flag.value = 1;

        document.querySelector('body').style.height = '100vh';
        document.querySelector('body').style.overflowY = 'hidden';
      }
      if (param){
        if(document.getElementById(param)){
          document.getElementById(param).scrollIntoView();
        }else{
          localStorage.setItem('scroll',param);
        }
      }else{
        document.querySelector('#app').scrollIntoView();

      }
    }
    const subMenuToggle = (id) => {
      let flag = document.getElementById(id).getAttribute('data-flag');
      if (flag == 0){
        document.getElementById(id+'-ul').classList.remove('h-0');
        document.getElementById(id).setAttribute('data-flag',1);
      }else{
        document.getElementById(id+'-ul').classList.add('h-0');
        document.getElementById(id).setAttribute('data-flag',0);
      }
    }

    const logout = () => {
      localStorage.removeItem('user');
      localStorage.removeItem('expire');
      localStorage.removeItem('token');
      console.log('logged out:', localStorage)
      window.location = '/login'

    }


    return {
      links, flag, menuToggle, logout,subMenuToggle
    }
  },
  methods: {

    checkUser() {
      if (JSON.parse(localStorage.getItem('user')) != null) {
        let date = new Date().toJSON();
        date = date.split('.')[0].toString();
        date = date.replace('T', ' ');
        let now = Date.parse(date);
        let expire = Date.parse(localStorage.getItem('expire'))
        if (now > expire) {
          this.logout();
        } else {
          axios.post(App.setup().url + '/api/check/user/token', {
            id: JSON.parse(localStorage.getItem('user')).id,
            time: date
          })
              .then((response) => {
                localStorage.setItem('expire', response.data.expire)
                // console.log(localStorage.getItem('expire'))
              }).catch((error) => console.error(error));

        }
      }
    },
  }
}
</script>

<style scoped>
a, a:hover {
  color: black !important;
  text-decoration: none !important;
}
</style>