<template>
  <div>
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
import axios from "axios";

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
    axios
      .get("https://website.cms.gin-18.top/api/article/getAllCategory")
      .then((res) => {
        this.categories = res.data.data;
      });
  },
};
</script>
