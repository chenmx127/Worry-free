import Vue from 'vue'
import Router from 'vue-router'
import test from '@/views/test'
import people from '@/views/people'
import sort from '@/views/sort'
import order from '@/views/order'
import eva from '@/views/eva'
import adress from '@/views/adress'
import vouchers from '@/views/vouchers'
import chpassword from '@/views/chpassword'
import shopcart from '@/views/shopcart'
import shopcart2 from '@/views/shopcart2'
import login from '@/components/login'
import regist from '@/components/regist'
import ppwd from '@/components/ppwd'
import questions from '@/views/questions'
import collection from '@/views/collection'
import integral from '@/views/integral'
import detail from '@/views/detail'

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
      path: '/views/questions',
      name: 'questions',
      component: questions
    },
    {
      path: '/views/collection',
      name: 'collection',
      component: collection
    },
    {
      path: '/views/integral',
      name: 'integral',
      component: integral
    },
    {
      path: '/views/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/views/sort',
      name: 'sort',
      component: sort
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
      path: '/views/shopcart',
      name: 'shopcart',
      component: shopcart
    },
    {
      path: '/views/shopcart2',
      name: 'shopcart2',
      component: shopcart2
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/ppwd',
      name: 'ppwd',
      component: ppwd
    },
    {
      path: '/regist',
      name: 'regist',
      component: regist
    }
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
