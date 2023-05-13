<template>
  <div class="w-full px-3 sm:w-7/12">
    <!-- 文章标题 -->
    <h1 class="mt-6 mb-3 text-3xl font-semibold">{{ title }}</h1>
    <!-- 文章标签 -->
    <ArticleTag :tag="tag"></ArticleTag>
    <!-- 文章信息栏 -->
    <ArticleMetaLine
      class="mb-3"
      :createdAt="createdAt"
      :updatedAt="updatedAt"
    ></ArticleMetaLine>
    <!-- 文章内容 -->
    <article class="content" v-html="content"></article>
    <!-- 赞赏按钮 -->
    <BuyMeACoffee></BuyMeACoffee>
    <!-- 评论 -->
    <CommentsList
      :article_id="article_id"
      v-if="showCommentsList"
    ></CommentsList>
    <WriteComment :article_id="article_id"></WriteComment>
  </div>
</template>

<script>
import { getArticleById } from "@/request/article";
import { markdownToHtml } from "@/utils/markdownConversion";

import ArticleMetaLine from "@/components/main/article/ArticleMetaLine";
import ArticleTag from "@/components/main/article/ArticleTag";
import WriteComment from "@/components/main/article/comment/WriteComment";
import CommentsList from "@/components/main/article/comment/CommentsList";
import BuyMeACoffee from "@/components/common/BuyMeACoffee";

export default {
  name: "Article",
  components: {
    ArticleMetaLine,
    ArticleTag,
    WriteComment,
    CommentsList,
    BuyMeACoffee,
  },
  data() {
    return {
      article_id: 0,
      title: "",
      tag: "",
      createdAt: "",
      updatedAt: "",
      content: "",
      showCommentsList: false,
    };
  },
  methods: {
    requestArticleById(params) {
      getArticleById({
        id: params,
      }).then((res) => {
        var { _id, title, tag, createdAt, updatedAt, content } = res.data;
        // 请求到数据后再渲染页面
        this.article_id = _id;
        this.title = title;
        this.tag = tag;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
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
