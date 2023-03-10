<template>
  <div class="categories-articles-list">
    <CategoriesArticlesListItem
      v-for="(category, index) in categories"
      :key="index"
      :category="category"
    ></CategoriesArticlesListItem>
  </div>
</template>

<script>
import CategoriesArticlesListItem from "@/components/main/categories/CategoriesArticlesListItem";

export default {
  name: "CategoriesArticlesList",
  props: ["categories"],
  components: {
    CategoriesArticlesListItem,
  },
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
