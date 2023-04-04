<template>
  <div class="w-full px-3 sm:w-7/12">
    <SingleTitle>所有分类</SingleTitle>

    <!-- 分类总数 -->
    <CategoriesPageMetaLine
      :sumOfCategories="categories.length"
    ></CategoriesPageMetaLine>

    <!-- 文章列表 -->
    <CategoriesArticlesList :categories="categories"></CategoriesArticlesList>
  </div>
</template>

<script>
import { getAllCategories } from "@/request/categories";

import SingleTitle from "@/components/common/SingleTitle";
import CategoriesPageMetaLine from "@/components/main/categories/CategoriesPageMetaLine";
import CategoriesArticlesList from "@/components/main/categories/CategoriesArticlesList";

export default {
  name: "Categories",
  components: {
    SingleTitle,
    CategoriesPageMetaLine,
    CategoriesArticlesList,
  },
  data() {
    return {
      categories: [],
    };
  },
  created() {
    getAllCategories().then((res) => {
      this.categories = res.data;
    });
  },
};
</script>
