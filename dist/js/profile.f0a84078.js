"use strict";(self["webpackChunkcopa_bee"]=self["webpackChunkcopa_bee"]||[]).push([[845],{6506:function(e,t,s){s.r(t),s.d(t,{default:function(){return p}});var a=s(3396);const c={class:"w-100 px-4 text-light",style:{background:"url('/img/loginBack.svg') top center no-repeat","background-size":"cover"}},n=(0,a.uE)('<p class="mb-0 mt-5"> نام شرکت: ایران گستر شرق</p><p class="mb-0"> کاربر گرامی: محمد احمدی</p><p class="mb-5"> کد مشتری: 152458</p><div class="d-flex justify-content-between"><p class="mb-0 my-color">استعلام اعتبار خرید: </p><div class="d-flex"><div class="px-2"><img src="/img/radioGreen.png" width="18px" alt=""></div><p>بیش از 50% اعتبار</p></div></div><div class="d-flex justify-content-between mb-3"><p class="mb-0 my-color">مانده اعتبار ریالی: </p><p>1.000.000.000 ریال</p></div>',5),r={class:"d-flex justify-content-between"};function o(e,t,s,o,l,i){const u=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",c,[n,(0,a._)("div",r,[(0,a.Wm)(u,{to:"/orders",class:"btn-orange2 text-black pt-3"},{default:(0,a.w5)((()=>[(0,a.Uk)("سفارش ها")])),_:1}),(0,a.Wm)(u,{to:"/products",class:"btn-black2 text-black pt-3 my-color"},{default:(0,a.w5)((()=>[(0,a.Uk)("ثبت سفارش")])),_:1})])])}var l=s(2441),i={name:"Profile",setup(){(0,a.bv)((()=>{console.log(localStorage),e()}));const e=()=>{localStorage.getItem("user")&&axios.get(l.Z.setup().url+"/api/user/"+JSON.parse(localStorage.getItem("user")).id).then((async e=>{200===e.status&&"user"===e.data.scope&&(await localStorage.setItem("user",JSON.stringify(e.data)),this.user=e.data)})).then((()=>{void 0===this.user?.cart?.items?.length||0===this.user?.cart?.items?.length?document.getElementById("cart_count").innerHTML="":document.getElementById("cart_count").innerHTML=this.user?.cart?.items?.length})).catch((e=>{console.log(e)}))};return{updateUserInfo:e}}},u=s(89);const d=(0,u.Z)(i,[["render",o]]);var p=d}}]);
//# sourceMappingURL=profile.f0a84078.js.map