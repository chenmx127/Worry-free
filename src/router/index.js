import Vue from 'vue'
import Router from 'vue-router'
import test from '@/views/test'
import people from '@/views/people'
import sort from '@/views/sort'
import login from '@/components/login'
import regist from '@/components/regist'
import questions from '@/views/questions'
import collection from '@/views/collection'
import integral from '@/views/integral'

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
      path: '/views/sort',
      name: 'sort',
      component: sort
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