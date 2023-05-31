<template>
  <Transition appear name="article-list-item">
    <div class="article-list-item p-3 border border-ctp-subtext0 rounded-md">
      <!-- 文章标题 -->
      <router-link
        class="text-lg font-semibold link-hover"
        :to="`/article/${id}`"
      >
        <h3>
          {{ title }}
        </h3>
      </router-link>
      <!-- 文章标签 -->
      <ArticleTag :tag="tag"></ArticleTag>
      <!-- 文章描述 -->
      <p class="pb-3 text-ctp-subtext0">
        {{ description }}
      </p>
      <!-- 文章信息 -->
      <ArticleMetaLine
        :createdAt="createdAt"
        :updatedAt="updatedAt"
      ></ArticleMetaLine>
    </div>
  </Transition>
</template>

<script>
import ArticleTag from "@/components/main/article/ArticleTag";
import ArticleMetaLine from "@/components/main/article/ArticleMetaLine";

export default {
  name: "ArticlesListItem",
  props: ["id", "title", "description", "createdAt", "updatedAt", "tag"],
  components: {
    ArticleTag,
    ArticleMetaLine,
  },
};
</script>

<style scoped>
.article-list-item:not(:last-child) {
  @apply mb-3;
}
.article-list-item-enter-active {
  animation: fadeIn;
  animation-duration: 0.5s;
}
.article-list-item-leave-active {
  animation: fadeOut;
  animation-duration: 0.5s;
}
</style>
