<template>
  <div
    class="article-list-item p-3 border-2 border-ctp-subtext0 rounded-md"
  >
    <!-- 文章标题 -->
    <router-link
      class="text-lg font-semibold link-hover"
      :to="`/article/${id}`"
    >
      <h3>
        {{ title }}
      </h3>
    </router-link>

    <!-- 文章描述 -->
    <p class="py-3 text-ctp-subtext0">
      {{ description }}
    </p>

    <!-- 文章信息 -->
    <ArticleMetaLine
      :created="created"
      :updated="updated"
      :tag="tag"
    ></ArticleMetaLine>
  </div>
</template>

<script>
import ArticleMetaLine from "@/components/main/article/ArticleMetaLine";

export default {
  name: "ArticlesListItem",
  props: ["id", "title", "description", "created", "updated", "tag"],
  components: {
    ArticleMetaLine,
  },
};
</script>

<style scoped>
.article-list-item:not(:last-child) {
  @apply mb-3;
}
</style>
