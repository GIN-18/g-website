<template>
  <div class="article-list">
    <ArticleListItem
      v-for="(article, index) in articles"
      :key="index"
      :id="article._id"
      :title="article.title"
      :description="article.description"
      :updated="article.updated"
      :views="article.views"
      :tag="article.tag"
    ></ArticleListItem>
  </div>
</template>

<script>
import ArticleListItem from "@/components/main/articles/ArticleListItem";

export default {
  name: "ArticleList",
  props: ["articles"],
  components: {
    ArticleListItem,
  },
};
</script>

<style scoped></style>
