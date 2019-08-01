import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/home.vue'
import Login from '@/components/Login/login.vue'
import Detail from '@/components/Detail/detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
		{
			path: '/login',
			name: 'Login',
			component: Login
		},
		{
			path: '/detail',
			name: 'Detail',
			component: Detail
		}
  ]
})
