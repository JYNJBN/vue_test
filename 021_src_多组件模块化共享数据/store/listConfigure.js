import axios from "axios";
import { nanoid } from "nanoid";

export default {
    namespaced:true,
    actions: {  
        add_ye_obj (context, value) {
            if (value.name.indexOf('叶') === 0) {
                context.commit('ADD_OBJ', value)
            }
            else { 
                alert('请输入姓叶的名称')
            }
        },
        addRandomObj (context) {
            console.log(1);
            // const obj = {id:nanoid(),name:}
            axios.get('https://www.maitanbang.com/api/randusername/index?key=SVgxxxpZzRuFRQoeNahr11MB9p')
                .then(value => { 
                    console.log(value.data.data);
                    const obj = { id: nanoid(), name: value.data.data }
                    context.commit('ADD_OBJ',obj)
                },err => { 
                    console.log(err.message);
                })
         }
    },
    mutations: {
        ADD_OBJ (state, value) {
            console.log(value);
            state.listArr.unshift(value)
        },
    },
    state: {
        listArr: [{id:101,name:'马飞'}]
    },
    getters: {
        firstName (state) { 
            return state.listArr[0].name
        }
    }
}
