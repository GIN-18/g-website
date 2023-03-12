<template>
  <div class="categories-articles-list-item">
    <header class="header-of-category">
      <h3 class="category-name">{{ category }}</h3>
      <span class="count-of-category">{{ categoryArticles.length }} </span>
    </header>
    <div class="category-articles-list">
      <router-link
        class="category-articles-list-item"
        v-for="(article, index) in categoryArticles"
        :key="index"
        :to="`/article/${article._id}`"
      >
        {{ article.title }}
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CategoriesArticlesListItem",
  props: ["category"],
  data() {
    return {
      categoryArticles: [],
    };
  },
  created() {
    axios
      .get("https://website.cms.gin-18.top/api/article/getArticleByCategory", {
        params: {
          category: this.category,
        },
      })
      .then((res) => {
        this.categoryArticles = res.data.data;
      });
  },
};
</script>

<style scoped>
.categories-articles-list-item {
  margin: 0 0 10px;
  padding: 8px;
  border: 1px solid var(--nord-border-primary);
  border-radius: 6px;
}

/* 分类项头部 */
.header-of-category {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--nord-border-primary);
}

.category-articles-list {
  display: flex;
  flex-direction: column;
}
.category-articles-list-item {
  margin: 4px 0;
}
</style>
