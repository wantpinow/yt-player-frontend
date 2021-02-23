import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import AllVideos from '../views/AllVideos.vue'
import AddVideo from '../views/AddVideo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/video',
    name: 'AllVideos',
    component: AllVideos
  },
  {
    path: '/add_video',
    name: 'AddVideo',
    component: AddVideo
  }
]

const router = new VueRouter({
  routes
})

export default router
