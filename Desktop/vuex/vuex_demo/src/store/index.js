import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 2
    },
    mutations: {
        add(state) {
            state.count++
        },
        addN(state, step) {
            state.count += step
        }
    },
    actions: {
        // 异步操作 写在actions
        addAsync(context) {
            setTimeout(() => {
                context.commit('addN', 3)
            }, 2000);
        }
    },
    getters: {
        showNum(state) {
            return `count的值是:${state.count}`
        }
    },
    modules: {
    }
})
