import Vue from 'vue';
import App from './App.vue';
import store from './store'

let vm = new Vue({
  el: '#app',
  render: (h) => h(App),
  store
});
console.log(vm);