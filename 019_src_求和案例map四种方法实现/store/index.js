
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const actions = {
    // add(context,value) { 
    //     console.log('action调用',context,value);
    //     context.commit('ADD',value)
    // },
    // reduce (context,value) { 
    //     context.commit('REDUCE',value)
    // },
    waitadd (context, value) {
        setTimeout(() => {
            context.commit('WAITADD',value)
        }, 500);
    },
    ifsumadd (context,value) { 
        if (context.state.sum % 2) { 
            context.commit('IFSUMADD',value)
        }
    }
    
}
const mutations = {
    ADD (state, value) { 
        console.log('mutations调用',state,value);
        state.sum+=value
    },
    REDUCE (state,value) { 
        state.sum-=value
    },
    WAITADD (state,value) { 
        state.sum+=value
    },
    IFSUMADD (state,value) { 
        state.sum+=value
    }
}
// JAVA的，actions相当于Service层，Mutations相当于Dao层，State相当于数据库，VueComponent相当于Controller层
const state = {
    sum: 0,
    name: '张三',
    age:18
}
const getters = {
    bigSum (state) { 
        return state.sum *10
    }
}
export default  new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})

