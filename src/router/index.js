import Vue from 'vue'
import VueRouter from 'vue-router'
const Home=()=> import('@/views/Home.vue')
const About=()=> import('@/views/About.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
