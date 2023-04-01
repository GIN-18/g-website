<template>
  <div class="grid grid-cols-2 gap-3">
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
