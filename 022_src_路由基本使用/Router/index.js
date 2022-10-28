import VueRouter from 'vue-router'
import About from '../components/pages/About.vue'
import Home from '../components/pages/Home.vue'

const routes = [
    {
        path: '/about',
        component:About
    },
    {
        path: '/home',
        component:Home
    }
]
export default new VueRouter({
    routes
})