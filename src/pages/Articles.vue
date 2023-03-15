<template>
  <div id="articles">
    <SingleTitle>文章列表</SingleTitle>
    <!-- 文章总数 -->
    <ArticlesPageMetaLine
      :sumOfArticles="articles.length"
    ></ArticlesPageMetaLine>
    <!-- 文章列表 -->
    <ArticleList :articles="articles"></ArticleList>
  </div>
</template>

<script>
import axios from "axios";

import SingleTitle from "@/components/common/SingleTitle";
import ArticlesPageMetaLine from "@/components/main/articles/ArticlesPageMetaLine";
import ArticleList from "@/components/main/articles/ArticleList";

export default {
  name: "Articles",
  components: {
    SingleTitle,
    ArticlesPageMetaLine,
    ArticleList,
  },
  data() {
    return {
      articles: [],
    };
  },
  created() {
    axios
      .get(`https://website.cms.gin-18.top/api/article/getAllArticle`)
      .then((res) => {
        this.articles = res.data.data;
      });
  },
};
</script>
