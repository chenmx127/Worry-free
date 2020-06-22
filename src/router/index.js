import Vue from 'vue'
import Router from 'vue-router'
import test from '@/views/test'
import people from '@/views/people'
import order from '@/views/order'
import eva from '@/views/eva'
import adress from '@/views/adress'
import vouchers from '@/views/vouchers'
import chpassword from '@/views/chpassword'
import login from '@/components/login'
import regist from '@/components/regist'
import footer from '@/components/footer'
import middle from '@/components/middle'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/views/test'
    },
    {
      path: '/views/test',
      name: 'test',
      component: test
    },
    {
      path: '/views/people',
      name: 'people',
      component: people
    },
    {
      path: '/views/order',
      name: 'order',
      component: order
    },
    {
      path: '/views/chpassword',
      name: 'chpassword',
      component: chpassword
    },
    {
      path: '/views/eva',
      name: 'eva',
      component: eva
    },
    {
      path: '/views/adress',
      name: 'adress',
      component: adress
    },
    {
      path: '/views/vouchers',
      name: 'vouchers',
      component: vouchers
    },
    {
      path: '/footer',
      name: 'footer',
      component: footer
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/regist',
      name: 'regist',
      component: regist
    },
    {
      path: '/middle',
      name: 'middle',
      component: middle
    },
  ],
})
router.beforeEach((to, from, next) => {
  if (to.path === '/login') { 
    next(); 
  }else {
    let _token = localStorage.getItem('Authorization');
    // let _token = store.state.Authorization;
    if (_token === 'null' || _token === '') {
      next('/login');
    } else {
      next();
    }
  }
});
export default router