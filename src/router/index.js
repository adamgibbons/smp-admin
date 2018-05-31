import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Users from '@/components/Users'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/users'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login') {
    if (localStorage.getItem('token')) {
      return next()
    }

    return next({ name: 'Login' })
  }
  next()
})

export default router
