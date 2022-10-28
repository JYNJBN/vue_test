export default {
    namespaced:true,
    actions: {     
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
    },
    mutations: {
        ADD (state, value) {
            console.log('mutations调用', state, value);
            state.sum += value
        },
        REDUCE (state, value) {
            state.sum -= value
        },
        WAITADD (state, value) {
            state.sum += value
        },
        IFSUMADD (state, value) {
            state.sum += value
        },
    },
    state: {
        sum: 0,
        name: '张三',
        age: 18,
    },
    getters:{
        bigSum (state) { 
            return state.sum *10
        }
    }
}