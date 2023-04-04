<template>
  <div class="w-full px-3 sm:w-7/12">
    <SingleTitle>文章列表</SingleTitle>
    <!-- 文章总数 -->
    <ArticlesPageMetaLine
      :sumOfArticles="articles.length"
    ></ArticlesPageMetaLine>
    <!-- 文章列表 -->
    <ArticlesList :articles="articles"></ArticlesList>
  </div>
</template>

<script>
import { getAllArticles } from "@/request/articles";

import SingleTitle from "@/components/common/SingleTitle";
import ArticlesPageMetaLine from "@/components/main/articles/ArticlesPageMetaLine";
import ArticlesList from "@/components/main/articles/ArticlesList";

export default {
  name: "Articles",
  components: {
    SingleTitle,
    ArticlesPageMetaLine,
    ArticlesList,
  },
  data() {
    return {
      articles: [],
    };
  },
  created() {
    getAllArticles().then((res) => {
      this.articles = res.data;
    });
  },
};
</script>
