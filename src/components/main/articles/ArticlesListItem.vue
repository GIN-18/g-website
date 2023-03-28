<template>
  <transition appear name="article-item">
    <div class="article-list-item">
      <!-- 文章标题 -->
      <header>
        <router-link :to="`/article/${id}`">
          <h3 class="article-title">
            {{ title }}
          </h3>
        </router-link>
      </header>
      <!-- 文章描述 -->
      <p class="article-description">
        {{ description }}
      </p>
      <!-- 文章信息 -->
      <ArticleMetaLine
        :created="created"
        :updated="updated"
        :tag="tag"
      ></ArticleMetaLine>
    </div>
  </transition>
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
.article-list-item {
  padding: 16px;
  border: 1px solid var(--nord-border-primary);
  border-radius: 6px;
}
.article-list-item:not(:first-child) {
  margin-top: 8px;
}

/* 文章描述 */
.article-description {
  margin: 16px 0;
  color: var(--nord-text-description);
}

.meta-line {
  margin-bottom: 0;
}

/* 文章项动画 */
.article-item-enter-active {
  animation-name: zoomIn;
  animation-duration: 0.2s;
}
</style>
