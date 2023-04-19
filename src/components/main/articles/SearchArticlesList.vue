<template>
  <div
    class="fixed top-32 left-0 w-full p-3 pb-0 bg-ctp-mantle"
    v-show="showSearchArticlesList"
  >
    <div class="flex justify-between items-center pb-3">
      <span class="font-semibold">搜索结果</span>
      <span class="text-ctp-overlay1">共 {{ sumOfArticles }} 条结果</span>
    </div>
    <div>
      <p class="text-center" v-show="!articles.length">没有数据</p>
      <div class="flex flex-col">
        <router-link
          class="pb-3"
          v-for="(article, index) in articles"
          :key="index"
          :to="`/article/${article._id}`"
        >
          {{ article.title }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchArticlesList",
  computed: {
    articles() {
      return this.$store.state.searchArticles;
    },
    sumOfArticles() {
      return this.$store.state.searchArticles.length;
    },
    showSearchArticlesList() {
      return this.$store.state.showSearchArticlesList;
    },
  },
  watch: {
    articles() {
      if (this.articles) {
        this.$store.dispatch("setShowSearchArticlesListToTrue");
      }
    },
  },
};
</script>
