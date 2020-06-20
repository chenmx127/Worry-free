import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        isLogin: false,
        currentuser: {},
        Authorization: localStorage.getItem("Authorization") ? localStorage.getItem("Authorization"):''
    },
    getters: {
        getIsLogin: state => state.isLogin,
        getCurrentuser: state => state.currentuser
    },
    mutations:{
        changeLogin(state,user){
            state.Authorization = user;
            localStorage.setItem("Authorization",user);
        },
        userSatus(state, user) {
            if (user) {
                state.currentuser = user;
                state.isLogin = true
            } else {
                state.currentuser = null;
                state.isLogin = false
            }
        }
    },
    actions: { 
        setUser({ commit }, user) {
            commit("userSatus", user);
        }
    }
})
export default store 