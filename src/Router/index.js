import VueRouter from 'vue-router';
import About from '../components/pages/About.vue';
import Home from '../components/pages/Home.vue';
import Message from '../components/pages/Message.vue';
import News from '../components/pages/News.vue';
import Detial from '../components/pages/Detial.vue';
import Vue from 'vue';

Vue.use(VueRouter)
const routes = [
  {
    path: '/about',
    component: About,
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: 'message',
        component: Message,
        children: [
          {
            name:'detial',
            path: 'detial/:id/:title',
            component: Detial,
            // props:true
            props (router) { 
              return {
                id: router.params.id,
                title: router.params.id,
                
              }
            }
          }
        ]
      },
      {
        path: 'news',
        component: News,
      },
    ],
  },
];
export default new VueRouter({
  routes,
});
