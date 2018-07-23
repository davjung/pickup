import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import firebase from 'firebase/app'
import 'firebase/auth'
import NProgress from 'nprogress'

import AddItem from '@/components/AddItem'
import EditItem from '@/components/EditItem'
import ListItem from '@/components/ListItem'


Vue.use(Router)

let router = new Router({
  routes: [
    // {
    //   path: '*',
    //   redirect: '/login'
    // },

    // {
    //   path: '/',
    //   redirect: '/login'
    // },

    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },

    {
      path: '/login',
      name: 'Login',
      component: Login
    },

    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },

    {
      name: 'Add',
      path: '/add',
      component: AddItem
    },

    {
      name: 'Edit',
      path: '/edit/:id',
      component: EditItem
    },

    {
      name: 'List',
      path: '/index',
      component: ListItem
    },


  ]
})

// router.beforeEach((to, from, next) => {
//   let currentUser = firebase.auth().currentUser;
//   let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

//   if (requiresAuth && !currentUser) next('login')
//   else if (!requiresAuth && currentUser) next('home')
//   else next() // doesn't req auth and is current user
// })

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})


export default router