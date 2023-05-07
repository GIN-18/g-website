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
  methods: {
    requetArticlesByTag(params) {
      getArticlesByTag({
        tag: params,
      }).then((res) => {
        this.tags_articles = res.data;
      });
    },
  },
  created() {
    this.requetArticlesByTag(this.$route.params.tag);
  },
  beforeRouteUpdate(to, from, next) {
    this.requetArticlesByTag(to.params.tag);
    next();
  },
};
</script>
