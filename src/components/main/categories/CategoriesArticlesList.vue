<template>
  <div class="categories-articles-list">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CategoriesArticlesList",
};
</script>

<style scoped>
.categories-articles-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
@media (min-width: 1008px) {
  .categories-articles-list {
    display: grid;
  }
}
@media (max-width: 1007px) {
  .categories-articles-list {
    display: grid;
  }
}
@media (max-width: 640px) {
  .categories-articles-list {
    display: block;
  }
}
</style>
