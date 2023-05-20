<template>
  <Transition
    appear
    name="search-articles"
  >
    <div
      class="fixed top-28 left-0 w-full p-3 pb-0 bg-ctp-mantle sm:absolute sm:top-11 sm:left-80 sm:w-80 sm:border-t-2 sm:border-ctp-surface1 sm:shadow-lg"
      v-show="search.showArticlesList"
    >
      <div class="flex justify-between items-center pb-3">
        <span class="font-semibold">搜索结果</span>
        <span class="text-ctp-overlay1">共 {{ articles.length }} 条结果</span>
      </div>
      <div>
        <p class="pb-3 text-center" v-show="!articles.length">
          没有找到相关结果
        </p>
        <!-- 搜索结果 -->
        <div class="flex flex-col">
          <div
            class="overflow-x-auto mb-3 p-3 border border-ctp-overlay0 border-dashed rounded-md"
            v-for="(article, index) in articles"
            :key="index"
          >
            <!-- 文章标题匹配不到关键词显示 -->
            <router-link
              class="link-hover"
              v-show="!filterLinesByKeyword(article.title).length"
              :to="`/article/${article._id}`"
            >
              <h3 class="text-lg font-semibold pb-2">{{ article.title }}</h3>
            </router-link>
            <!-- 文章标题匹配到关键词显示 -->
            <router-link
              class="link-hover"
              v-show="filterLinesByKeyword(article.title).length"
              :to="`/article/${article._id}`"
            >
              <h3
                class="font-semibold pb-2"
                v-html="filterLinesByKeyword(article.title)[0]"
              ></h3>
            </router-link>
            <!-- 显示匹配到的第一条的文章内容 -->
            <p class="text-sm" v-html="filterLinesByKeyword(article.content)[0]"></p>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SearchArticlesList",
  computed: {
    ...mapState(["search"]),
    articles() {
      return this.search.articles;
    },
  },
  methods: {
    // 过滤文章中匹配关键字的行
    filterLinesByKeyword(content) {
      return content
        .split("\n")
        .filter((item) => {
          return item.toLowerCase().includes(this.search.keyword.toLowerCase());
        })
        .map((item) => {
          const regex = new RegExp(`${this.search.keyword}`, "gi");
          item = item.replace(regex, '<span class="bg-ctp-peach">$&</span>');
          return item;
        });
    },
  },
  watch: {
    articles() {
      if (this.articles) {
        this.$store.commit("SetShowSearchArticlesList", true);
      }
    },
  },
};
</script>

<style scoped>
.search-articles-enter-active{
  animation: fadeIn;
  animation-duration: 0.5s;
}
.search-articles-leave-active{
  animation: slideOutRight;
  animation-duration: 0.5s;
}
</style>
