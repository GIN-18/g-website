<template>
  <transition appear name="article">
    <div v-show="showArticle">
      <!-- 文章标题 -->
      <h1 class="title">{{ title }}</h1>
      <!-- 文章信息栏 -->
      <ArticleMetaLine
        :created="created"
        :tag="tag"
        :views="views"
      ></ArticleMetaLine>
      <!-- 文章内容 -->
      <article class="content" v-html="content"></article>
      <!-- 赞赏按钮 -->
      <BuyMeACoffee></BuyMeACoffee>
    </div>
  </transition>
</template>

<script>
import axios from "axios";
import markdownConversion from "@/utils/markdownConversion";

import ArticleMetaLine from "@/components/main/article/ArticleMetaLine";
import BuyMeACoffee from "@/components/common/BuyMeACoffee";

export default {
  name: "Article",
  components: {
    ArticleMetaLine,
    BuyMeACoffee,
  },
  data() {
    return {
      showArticle: false,
      title: "",
      tag: "",
      created: "",
      views: "",
      content: "",
    };
  },
  created() {
    axios
      .get(
        "https://website.cms.gin-18.top/api/article/getArticleByIdAndUpdate",
        {
          params: {
            id: this.$route.params.id,
          },
        }
      )
      .then((res) => {
        var { title, tag, created, views, content } = res.data.data;
        // 请求到数据后再渲染页面
        this.showArticle = Object.keys(res.data.data).length > 0 ? true : false;
        this.title = title;
        this.tag = tag;
        this.created = created;
        this.views = views;
        this.content = markdownConversion.markdownToHtml(content);
      });
  },
};
</script>

<style lang="css">
/* 引入文章样式 */
@import "@/assets/style/article/highlight.css";
@import "@/assets/style/article/markdown.css";

.title {
  margin: 32px 0 8px;
}

.table-of-contents ::marker {
  color: var(--nord-text-link);
}

/* 动画 */
.article-enter-active {
  animation-name: fadeIn;
  animation-duration: 0.2s;
}
</style>
