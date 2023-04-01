<template>
  <div class="w-7/12" v-if="showArticles">
    <SingleTitle>文章列表</SingleTitle>
    <!-- 文章总数 -->
    <ArticlesPageMetaLine
      :sumOfArticles="articles.length"
    ></ArticlesPageMetaLine>
    <!-- 文章列表 -->
    <ArticlesList :articles="articles"></ArticlesList>
  </div>
  <Loading v-else></Loading>
</template>

<script>
import axios from "axios";

import Loading from "@/components/common/Loading";
import SingleTitle from "@/components/common/SingleTitle";
import ArticlesPageMetaLine from "@/components/main/articles/ArticlesPageMetaLine";
import ArticlesList from "@/components/main/articles/ArticlesList";

export default {
  name: "Articles",
  components: {
    Loading,
    SingleTitle,
    ArticlesPageMetaLine,
    ArticlesList,
  },
  data() {
    return {
      showArticles: false,
      articles: [],
    };
  },
  created() {
    axios
      .get(`https://website.cms.gin-18.top/api/article/getAllArticle`)
      .then((res) => {
        this.showArticles = res.data.data.length > 0 ? true : false;
        this.articles = res.data.data;
      });
  },
};
</script>
