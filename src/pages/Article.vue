<template>
  <div>
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

    <!-- 赞赏按钮 -->
    <BuyMeACoffee></BuyMeACoffee>
  </div>
</template>

<script>
import { getArticleById } from "@/request/article";
import markdownConversion from "@/utils/markdownConversion";

import ArticleMetaLine from "@/components/main/article/ArticleMetaLine";
import PageMetaLine from "@/components/common/PageMetaLine";
import BuyMeACoffee from "@/components/common/BuyMeACoffee";

export default {
  name: "Article",
  components: {
    PageMetaLine,
    ArticleMetaLine,
    BuyMeACoffee,
  },
  data() {
    return {
      title: "",
      tag: "",
      created: "",
      updated: "",
      content: "",
    };
  },
  created() {
    getArticleById({
      id: this.$route.params.id,
    }).then((res) => {
      var { title, tag, created, updated, content } = res.data;
      // 请求到数据后再渲染页面
      this.title = title;
      this.tag = tag;
      this.created = created;
      this.updated = updated;
      this.content = markdownConversion.markdownToHtml(content);
    });
  },
};
</script>

<style lang="css">
/* 引入文章样式 */
@import "@/assets/style/article/markdown.css";
@import "@catppuccin/highlightjs/css/catppuccin-frappe.css";
</style>
