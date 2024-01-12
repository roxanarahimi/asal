<template>
  <div style="position: relative;">
    <nav class="d-flex justify-content-between" style="height: 50px;position: relative; color: #F7941D">
      <div @click="menuToggle" class="pointer"><img src="/img/Burgerbutton.png" class="m-3" style="width: 46px" alt="">
      </div>
      <img
          v-if="$route.name == 'register' || $route.name == 'login' || $route.name == 'profile' || $route.name == 'products' || $route.name == 'cart' || $route.name == 'orders'"
          src="/img/Beelogo.png" class="m-3" width="56px" height="18px" alt="">
      <img v-else src="/img/logo.svg" style="width: 110px ; position: absolute; left: 0; top: 0;" alt="">

    </nav>

    <div id="menuContent" class="w-100 vh-100 p-3"
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


      <div style="display: grid; height: calc(100vh - 50px); font-size: 16px">
        <ul style="list-style: none; align-self: center">
          <li :id="item.name" v-for="item in links" class="d-flex">
            <div class="text-start" style="width: 15px; height: 15px; "><img v-if="$route.name == item.name"
                                                                             src="/img/dotBlack.png" style="" alt="">
            </div>
            <router-link @click="menuToggle" :to="item.link">{{ item.title }}</router-link>
          </li>
        </ul>
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
          // {title: 'محصول', link: '/product', name: 'product'},
          // { title: 'نمایندگی های فعال', link: '/subs', name: 'subs' },
          {title: 'درباره ما', link: '/about', name: 'about'},
          {title: 'شرکای ما', link: '/collaboration', name: 'collaboration'},
          {title: 'سوالات متداول', link: '/faq', name: 'faq'},
          // {title: 'حساب کاربری', link: '/login', name: 'login'},
          // {title: 'سفارشات', link: '/orders', name: 'orders'},
          // {title: 'خروج', link: '/', name: 'logout'},
        ];

    });
    onMounted(() => {
      // if (JSON.parse(localStorage.getItem('user')) != null) {
      //   document.querySelector('#logout').addEventListener('click', () => {
      //     logout();
      //   })
      // }
    })

    const menuToggle = () => {
      if (flag.value) {
        document.querySelector('#menuContent').style.right = '-100%';
        document.querySelector('#menuContent').style.opacity = '0';
        flag.value = 0;
      } else {
        document.querySelector('#menuContent').style.right = '0';
        document.querySelector('#menuContent').style.opacity = '1';
        flag.value = 1;
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
      links, flag, menuToggle, logout
    }
  },
  methods: {

    checkUser() {
      if (JSON.parse(localStorage.getItem('user')) != null) {
        let date = new Date().toJSON();
         date = date.split('.')[0].toString();
         date = date.replace('T',' ');
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
                localStorage.setItem('expire',response.data.expire)
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