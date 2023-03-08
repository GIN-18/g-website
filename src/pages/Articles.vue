<template>
  <div id="blog">
    <SingleTitle> 文章列表 </SingleTitle>
    <MetaLine>
      <MetaLineItem>
        <template v-slot:icon>
          <svg
            t="1678171602315"
            class="meta-icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5604"
            width="14"
            height="14"
          >
            <path
              d="M345.6 32H102.4C64 32 32 64 32 102.4v819.2C32 960 64 992 102.4 992h243.2c38.4 0 70.4-32 70.4-70.4V102.4C416 64 384 32 345.6 32zM320 880H128c-25.6 0-48-22.4-48-48s22.4-48 48-48h192c25.6 0 48 22.4 48 48s-22.4 48-48 48z m0-640H128c-25.6 0-48-22.4-48-48S102.4 144 128 144h192c25.6 0 48 22.4 48 48s-22.4 48-48 48z m675.2 617.6L870.4 144c-6.4-38.4-41.6-64-80-57.6L550.4 128c-38.4 6.4-64 41.6-57.6 80l124.8 713.6c6.4 38.4 41.6 64 80 57.6l240-41.6c38.4-6.4 64-44.8 57.6-80z m-384-528c-25.6 3.2-51.2-12.8-57.6-38.4s12.8-51.2 38.4-57.6l188.8-32c25.6-3.2 51.2 12.8 57.6 38.4 3.2 25.6-12.8 51.2-38.4 57.6l-188.8 32zM892.8 832L704 864c-25.6 3.2-51.2-12.8-57.6-38.4-3.2-25.6 12.8-51.2 38.4-57.6l188.8-32c25.6-3.2 51.2 12.8 57.6 38.4 6.4 28.8-12.8 54.4-38.4 57.6z"
              fill="#3B4252"
              p-id="5605"
            ></path>
          </svg>
        </template>
        <template v-slot:info> 共 {{ articles.length }} 篇文章 </template>
      </MetaLineItem>
    </MetaLine>
    <ul id="article-list">
      <li
        class="article-item item-bigger"
        v-for="(article, index) in articles"
        :key="index"
      >
        <!-- 文章标题 -->
        <router-link
          class="article-title"
          :to="`/article/${article._id}/${article.views}`"
        >
          <header>
            <h3>{{ article.title }}</h3>
          </header>
        </router-link>
        <!-- 文章描述 -->
        <p class="article-description">{{ article.description }}</p>
        <!-- 文章信息 -->
        <MetaLine>
          <MetaLineItem>
            <template v-slot:icon>
              <svg
                t="1676798472391"
                class="meta-icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="6927"
                width="14"
                height="14"
              >
                <path
                  d="M512 32a480 480 0 1 0 480 480A480 480 0 0 0 512 32z m224 544l-224 24a80 80 0 0 1-88.32-85.76V512L448 224a64 64 0 0 1 128 0l17.28 208.64L736 448a64 64 0 0 1 0 128z"
                  fill="#616e88"
                  p-id="6928"
                ></path>
              </svg>
            </template>
            <template v-slot:info>
              {{ new Date(article.updated * 1000).toString().slice(0, 24) }}
            </template>
          </MetaLineItem>
          <MetaLineItem>
            <template v-slot:icon>
              <svg
                t="1676798554412"
                class="meta-icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="33117"
                width="14"
                height="14"
              >
                <path
                  d="M984.32 473.92C884.48 272.32 723.52 148.16 512 146.88S139.52 272.32 39.68 473.92a97.6 97.6 0 0 0 0 76.48C139.52 751.68 300.48 875.84 512 877.12s373.76-125.44 473.6-327.04a96 96 0 0 0-1.28-76.16zM512 740.48A228.48 228.48 0 1 1 740.16 512 228.16 228.16 0 0 1 512 740.48zM512 416a96 96 0 1 0 96 96 96 96 0 0 0-96-96z"
                  fill="#616e88"
                  p-id="33118"
                ></path>
              </svg>
            </template>
            <template v-slot:info>
              {{ article.views }}
            </template>
          </MetaLineItem>
          <MetaLineItem>
            <template v-slot:icon>
              <svg
                t="1676798614987"
                class="meta-icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="38631"
                width="14"
                height="14"
              >
                <path
                  d="M16 875.2l256 68.8-136.64-513.92zM825.92 163.52c-32-119.36-196.48-179.2-367.04-133.44s-283.2 179.84-251.2 299.2l182.08 680 618.24-165.76z m-292.8 144.64a80 80 0 1 1 56.64-97.92 80 80 0 0 1-56.64 97.92z"
                  fill="#616e88"
                  p-id="38632"
                ></path>
              </svg>
            </template>
            <template v-slot:info>
              {{ article.tag }}
            </template>
          </MetaLineItem>
        </MetaLine>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

import SingleTitle from "@/components/common/SingleTitle";
import MetaLine from "@/components/common/MetaLine";
import MetaLineItem from "@/components/common/MetaLineItem";

export default {
  name: "Articles",
  components: {
    SingleTitle,
    MetaLine,
    MetaLineItem,
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
  beforeRouteUpdate(to, from, next) {
    axios
      .get(
        `https://website.cms.gin-18.top/api/article/getArticleByTag?tag=${to.query.tag}`
      )
      .then((res) => {
        this.articles = res.data.data;
      });
    next();
  },
};
</script>

<style scoped>
.article-item {
  padding: 16px;
  border: 1px solid var(--nord-border-primary);
  border-radius: 6px;
}
.article-item:not(:first-child) {
  margin-top: 10px;
}

/* 文章标题 */
.article-item .article-title {
  color: var(--nord-text-link);
}
.article-item .article-title:hover {
  text-decoration: underline;
}

/* 文章描述 */
.article-item .article-description {
  margin: 8px 0 16px;
  color: var(--nord-text-description);
}
</style>
