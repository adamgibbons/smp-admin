import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Users from '@/components/Users'
import User from '@/components/User'
import UserProfile from '@/components/User/UserProfile'

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
    },
    {
      path: '/users/:id',
      name: 'User',
      component: User,
      children: [
        {
          name: 'UserProfile',
          path: 'profile',
          component: UserProfile
        }
      ]
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
