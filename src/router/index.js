import Vue from 'vue'
import Router from 'vue-router'

const login = r => require.ensure([], () => r(require('@/page/login.vue')), 'login');
Vue.use(Router)
const routes = [
  {
    path:'/',
    component:login
  }


]


export default new Router({

  routes
  // routes: [
  //   {
  //     path: '/',
  //     name: 'HelloWorld',
  //     component: HelloWorld
  //   }
  // ]
})
