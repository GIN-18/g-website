import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

var actions = {
};

var mutations = {
  // 修改主题
  changeFlavour(state, flavour) {
    state.flavour = flavour;
  },
  showMobileMenu(state) {
    state.showMobileMenu = !state.showMobileMenu;
  },
};

var state = {
  user: {},
  flavour: "",
  showMobileMenu: false,
};

var store = new Vuex.Store({
  actions,
  mutations,
  state,
});

export default store;
