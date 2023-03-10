<template>
  <div>
    <ArticleListItem
      v-for="(article, index) in tags_articles"
      :key="index"
      :id="article._id"
      :title="article.title"
      :description="article.description"
      :created="article.created"
      :views="article.views"
      :tag="article.tag"
    ></ArticleListItem>
  </div>
</template>

<script>
import axios from "axios";

import ArticleListItem from "@/components/main/articles/ArticleListItem";

export default {
  name: "TagsArticles",
  components: {
    ArticleListItem,
  },
  data() {
    return {
      tags_articles: [],
    };
  },
  created() {
    axios
      .get("https://website.cms.gin-18.top/api/article/getArticleByTag", {
        params: {
          tag: this.$route.params.tag,
        },
      })
      .then((res) => {
        this.tags_articles = res.data.data;
      });
  },
  beforeRouteUpdate(to, from, next) {
    axios
      .get("https://website.cms.gin-18.top/api/article/getArticleByTag", {
        params: {
          tag: to.params.tag,
        },
      })
      .then((res) => {
        this.tags_articles = res.data.data;
      });
    next();
  },
};
</script>

<style scoped></style>
