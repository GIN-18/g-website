<template>
  <!-- FIX: 宽屏定位无效 -->
  <div
    class="fixed top-28 left-0 w-full p-3 pb-0 bg-ctp-mantle sm:top-12 sm:right-20 sm:w-72 sm:border-t-2 sm:border-ctp-surface1"
    v-show="showSearchArticlesList"
  >
    <div class="flex justify-between items-center pb-3">
      <span class="font-semibold">搜索结果</span>
      <span class="text-ctp-overlay1"
        >共 {{ searchArticlesList.length }} 条结果</span
      >
    </div>
    <div>
      <p class="pb-3 text-center" v-show="!searchArticlesList.length">
        没有找到相关结果
      </p>
      <div class="flex flex-col">
        <router-link
          class="pb-3 link-hover"
          v-for="(article, index) in searchArticlesList"
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
import { mapState, mapMutations } from "vuex";

export default {
  name: "SearchArticlesList",
  computed: {
    ...mapState(["searchArticlesList", "showSearchArticlesList"]),
  },
  methods: {
    ...mapMutations(["setShowSearchArticlesList"]),
  },
  watch: {
    searchArticlesList() {
      if (this.searchArticlesList) {
        this.setShowSearchArticlesList(true);
      }
    },
  },
};
</script>
