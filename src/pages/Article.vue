<template>
  <div id="article">
    <h1 id="article-title">{{ title }}</h1>
    <MetaLine>
      <MetaLineItem>
        <template v-slot:icon>
          <svg
            t="1676989565011"
            class="meta-icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="31546"
            width="14"
            height="14"
          >
            <path
              d="M512 32a480 480 0 1 0 480 480A480 480 0 0 0 512 32z m224 544l-224 24a80 80 0 0 1-88.32-85.76V512L448 224a64 64 0 0 1 128 0l17.28 208.64L736 448a64 64 0 0 1 0 128z"
              fill="#616E88"
              p-id="31547"
            ></path>
          </svg>
        </template>
        <template v-slot:info>
          {{ postDate }}
        </template>
      </MetaLineItem>
      <MetaLineItem>
        <template v-slot:icon>
          <svg
            t="1676989380631"
            class="meta-icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="26266"
            width="14"
            height="14"
          >
            <path
              d="M16 875.2l256 68.8-136.64-513.92zM825.92 163.52c-32-119.36-196.48-179.2-367.04-133.44s-283.2 179.84-251.2 299.2l182.08 680 618.24-165.76z m-292.8 144.64a80 80 0 1 1 56.64-97.92 80 80 0 0 1-56.64 97.92z"
              fill="#616E88"
              p-id="26267"
            ></path>
          </svg>
        </template>
        <template v-slot:info>
          {{ tag }}
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
              fill="#616E88"
              p-id="33118"
            ></path>
          </svg>
        </template>
        <template v-slot:info>
          {{ views }}
        </template>
      </MetaLineItem>
    </MetaLine>
    <article id="article-content" v-html="content"></article>
  </div>
</template>

<script>
import axios from "axios";
import { formatDate } from "@/utils/dateFormat";
import markdownConversion from "@/utils/markdownConversion";

import MetaLine from "@/components/common/MetaLine";
import MetaLineItem from "@/components/common/MetaLineItem";

export default {
  name: "Article",
  components: {
    MetaLine,
    MetaLineItem,
  },
  data() {
    return {
      title: "",
      tag: "",
      created: "",
      views: "",
      content: "",
    };
  },
  computed: {
    postDate() {
      return formatDate(this.created);
    },
  },
  created() {
    axios
      .get("https://website.cms.gin-18.top/api/article/getArticleByIdAndUpdate", {
        params: {
          id: this.$route.params.id,
        },
      })
      .then((res) => {
        var { title, tag, created, views, content } = res.data.data;
        this.title = title;
        this.tag = tag;
        this.created = created;
        this.views = views;
        this.content = markdownConversion.markdownToHtml(content);
      });
  },
};
</script>

<style lang="css">
/* 引入文章样式 */
@import "@/assets/style/article/highlight.css";
@import "@/assets/style/article/markdown.css";

#article-title {
  margin: 32px 0 8px;
  animation: jello;
  animation-duration: 2s;
}

.table-of-contents ::marker {
  color: var(--nord-text-link);
}
</style>
