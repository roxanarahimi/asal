"use strict";(self["webpackChunkcopa_bee"]=self["webpackChunkcopa_bee"]||[]).push([[486],{3849:function(t,e,s){s.r(e),s.d(e,{default:function(){return h}});var a=s(3396),l=s(7139);const n={class:"w-100 px-4 text-light",style:{background:"url('/img/loginBack.svg') top center no-repeat","background-size":"cover"}},c=(0,a._)("h2",{class:"my-color mt-5 text-center my-font"},"سفارشات اخیر",-1),r={key:0,class:"px-4 mt-5 my-font",style:{}},o={class:"mb-3"},i={class:"d-flex justify-content-between"},d=(0,a._)("h4",null,"15-425868",-1),u={class:"d-grid text-end"},g=(0,a._)("h4",{class:"align-self-start"},"1402/10/02",-1),f={class:"align-self-end my-color mx-auto"},m=(0,a._)("div",{class:"text-center"},[(0,a._)("img",{src:"/img/hr.png",class:"w-100",alt:""})],-1),p={class:"d-flex justify-content-center my-font"};function v(t,e,s,v,k,_){const b=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",n,[c,v.data.length?((0,a.wg)(),(0,a.iD)("div",r,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(v.data,(t=>((0,a.wg)(),(0,a.iD)("div",o,[(0,a._)("div",i,[(0,a._)("div",null,[d,(0,a.Wm)(b,{to:"/products",class:"btn-orangePill text-black"},{default:(0,a.w5)((()=>[(0,a.Uk)(" مشاهده فاکتور ")])),_:1})]),(0,a._)("div",u,[g,(0,a._)("small",f,(0,l.zw)(t.status),1)])]),m])))),256))])):(0,a.kq)("",!0),(0,a._)("div",p,[(0,a.Wm)(b,{to:"/products",class:"btn-orangePill text-black"},{default:(0,a.w5)((()=>[(0,a.Uk)(" سفارش جدید ")])),_:1})])])}var k=s(4870),_=s(65),b={name:"Orders",setup(){const t=(0,_.oR)(),e=(0,k.iH)([]);(0,a.bv)((()=>{s()}));const s=()=>{axios.get(t.state.panelUrl+"/api/userOrders/"+JSON.parse(localStorage.getItem("user")).id).then((t=>{e.value=t.data,console.log(t.data)})).catch((t=>{console.error(t)}))};return{getData:s,store:t,data:e}}},w=s(89);const x=(0,w.Z)(b,[["render",v]]);var h=x}}]);
//# sourceMappingURL=orders.9818eb3e.js.map