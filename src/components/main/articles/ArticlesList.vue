<template>
  <div>
    <ArticlesListItem
      v-for="(article, index) in articles"
      :key="index"
      :id="article._id"
      :title="article.title"
      :description="article.description"
      :createdAt="article.createdAt"
      :updatedAt="article.updatedAt"
      :tag="article.tag"
    ></ArticlesListItem>
  </div>
</template>

<script>
import ArticlesListItem from "@/components/main/articles/ArticlesListItem";

export default {
  name: "ArticlesList",
  props: ["articles"],
  components: {
    ArticlesListItem,
  },
};
</script>
