(function(){"use strict";var e={3840:function(e,t,n){var o=n(9242),i=n(3396);const a={class:"bg-black"},r={class:""};function l(e,t,n,o,l,s){const c=(0,i.up)("the-menu"),d=(0,i.up)("router-view"),p=(0,i.up)("the-footer");return(0,i.wg)(),(0,i.iD)("div",a,[(0,i.Wm)(c),(0,i._)("div",r,[(0,i.Wm)(d)]),(0,i.Wm)(p)])}var s=n(7139);const c=e=>((0,i.dD)("data-v-5d989bba"),e=e(),(0,i.Cn)(),e),d={style:{position:"relative"}},p={class:"d-flex justify-content-between",style:{height:"50px",position:"relative",color:"#F7941D"}},u=c((()=>(0,i._)("img",{src:"/img/Burgerbutton.png",class:"m-3",style:{width:"46px"},alt:""},null,-1))),g=[u],v={key:0,src:"/img/Beelogo.png",class:"m-3",width:"56px",height:"18px",alt:""},m={key:1,src:"/img/logo.svg",style:{width:"110px",position:"absolute",left:"0",top:"0"},alt:""},b={id:"menuContent",class:"w-100 vh-100 p-3",style:{background:"url('/img/Hive.png')center center no-repeat","background-size":"cover","background-color":"#F7941D",color:"black",position:"absolute",opacity:"0",right:"-100%",top:"0",transition:"1s ease"}},f={class:"d-flex justify-content-between"},h=c((()=>(0,i._)("i",{style:{"font-size":"25px","margin-top":"-5px"},class:"bi bi-arrow-right"},null,-1))),y=c((()=>(0,i._)("small",null,"بازگشت",-1))),x=[h,y],w=c((()=>(0,i._)("div",null,[(0,i._)("img",{src:"/img/BeelogoBlack.png",width:"56px",alt:""})],-1))),k={style:{display:"grid",height:"calc(100vh - 50px)","font-size":"16px"}},C={style:{"list-style":"none","align-self":"center"}},_={class:"d-flex"},z={class:"text-start",style:{width:"15px",height:"15px"}},T={key:0,src:"/img/dotBlack.png",style:{},alt:""};function j(e,t,n,o,a,r){const l=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",d,[(0,i._)("nav",p,[(0,i._)("div",{onClick:t[0]||(t[0]=(...e)=>o.menuToggle&&o.menuToggle(...e)),class:"pointer"},g),"register"==e.$route.name||"login"==e.$route.name||"profile"==e.$route.name||"products"==e.$route.name||"cart"==e.$route.name||"orders"==e.$route.name?((0,i.wg)(),(0,i.iD)("img",v)):((0,i.wg)(),(0,i.iD)("img",m))]),(0,i._)("div",b,[(0,i._)("div",f,[(0,i._)("div",{class:"d-flex pointer",onClick:t[1]||(t[1]=(...e)=>o.menuToggle&&o.menuToggle(...e))},x),w]),(0,i._)("div",k,[(0,i._)("ul",C,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.links,(t=>((0,i.wg)(),(0,i.iD)("li",_,[(0,i._)("div",z,[e.$route.name==t.name?((0,i.wg)(),(0,i.iD)("img",T)):(0,i.kq)("",!0)]),(0,i.Wm)(l,{onClick:o.menuToggle,to:t.link},{default:(0,i.w5)((()=>[(0,i.Uk)((0,s.zw)(t.title),1)])),_:2},1032,["onClick","to"])])))),256))])])])])}var O=n(4870),E={name:"TheMenu",setup(){const e=(0,O.iH)(0),t=[{title:"خانه",link:"/",name:"home"},{title:"محصول",link:"/product",name:"product"},{title:"درباره ما",link:"/about",name:"about"},{title:"شرکای ما",link:"/collaboration",name:"collaboration"},{title:"سوالات متداول",link:"/faq",name:"faq"},{title:"ورود",link:"/login",name:"login"},{title:"ثبت نام",link:"/register",name:"register"},{title:"پروفایل",link:"/profile",name:"profile"},{title:"سبد خرید",link:"/cart",name:"cart"},{title:"خروج",link:"/",name:"logout"}],n=()=>{e.value?(document.querySelector("#menuContent").style.right="-100%",document.querySelector("#menuContent").style.opacity="0",e.value=0):(document.querySelector("#menuContent").style.right="0",document.querySelector("#menuContent").style.opacity="1",e.value=1)};return{links:t,flag:e,menuToggle:n}}},P=n(89);const D=(0,P.Z)(E,[["render",j],["__scopeId","data-v-5d989bba"]]);var S=D;const q=(0,i.uE)('<div style="font-size:12px;background:url(&#39;/img/Hive.svg&#39;) right bottom no-repeat;background-size:cover;" class="bg-black text-white py-5 my-padding"><p>شبکه های اجتماعی</p><div class="d-flex justify-content-around mb-4"><img src="/img/tel.png" width="26px" alt=""><img src="/img/ins.png" width="26px" alt=""><img src="/img/face.png" width="26px" alt=""></div><b>ایمیل ما</b><p>copabee.example@gmail.com</p><b>آدرس ما</b><p>ایران، تهران، گیشا، خیابان هشتم، پلاک 58</p><div class="row justify-content-between"><div class="col-6"><b>شماره تماس</b><p>02128425205</p></div><div class="col-6"><b>واحد فروش</b><p>09103170950</p></div></div><div class="d-flex justify-content-between mt-5"><div class="d-grid"><img src="/img/actotek.png" class="align-self-center" width="50px" alt=""></div><div class="d-grid"><img src="/img/beheshti.png" class="align-self-center" width="50px" alt=""></div><div class="d-grid"><img src="/img/laziz.png" class="align-self-center" width="50px" alt=""></div><div class="d-grid"><img src="/img/zanboordaran.png" class="align-self-center" width="50px" alt=""></div></div></div>',1),B=[q];function F(e,t,n,o,a,r){return(0,i.wg)(),(0,i.iD)("footer",null,B)}var A={name:"TheFooter"};const M=(0,P.Z)(A,[["render",F]]);var N=M,L={components:{theFooter:N,theMenu:S}};const $=(0,P.Z)(L,[["render",l]]);var H=$,U=n(2483);const W={class:"home"},Z=(0,i.uE)('<div class="bg-black text-white"><div class="my-padding"><h1 class="w-75 my-4 main_title my-color"> به عسل لذیذ <br> خوش آمدید </h1><p class="col-8 font-size-12"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. </p><div class="d-flex justify-content-end mb-3"><button class="btn-orange">بیشتر بدانید</button></div><div class="main-slider"></div></div></div><div class="bg-light"><div class="product-section text-center pt-3" style=""><img src="/img/product.png" alt=""></div><div class="p-4"><div class="" style="background:url(&#39;/img/frame.png&#39;) center center no-repeat;background-size:100%;"><div class="d-flex p-4"><div><img class="mt-3 p-2" src="/img/dot.png" alt=""></div><p class="mt-3" style="font-size:12px;"> ما در کوپابی با در نظر گرفتن ژنوتیپ،آناتومی و مقدار مورد نیازبرای تیپیک غالب زنبورهای مناطق مختلف کشور و دنیا به فرمولاسیون خاص و کاربردی رسیده ایم تا بهترین و با کیفیت ترین غذای زنبورعسل را ارائه کنیم. </p></div></div></div><div class="d-flex justify-content-center"><button class="btn-orange mb-5">بیشتر بدانید</button></div></div><div class="text-center"><div class="p-3" style="background:url(&#39;/img/bg2.png&#39;) center center no-repeat;background-size:cover;"><p class="p-4 px-5 text-white rounded" style="backdrop-filter:blur(15px);font-size:14px;"> یکی از اصلی ترین تفاوت های کوپابی با شربت های دست ساز زنبور داران ،میتوان به مواردی همچون کنترل رطوبت، دما و مقدار شکر و نیز غلظت قندها ،محصولی عاری از سم های مضر ،آلودگی های شیمیایی،میکروبی و فیزیکی مختلف تولید اشاره کرد. </p></div></div><div class="bg-black text-white pt-5 my-padding"><h1 class="mb-4" style="color:#F7941D;">نمایندگی های فعال </h1><div class="row mb-3"><div class="col-6"><label for="province">استان</label><select id="province" class="form-select rounded-0" style="height:50px;"><option>تهران</option></select></div><div class="col-6"><label for="city">شهر</label><select id="city" class="form-select rounded-0" style="height:50px;"><option>تهران</option></select></div></div><div class="text-center w-100"><img src="/img/iran.png" class="img-fluid w-100" style="" alt=""></div><div><div class="d-flex"><div><img class="mt-3 p-1" src="/img/dot.png" alt=""></div><p class="mt-3" style="font-size:12px;"> ایران، تهران، گیشا، خیابان هشتم، پلاک 58 </p></div></div></div><div class="bg-black"><div class="py-5 my-padding" style="background-color:#F7941D;border-radius:24px;"><h1 class="mb-4">با ما در ارتباط باشید</h1><p>ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون. </p><div class="d-flex justify-content-between"><div class="d-flex justify-content-start"><div class="me-3" style="width:20px;height:20px;border-radius:2px;border:1.5px solid black;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path></svg></div><p>سوال</p></div><div class="d-flex justify-content-start"><div class="me-3" style="width:20px;height:20px;border-radius:2px;border:1.5px solid black;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path></svg></div><p>انتقاد و پیشنهاد</p></div></div><div class="mb-3"><label for="message">پیام</label><textarea id="message" class="form-control rounded-0"></textarea></div><div class="d-flex justify-content-start"><div class="me-3" style="width:20px;height:20px;border-radius:2px;border:1.5px solid black;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path></svg></div><p>ناشناس</p></div><div class="row"><div class="col-12 mb-3"><label for="name">نام و نام خانوادگی</label><input type="text" id="name" class="form-control rounded-0"></div><div class="col-6"><label for="province_2">استان</label><select id="province_2" class="form-select rounded-0"><option>تهران</option></select></div><div class="col-6 mb-3"><label for="phone">تلفن</label><input type="number" id="phone" class="form-control rounded-0"></div></div><div class="text-center"><button class="btn-black-rect">ثبت</button></div></div></div><div class="bg-black text-white py-5 px-4"><h2 class="mb-4 my-color">سوالات متداول شما</h2><div style="font-size:12px !important;color:white;" class="mb-3"><div class="accordion bg-transparent" id="accordionExample"><div class="accordion-item bg-transparent my-border text-white rounded-0"><h2 class="accordion-header"><button style="font-size:12px !important;" class="accordion-button bg-transparent text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم </button></h2><div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample"><div class="accordion-body"><p> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. </p></div></div></div><div class="accordion-item bg-transparent my-border text-white rounded-0"><h2 class="accordion-header"><button style="font-size:12px !important;" class="accordion-button bg-transparent text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم </button></h2><div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample"><div class="accordion-body"><p> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. </p></div></div></div><div class="accordion-item bg-transparent my-border text-white rounded-0"><h2 class="accordion-header"><button style="font-size:12px !important;" class="accordion-button bg-transparent text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم </button></h2><div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample"><div class="accordion-body"><p> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. </p></div></div></div></div></div></div><div class="text-center"><div class="p-4 py-5" style="background:url(&#39;/img/bg3.png&#39;) center center no-repeat;background-size:cover;"><div class="py-5 rounded" style="backdrop-filter:blur(15px);font-size:14px;"><h3 class="mb-5">درباره ما بیشتر بدانید</h3><p style="font-weight:bolder;font-size:12px;padding-right:70px;padding-left:70px;"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی</p><div class="text-center mt-5"><button class="btn-black">بیشتر بدانید</button></div></div></div></div>',7),I=[Z];function K(e,t,n,o,a,r){return(0,i.wg)(),(0,i.iD)("div",W,I)}var V={name:"HomeView"};const Y=(0,P.Z)(V,[["render",K]]);var G=Y;const J=[{path:"/",name:"home",component:G},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,8370))},{path:"/product",name:"product",component:()=>n.e(18).then(n.bind(n,5289))},{path:"/faq",name:"faq",component:()=>n.e(720).then(n.bind(n,4773))},{path:"/login",name:"login",component:()=>n.e(535).then(n.bind(n,8393))},{path:"/profile",name:"profile",component:()=>n.e(845).then(n.bind(n,3200))},{path:"/products",name:"products",component:()=>n.e(893).then(n.bind(n,3224))},{path:"/cart",name:"cart",component:()=>n.e(511).then(n.bind(n,445))},{path:"/register",name:"register",component:()=>n.e(685).then(n.bind(n,3872))},{path:"/orders",name:"orders",component:()=>n.e(486).then(n.bind(n,4213))},{path:"/collaboration",name:"collaboration",component:()=>n.e(928).then(n.bind(n,7173))}],Q=(0,U.p7)({history:(0,U.PO)("/"),routes:J});var R=Q,X=n(65),ee=(0,X.MT)({state:{panelUrl:"https://panel.asal.webagent.ir",productsCats:null,products:null,product:null},mutations:{getProductCats(e){axios.get(e.panelUrl+"/api/category/product").then((t=>{e.productsCats=t.data})).catch()},getProducts(e,t){axios.get(e.panelUrl+"/api/product?cat="+t).then((t=>{e.products=t.data})).catch()},getProduct(e,t){axios.get(e.panelUrl+"/api/product/"+t).then((t=>{e.product=t.data.product})).catch()}},actions:{getProductCats(e){e.commit("getProductCats")},getProducts(e){e.commit("getProducts")},getProduct(e){e.commit("getProduct")}}});window.axios=n(7218),(0,o.ri)(H).use(ee).use(R).mount("#app")}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,a){if(!o){var r=1/0;for(d=0;d<e.length;d++){o=e[d][0],i=e[d][1],a=e[d][2];for(var l=!0,s=0;s<o.length;s++)(!1&a||r>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(l=!1,a<r&&(r=a));if(l){e.splice(d--,1);var c=i();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[o,i,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+{18:"product",443:"about",486:"orders",511:"cart",535:"login",685:"register",720:"faq",845:"profile",893:"products",928:"collaboration"}[e]+"."+{18:"4139d893",443:"4e12b149",486:"575be115",511:"315d57c1",535:"91ff9645",685:"51ee294b",720:"6191a982",845:"b12da6a3",893:"2152f787",928:"3ed9112f"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/register.0f8b5ab1.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="copa-bee:";n.l=function(o,i,a,r){if(e[o])e[o].push(i);else{var l,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var p=c[d];if(p.getAttribute("src")==o||p.getAttribute("data-webpack")==t+a){l=p;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+a),l.src=o),e[o]=[i];var u=function(t,n){l.onerror=l.onload=null,clearTimeout(g);var i=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),i&&i.forEach((function(e){return e(n)})),t)return t(n)},g=setTimeout(u.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=u.bind(null,l.onerror),l.onload=u.bind(null,l.onload),s&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,i){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var r=function(n){if(a.onerror=a.onload=null,"load"===n.type)o();else{var r=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=r,s.request=l,a.parentNode&&a.parentNode.removeChild(a),i(s)}};return a.onerror=a.onload=r,a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var i=n[o],a=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===t))return i}var r=document.getElementsByTagName("style");for(o=0;o<r.length;o++){i=r[o],a=i.getAttribute("data-href");if(a===e||a===t)return i}},o=function(o){return new Promise((function(i,a){var r=n.miniCssF(o),l=n.p+r;if(t(r,l))return i();e(o,l,null,i,a)}))},i={143:0};n.f.miniCss=function(e,t){var n={685:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=o(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)o.push(i[2]);else{var a=new Promise((function(n,o){i=e[t]=[n,o]}));o.push(i[2]=a);var r=n.p+n.u(t),l=new Error,s=function(o){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var a=o&&("load"===o.type?"missing":o.type),r=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",l.name="ChunkLoadError",l.type=a,l.request=r,i[1](l)}};n.l(r,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,a,r=o[0],l=o[1],s=o[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(s)var d=s(n)}for(t&&t(o);c<r.length;c++)a=r[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},o=self["webpackChunkcopa_bee"]=self["webpackChunkcopa_bee"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(3840)}));o=n.O(o)})();
//# sourceMappingURL=app.ca2a4e1f.js.map