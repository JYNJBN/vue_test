import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'
import router from './Router'
Vue.use(VueRouter)
let vm = new Vue({
  el: '#app',
  render: (h) => h(App),
  // Router:Router
  router
});
console.log(vm);