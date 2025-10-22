import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')

  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import(/* webpackChunkName: "product" */ '../views/Product.vue')
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import(/* webpackChunkName: "faq" */ '../views/Faq.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
  },
  {
    path: '/participants',
    name: 'participants',
    component: () => import(/* webpackChunkName: "participants" */ '../views/Participants.vue')
  }, {
    path: '/collaboration',
    name: 'collaboration',
    component: () => import(/* webpackChunkName: "collaboration" */ '../views/Collaboration.vue')
  },
  {
    path: '/complane',
    name: 'complane',
    component: () => import(/* webpackChunkName: "complane" */ '../views/Complane.vue')
  },
  {
    path: '/contents/:id',
    name: 'contents',
    params:true,
    component: () => import(/* webpackChunkName: "contents" */ '../views/Contents.vue')
  },
  {
    path: '/content/:slug',
    name: 'content',
    params: true,
    component: () => import(/* webpackChunkName: "content" */ '../views/Content.vue')
  },
{
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue')
  },


    //*************************************English*Version********************************************/
  {
    path: '/en/',
    name: 'homeEn',
    component: () => import(/* webpackChunkName: "homeEn" */ '../views/en/HomeViewEn.vue')
  },
  {
    path: '/en/about',
    name: 'aboutEn',
    component: () => import(/* webpackChunkName: "aboutEn" */ '../views/en/AboutEn.vue')
  },
  {
    path: '/en/product',
    name: 'productEn',
    component: () => import(/* webpackChunkName: "productEn" */ '../views/en/ProductEn.vue')
  },
  {
    path: '/en/faq',
    name: 'faqEn',
    component: () => import(/* webpackChunkName: "faqEn" */ '../views/en/FaqEn.vue')
  },
  {
    path: '/en/register',
    name: 'registerEn',
    component: () => import(/* webpackChunkName: "registerEn" */ '../views/en/RegisterEn.vue')
  },
  {
    path: '/en/participants',
    name: 'participantsEn',
    component: () => import(/* webpackChunkName: "participantsEn" */ '../views/en/ParticipantsEn.vue')
  }, {
    path: '/en/collaboration',
    name: 'collaborationEn',
    component: () => import(/* webpackChunkName: "collaborationEn" */ '../views/en/CollaborationEn.vue')
  },
  {
    path: '/en/complane',
    name: 'complaneEn',
    component: () => import(/* webpackChunkName: "complaneEn" */ '../views/en/ComplaneEn.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
