import Vue from "vue";
import Vuex from "vuex";
import VueSession from "vue-session/index.esm";
Vue.use(VueSession)

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    username: null,
    name: null,
    role: "",
  },
  mutations: {
    setIsLoggedIn(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn;
    },
    setUsername(state, username) {
      state.username = username;
    },
    setName(state, name) {
      state.name = name;
    },
    setRole(state, role) {
      state.role = role;
    },  },
  actions: {
    setLoggedInUser({ commit }, payload) {
      // console.log(payload.isLoggedIn)
      commit("setIsLoggedIn",payload.isLoggedIn)
      commit("setUsername",payload.username)
      commit("setName",payload.name)
      commit("setRole",payload.role)

    },
    clearUser({ commit }){
      commit("setIsLoggedIn", false)
      commit("setUsername",null)
      commit("setName",null)
      commit("setRole","")
    },
  },
  modules: {},
});