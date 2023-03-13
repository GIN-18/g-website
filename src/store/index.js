import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

var store = new Vuex.Store({
  actions: {
    showMobileMenu(context) {
      context.commit("showMobileMenu")
    }
  },
  mutations: {
    showMobileMenu(state) {
      state.showMobileMenu = !state.showMobileMenu;
    },
  },
  state: {
    user: {},
    showMobileMenu: false,
  },
});

export default store;
