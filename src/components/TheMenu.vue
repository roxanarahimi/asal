<template>
  <div class="d-none d-xl-block my-font fw-bold w-100 bg-black text-light" style="position: fixed;top:0;left:0; font-size: 16px !important; z-index:100">
    <div class="d-flex justify-content-between w-100">
      <nav class="navbar navbar-expand-sm bg-transparent w-100 pe-5 ps-3">
        <div class="container-fluid pe-5 ps-3  my-color">
          <a href="/" class="navbar-brand" >کوپابی</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse mb-0" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mt-1">
              <li v-for="(item,index) in links" :key="item" class="nav-item px-1 px-xxl-3" :class="{'dropdown': item.subsets}">
                <a :href="item.link" class="nav-link my-font text-white dr_link"
                   :class="{'active-lg': $route.name === item.name || $route.name+'-'+$route.params.id == item.name,'dropdown-toggle': item.subsets}"
                   aria-current="page">{{ item.title }}</a>
                <ul class="dropdown-m my-border rounded bg-black w-auto px-4 py-2 text-start " v-if="item.subsets"
                    style="list-style: none !important; position: absolute !important; font-size: 14px">
                  <li v-for="section in item.subsets">
<!--                    <a class="dropdown-item mb-2 text-white" >{{ section.title }}</a>-->
                    <router-link :to="item.link" class="dropdown-item mb-2 text-white"
                                 @click="menuToggle(section.id),subMenuToggle(item.name+'submenu')">{{ section.title }}
                    </router-link>
                  </li>
                </ul>
              </li>
            </ul>
            <!--           <form class="d-flex" role="search">-->
            <!--             <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>-->
            <!--             <button class="btn btn-outline-success" type="submit">Search</button>-->
            <!--           </form>-->
            <div>
              <a v-if="user" class="text-white"  :class="{'my-color':  $route.name == 'profile'}" href="/profile" >پروفایل من</a>
              <a v-if="user"  class="text-white cursor-pointer ms-2 ms-xl-5" @click="logout">خروج</a>
<!--              <a v-if="!user" class="text-white" data-bs-toggle="modal" data-bs-target="#AuthorizeModal" >ورود</a>-->
              <a v-if="!user" class="text-white ms-2 ms-lg-5" :class="{'my-color':  $route.name == 'register'}" href="/register" >ایجاد حساب کاربری</a>
            </div>
          </div>
        </div>
      </nav>
<!--      <div>-->
<!--        <img v-if="$route.name == 'register' || $route.name == 'login' || $route.name == 'profile' || $route.name == 'products' || $route.name == 'cart' || $route.name == 'orders'" src="/img/Beelogo.png" class="m-3" width="56px" height="18px" alt="">-->
        <img src="/img/logo.svg" style="width: 109px ; position: absolute; left: 0; top: 0;" alt="">
<!--      </div>-->
    </div>
  </div>
  <div class="d-xl-none my-font fw-bold w-100 bg-transparent" style="position: absolute;top:0;left:0; font-size: 16px !important; z-index:100">
    <div class="d-flex justify-content-between w-100">
      <nav class="d-flex justify-content-between" style="height: 50px; color: #F7941D">
        <div @click="menuToggle" class="pointer">
          <img src="/img/Burgerbutton.png" class="m-3" style="width: 46px" alt="">
        </div>

      </nav>
      <div>
<!--        <img-->
<!--            v-if="$route.name == 'register' || $route.name == 'login' || $route.name == 'profile' || $route.name == 'products' || $route.name == 'cart' || $route.name == 'orders'"-->
<!--            src="/img/Beelogo.png" class="m-3" width="56px" height="18px" alt="">-->
        <img  src="/img/logo.svg" style="width: 109px ; position: absolute; left: 0; top: 0;" alt="">
      </div>
    </div>

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


      <div style="display: grid; height: calc(100vh - 145px);">
        <div style="align-self: start">
          <ul style="list-style: none; " class="mt-4 mb-0">
            <li :id="item.name" v-for="item in links" style="font-size: 18px !important" class="my-font fw-bolder mb-3">
              <div v-if="item.subsets" class="" style=" transition: all 2s ease !important;">
                <div class="d-flex">
                  <div class="text-start " style="width: 15px; height: 15px;padding-right: 1px ; margin-left: 2px">
                    <img v-if="$route.name == item.name" src="/img/dotB.png" class="" style="width: 80%" alt="">
                  </div>
                  <p :id="item.name+'submenu'" class="m-0 cursor-pointer" data-flag="0"
                     @click="subMenuToggle(item.name+'submenu')">{{ item.title}}</p>
                </div>
                <ul :id="item.name+'submenu-ul'" style="list-style: none;" class="mt-2 ms-5 mb-0 h-0">
                  <li :id="item.name" v-for="section in item.subsets" class="cursor-pointer mb-2"
                      style="font-size: 15px !important">
                    <router-link :to="item.link" class="a"
                                 @click="menuToggle(section.id),subMenuToggle(item.name+'submenu')">{{ section.title }}
                    </router-link>
                  </li>
                </ul>

              </div>
              <div v-else class="d-flex">
                <div class="text-start " style="width: 15px; height: 15px;padding-right: 1px ; margin-left: 2px">
                  <img v-if="$route.name == item.name" src="/img/dotB.png" class="" style="width: 80%" alt="">
                  <img v-if="$route.name+'-'+$route.params.id == item.name" src="/img/dotB.png" class="" style="width: 80%" alt="">

                </div>
                <a :href="item.link" class="a" @click="menuToggle" >{{ item.title }}</a>
              </div>
            </li>
          </ul>
          <div @click="menuToggle('contact')"
               style="font-size: 18px !important; padding-right:calc( 2rem + 15px); cursor: pointer">ارتباط با ما
          </div>

        </div>
        <div style="font-size: 18px !important; align-self: end" class="my-font fw-bolder mx-auto">
          <div v-if="user" class="d-flex">
            <div class="text-start me-2" style="width: 15px; height: 15px; ">
              <img v-if="$route.name == 'profile'" src="/img/dotB.png" class="w-100" alt="">
            </div>
            <a  href="/profile" class="a me-5 pe-5 " @click="menuToggle">پروفایل</a>
            <a  class="a cursor-pointer" @click="logout">خروج</a>
          </div>
          <div v-else class="d-flex">
            <div class="text-start me-2" style="width: 15px; height: 15px; ">
              <img v-if="$route.name == 'register'" src="/img/dotB.png" class="w-100" alt="">
            </div>
            <a href="/register" class="a" @click="menuToggle">ایجاد حساب کاربری</a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {computed, onBeforeMount, onMounted, ref, watch} from "vue";
