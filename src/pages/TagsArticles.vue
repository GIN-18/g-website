<template>
  <div>
    <ArticlesListItem
      v-for="(article, index) in tags_articles"
      :key="index"
      :id="article._id"
      :title="article.title"
      :description="article.description"
      :created="article.created"
      :updated="article.updated"
      :tag="article.tag"
    ></ArticlesListItem>
  </div>
</template>

<script>
import { getArticlesByTag } from "@/request/tags";

import ArticlesListItem from "@/components/main/articles/ArticlesListItem";

export default {
  name: "TagsArticles",
  components: {
    ArticlesListItem,
  },
  data() {
    return {
      tags_articles: [],
    };
  },
  created() {
    getArticlesByTag({
      tag: this.$route.params.tag,
    }).then((res) => {
      this.tags_articles = res.data;
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
