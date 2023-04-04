import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

var store = new Vuex.Store({
  actions: {
    showMobileMenu(context) {
      context.commit("showMobileMenu");
    },
    changeFlavour(context, data) {
      context.commit("changeFlavour", data);
    },
  },
  mutations: {
    showMobileMenu(state) {
      state.showMobileMenu = !state.showMobileMenu;
    },
    changeFlavour(state, data) {
      state.flavour = data;
    },
  },
  state: {
    user: {},
    flavour: "",
    showMobileMenu: false,
  },
});

export default store;
