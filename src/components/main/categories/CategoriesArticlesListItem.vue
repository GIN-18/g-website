<template>
  <transition appear name="categories-item">
    <div class="categories-articles-list-item">
      <header class="header-of-category-item">
        <h3 class="category-name">{{ category }}</h3>
        <span class="sum-of-category-item"
          >共 {{ categoryArticles.length }} 篇</span
        >
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
  </transition>
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
  margin: 0 0 8px;
  border: 1px solid var(--nord-border-primary);
  border-radius: 6px;
}

/* 分类项头部 */
.header-of-category-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid var(--nord-border-primary);
}

/* 分类文章列表 */
.category-articles-list {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: auto;
  max-height: 160px;
  height: 160px;
  padding: 8px;
}

/* 分类项动画 */
.categories-item-enter-active {
  animation-name: zoomIn;
  animation-duration: 0.2s;
}
</style>
