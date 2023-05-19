import Vue from "vue";
import Vuex from "vuex";

import { getUser } from "@/request/home";
import { getArticlesByKeyword } from "@/request/articles";
import { getCommentsByArticleId } from "@/request/comment";

Vue.use(Vuex);

var actions = {
  // 获取用户
  requestUser(context) {
    getUser().then((res) => {
      context.commit("requestUser", res.data);
    });
  },
  // 搜索文章
  searchArticles(context, keyword) {
    getArticlesByKeyword(keyword).then((res) => {
      context.commit("searchArticles", res.data);
    });
  },
  // 根据文章id获取评论
  async requestCommentsByArticleId(context, article_id) {
    var res = await getCommentsByArticleId(article_id);
    context.commit("RequestCommentsByArticleId", res.data);
  },
};

var mutations = {
  // 获取用户
  requestUser(state, data) {
    state.user = data;
  },
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
  // 显示搜索列表
  setShowSearchArticlesList(state, value) {
    state.showSearchArticlesList = value;
  },
  // 设置获取到的评论
  RequestCommentsByArticleId(state, comments) {
    state.comment.commentsArray = comments;
  },
  // 发布评论
  PostComment(state, { operate, replyId, commentId, commentAuthor, commentContent }) {
    state.comment.operate = operate;
    state.reply.replyId = replyId,
    state.reply.commentId = commentId;
    state.reply.commentAuthor = commentAuthor;
    state.reply.commentContent = commentContent;
  },
};

var state = {
  user: {},
  // 主题
  flavour: "",
  // 移动端菜单属性
  showMobileMenu: false,
  focusToHide: true,
  // 搜索结果
  searchArticlesList: [],
  showSearchArticlesList: false,
  // 评论
  comment: {
    operate: "add",
    commentsArray: [],
  },
  reply: {
    replyId: null,
    commentId: null,
    commentAuthor: null,
    commentContent: null,
  },
};

var store = new Vuex.Store({
  actions,
  mutations,
  state,
});

export default store;
