import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

var store = new Vuex.Store({
  actions: {
    showMobileMenu(context) {
      context.commit("showMobileMenu");
    },
    // 修改主题
    changeFlavour(context, flavour) {
      context.commit("changeFlavour", flavour);
    },
    // 搜索框获得焦点时隐藏导航栏
    focusToHide(content) {
      content.commit("focusToHide");
    },
    // 显示搜索文章列表
    setShowSearchArticlesListToTrue(content) {
      content.commit("setShowSearchArticlesListToTrue");
    },
    // 隐藏搜索文章列表
    setShowSearchArticlesListToFalse(content) {
      content.commit("setShowSearchArticlesListToFalse");
    }
  },
  mutations: {
    showMobileMenu(state) {
      state.showMobileMenu = !state.showMobileMenu;
    },
    // 修改主题
    changeFlavour(state, flavour) {
      state.flavour = flavour;
    },
    // 搜索框获得焦点时隐藏导航栏
    focusToHide(state) {
      state.focusToHide = !state.focusToHide;
    },
    // 显示搜索文章列表
    setShowSearchArticlesListToTrue(state) {
      state.showSearchArticlesList = true;
    },
    // 隐藏搜索文章列表
    setShowSearchArticlesListToFalse(state) {
      state.showSearchArticlesList = false;
    },
  },
  state: {
    user: {},
    flavour: "",
    showMobileMenu: false,
    focusToHide: false,
    searchArticles: [],
    showSearchArticlesList: false,
  },
});

export default store;
