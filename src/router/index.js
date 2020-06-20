import Vue from 'vue'
import Router from 'vue-router'
import test from '@/views/test'
import login from '@/components/login'
import regist from '@/components/regist'

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