import Vue from "vue";
import Vuex from "vuex";

import { getArticlesByKeyword } from "@/request/articles";

Vue.use(Vuex);

var actions = {
  // 搜索文章
  searchArticles(context, keyword) {
    getArticlesByKeyword(keyword).then((res) => {
      context.commit("searchArticles", res.data);
    });
  },
};

var mutations = {
  // 修改主题
  changeFlavour(state, flavour) {
    state.flavour = flavour;
  },
  // 显示全部移动端菜单栏
  showMobileMenu(state) {
    state.showMobileMenu = !state.showMobileMenu;
    state.showSearchArticlesList = false;
    state.focusToHide = true;
  },
  // 搜索框获得焦点时候调用
  setFocusToHide(state, value) {
    if (state.showSearchArticlesList) {
      state.focusToHide = false;
    } else {
      state.focusToHide = value;
    }
  },
  // 搜索文章
  searchArticles(state, data) {
    state.searchArticlesList = data;
  },
  setShowSearchArticlesList(state, value) {
    state.showSearchArticlesList = value;
  },
};

var state = {
  user: {},
  flavour: "",
  // 移动端菜单属性
  showMobileMenu: false,
  focusToHide: true,
  // 搜索结果
  searchArticlesList: [],
  showSearchArticlesList: false,
};

var store = new Vuex.Store({
  actions,
  mutations,
  state,
});

export default store;
