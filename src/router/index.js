import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView, 
    meta:{
      title:'presentación'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    meta:{
      title:'experiencia'
    }
  },
  {
    path: '/curriculum',
    name: 'Curriculum',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/CurriculumView.vue')
    }
  },
  {
    path: '/sign-in',
    name: 'singin',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AccesoView.vue')
    },
    meta:{
      title: 'acceso'
    }
  },
  {
    path: '/datospersonales',
    name: 'datospersonales',
    component: () => import ('../views/DatosPersonalesView'),
    meta:{
      title: 'cargar foto perfil'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next)=>{
  window.document.title = to.meta.title;
  next();
});

export default router
