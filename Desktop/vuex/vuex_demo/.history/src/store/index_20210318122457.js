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
        addN(state) {
            state.count += N
        }
    },
    actions: {
    },
    modules: {
    }
})
