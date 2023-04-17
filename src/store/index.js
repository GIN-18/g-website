import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

var store = new Vuex.Store({
  actions: {
    showMobileMenu(context) {
      context.commit("showMobileMenu");
    },
    changeFlavour(context, flavour) {
      context.commit("changeFlavour", flavour);
    },
  },
  mutations: {
    showMobileMenu(state) {
      state.showMobileMenu = !state.showMobileMenu;
    },
    changeFlavour(state, flavour) {
      state.flavour = flavour;
    },
  },
  state: {
    user: {},
    flavour: "",
    showMobileMenu: false,
  },
});

export default store;
