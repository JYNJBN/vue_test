import Vue from 'vue';
import App from './App.vue';
import router from './Router'

let vm = new Vue({
  el: '#app',
  render: (h) => h(App),
  // Router:Router
  router
});
console.log(vm);