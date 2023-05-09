<template>
  <div class="w-full px-3 sm:w-7/12">
    <!-- 文章标题 -->
    <h1 class="my-6 text-3xl font-semibold">{{ title }}</h1>
    <!-- 文章信息栏 -->
    <PageMetaLine>
      <ArticleMetaLine
        :created="created"
        :updated="updated"
        :tag="tag"
      ></ArticleMetaLine>
    </PageMetaLine>
    <!-- 文章内容 -->
    <article class="content" v-html="content"></article>
    <!-- 评论 -->
    <WriteComment :article_id="article_id"></WriteComment>
    <!-- <CommentsList :article_id="article_id" v-if="showCommentsList"></CommentsList> -->
    <!-- 赞赏按钮 -->
    <BuyMeACoffee></BuyMeACoffee>
  </div>
</template>

<script>
import { getArticleById } from "@/request/article";
import {markdownToHtml} from "@/utils/markdownConversion";

import ArticleMetaLine from "@/components/main/article/ArticleMetaLine";
import PageMetaLine from "@/components/common/PageMetaLine";
import WriteComment from "@/components/main/article/WriteComment";
import CommentsList from "@/components/main/article/CommentsList";
import BuyMeACoffee from "@/components/common/BuyMeACoffee";

export default {
  name: "Article",
  components: {
    PageMetaLine,
    ArticleMetaLine,
    WriteComment,
    CommentsList,
    BuyMeACoffee,
  },
  data() {
    return {
      article_id: 0,
      title: "",
      tag: "",
      created: "",
      updated: "",
      content: "",
      showCommentsList: false,
    };
  },
  methods: {
    requestArticleById(params) {
      getArticleById({
        id: params,
      }).then((res) => {
        var { _id, title, tag, created, updated, content } = res.data;
        // 请求到数据后再渲染页面
        this.article_id = _id;
        this.title = title;
        this.tag = tag;
        this.created = created;
        this.updated = updated;
        this.content = markdownToHtml(content);
        this.showCommentsList = Object.keys(res.data).length > 0 ? true : false;
      });
    },
  },
  created() {
    this.requestArticleById(this.$route.params.id);
  },
  beforeRouteUpdate(to, from, next) {
    this.requestArticleById(to.params.id);
    next();
  },
};
</script>

<style lang="css">
/* 引入文章样式 */
@import "@/assets/style/article/markdown.css";
@import "@catppuccin/highlightjs/css/catppuccin-frappe.css";
</style>
