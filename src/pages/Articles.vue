<template>
  <div id="articles">
    <SingleTitle>文章列表</SingleTitle>
    <MetaLine>
      <MetaLineItem>
        <template v-slot:icon>
          <svg
            t="1678613546748"
            class="meta-icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5906"
            width="14"
            height="14"
          >
            <path
              d="M810.666667 0H213.333333C142.613333 0 85.333333 57.28 85.333333 128v768c0 70.72 57.28 128 128 128h597.333334c70.72 0 128-57.28 128-128V128c0-70.72-57.28-128-128-128z m42.666666 896c0 23.573333-19.093333 42.666667-42.666666 42.666667H213.333333c-23.573333 0-42.666667-19.093333-42.666666-42.666667V128c0-23.573333 19.093333-42.666667 42.666666-42.666667h597.333334c23.573333 0 42.666667 19.093333 42.666666 42.666667v768zM682.666667 725.333333H341.333333a42.666667 42.666667 0 0 0 0 85.333334h341.333334a42.666667 42.666667 0 0 0 0-85.333334z m0-170.666666H341.333333a42.666667 42.666667 0 0 0 0 85.333333h341.333334a42.666667 42.666667 0 0 0 0-85.333333z m0-170.666667H341.333333a42.666667 42.666667 0 0 0 0 85.333333h341.333334a42.666667 42.666667 0 0 0 0-85.333333z m-341.333334-85.333333h170.666667a42.666667 42.666667 0 0 0 0-85.333334H341.333333a42.666667 42.666667 0 0 0 0 85.333334z"
              p-id="5907"
              fill="#3B4252"
            ></path>
          </svg>
        </template>
        <template v-slot:info> 共 {{ articles.length }} 篇文章 </template>
      </MetaLineItem>
    </MetaLine>
    <ArticleList>
      <ArticleListItem
        v-for="(article, index) in articles"
        :key="index"
        :id="article._id"
        :title="article.title"
        :description="article.description"
        :created="article.created"
        :views="article.views"
        :tag="article.tag"
      ></ArticleListItem>
    </ArticleList>
  </div>
</template>

<script>
import axios from "axios";

import SingleTitle from "@/components/common/SingleTitle";
import MetaLine from "@/components/common/MetaLine";
import MetaLineItem from "@/components/common/MetaLineItem";
import ArticleList from "@/components/main/articles/ArticleList";
import ArticleListItem from "@/components/main/articles/ArticleListItem";

export default {
  name: "Articles",
  components: {
    SingleTitle,
    MetaLine,
    MetaLineItem,
    ArticleList,
    ArticleListItem,
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

<style scoped></style>
