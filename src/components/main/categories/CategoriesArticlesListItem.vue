<template>
  <div class="border-2 border-ctp-subtext0 rounded-md">
    <header
      class="flex justify-between p-3 border-b-2 border-ctp-subtext0 text-ctp-text text-lg font-semibold"
    >
      <h3 class="category-name">{{ category }}</h3>
      <span class="sum-of-category-item"
        >共 {{ categoryArticles.length }} 篇</span
      >
    </header>
    <ul class="p-3 pb-0">
      <li
        class="pb-3 link-hover"
        v-for="(article, index) in categoryArticles"
        :key="index"
      >
        <router-link :to="`/article/${article._id}`">
          {{ article.title }}
        </router-link>
      </li>
    </ul>
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