import App from "@/App";

export default {
  name: "TheMenu",

  components: {App},
  updated() {
    console.log('updated')
    // this.checkUser();

  },
  setup() {
    const flag = ref(0);
    const links = ref([])
    const user = JSON.parse(localStorage.getItem('user'));
    onBeforeMount(() => {
      // user.value = JSON.parse(localStorage.getItem('user'));
      // console.log(user.value);
      links.value = [
        {title: 'خانه', link: '/', name: 'home'},
        {
          title: 'محصولات', link: '/product', name: 'product',
          subsets: [
            {title: 'خمیر شیرین چیست؟', id: 'what-is'},
            {title: 'انواع خوراک زنبور عسل', id: 'types'},
            {title: 'معرفی کوپابی (Copabee)', id: 'copabee'},
            {title: ' روش  مصرف', id: 'usage'},
            {title: 'مستندات علمی و آزمایشگاهی', id: 'documents'},
            {title: 'سبد محصولات کوپابی', id: 'basket'}

          ]
        },
        // {title: 'نمایندگی های فعال', link: '/subs', name: 'subs'},
        {title: 'درباره ما', link: '/about', name: 'about'},
        {title: 'شرکای ما', link: '/participants', name: 'participants'},
        {title: 'سوالات متداول', link: '/faq', name: 'faq'},

        {title: 'تازه های زنبورداری', link: '/contents/1', name: 'contents-1'},
        {title: 'اخبار و رویدادها', link: '/contents/2', name: 'contents-2'},
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
        document.querySelector('body').classList.add('h-auto');
        document.querySelector('body').classList.remove('vh-100');
        document.querySelector('body').classList.remove('overflow-y-hidden');
      } else {
        document.querySelector('#menuContent').style.right = '0';
        document.querySelector('#menuContent').style.opacity = '1';
        flag.value = 1;

        document.querySelector('body').classList.remove('h-auto');
        document.querySelector('body').classList.add('vh-100');
        document.querySelector('body').classList.add('overflow-y-hidden');
      }
      if (param) {
        if (document.getElementById(param)) {
          document.getElementById(param).scrollIntoView();
        } else {
          localStorage.setItem('scroll', param);
        }
      } else {
        document.querySelector('#app').scrollIntoView();

      }
    }
    const subMenuToggle = (id) => {
      let flag = document.getElementById(id).getAttribute('data-flag');
      if (flag == 0) {
        document.getElementById(id + '-ul').classList.remove('h-0');
        document.getElementById(id).setAttribute('data-flag', 1);
      } else {
        document.getElementById(id + '-ul').classList.add('h-0');
        document.getElementById(id).setAttribute('data-flag', 0);
      }
    }

    const logout = () => {
      localStorage.removeItem('user');
      window.location = '/';
      // localStorage.removeItem('expire');
      // localStorage.removeItem('token');
    }

    watch(JSON.parse(localStorage.getItem('user')), (newVal, oldVal) => {
      console.log(`Width changed from ${oldVal} → ${newVal}`)
      user.value = newVal;
    });

    return {
      links, flag, menuToggle, logout, subMenuToggle,user
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
.a, .a:hover {
  color: black !important;
  text-decoration: none !important;
}

.navbar-brand {
  color: inherit !important;
}
a{
  white-space: nowrap;
}
.dropdown{
  position: relative;
  /*overflow: hidden;*/
}

.dropdown-item {
  text-align: start;
  height: 0 !important;
}
.dropdown-m {
  position: absolute;
  top: 40px;
  right:0;
  opacity: 0;
  display: none;
  transition: 1s ease;
}

.dropdown:hover .dropdown {
  /*overflow: visible;*/
}
.dropdown:hover .dropdown-m {
  opacity: 1;
  display: block;

  height: 200px !important;
}


.dropdown:hover .dropdown-item {
  height: auto !important;
  text-align: start;
  font-weight: bolder;
  font-size: 15px;
}
.active-lg{
  color: #F7941D !important;
  font-weight: bolder;
}
</style>