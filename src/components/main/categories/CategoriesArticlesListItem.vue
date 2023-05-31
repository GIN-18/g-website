<template>
  <Transition appear name="categories-articles-list-item">
    <div
      class="categories-articles-list-item border border-ctp-subtext0 rounded-md"
    >
      <header
        class="flex justify-between p-3 border-b border-ctp-subtext0 text-ctp-text text-lg font-semibold"
      >
        <h3 class="category-name">{{ category }}</h3>
        <span class="sum-of-category-item"
          >共 {{ categoryArticles.length }} 篇</span
        >
      </header>
      <ul class="overflow-x-auto h-40 p-3 pb-0">
        <TransitionGroup appear name="categories-articles-list-item-article">
          <li
            class="pb-3 link-hover"
            v-for="(article, index) in categoryArticles"
            :key="index"
          >
            <router-link :to="`/article/${article._id}`">
              {{ article.title }}
            </router-link>
          </li>
        </TransitionGroup>
      </ul>
    </div>
  </Transition>
</template>

<script>
import { getArticlesByCategory } from "@/request/categories";

export default {
  name: "CategoriesArticlesListItem",
  props: ["category"],
  data() {
    return {
      categoryArticles: [],
    };
  },
  created() {
    getArticlesByCategory({
      category: this.category,
    }).then((res) => {
      this.categoryArticles = res.data;
    });
  },
};
</script>

<style scoped>
.categories-articles-list-item:not(:last-child) {
  @apply mb-3;
}
.categories-articles-list-item-enter-active,
.categories-articles-list-item-article-enter-active {
  animation: fadeIn;
  animation-duration: 0.5s;
}
.categories-articles-list-item-leave-active,
.categories-articles-list-item-article-leave-active {
  animation: fadeOut;
  animation-duration: 0.5s;
}
</style>
