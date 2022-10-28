
import Vue from 'vue'
import Vuex from 'vuex'
import listConfigure from './listConfigure'
import sumConfigure from './sumConfigure'

Vue.use(Vuex)



    

export default  new Vuex.Store({
    modules: {
        sumConfigure,
        listConfigure,
    }
})

