<template>
  <div>
    <SingleTitle>所有分类</SingleTitle>
    <MetaLine>
      <MetaLineItem>
        <template v-slot:icon>
          <svg
            t="1678613901024"
            class="meta-icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="7733"
            width="14"
            height="14"
          >
            <path
              d="M597.332444 938.656889H213.336444c-23.573088 0-42.666222-19.093134-42.666222-42.666222V178.110145c-49.684816 17.599817-85.332444 64.852658-85.332444 120.564077v597.327111c0 70.687264 57.311403 127.998667 127.998666 127.998667h426.662223c55.71142 0 102.953594-35.658295 120.564077-85.332444L597.332444 938.656889zM810.663556 0H384.001333c-70.687264 0-127.998667 57.32207-127.998666 127.998667v597.327111c0 70.69793 57.311403 128.009333 127.998666 128.009333h426.662223c70.687264 0 127.998667-57.311403 127.998666-128.009333V127.998667c0-70.676597-57.311403-127.998667-127.998666-127.998667z m42.666222 725.325778a42.666222 42.666222 0 0 1-42.655556 42.676889H384.001333a42.666222 42.666222 0 0 1-42.666222-42.666223V127.998667a42.666222 42.666222 0 0 1 42.666222-42.666223h426.662223c23.573088 0 42.666222 19.093134 42.666222 42.666223v597.327111z"
              p-id="7734"
              fill="#3B4252"
            ></path>
          </svg>
        </template>
        <template v-slot:info> 共 {{ categories.length }} 种分类 </template>
      </MetaLineItem>
    </MetaLine>
    <!-- 文章列表 -->
    <CategoriesArticlesList>
      <CategoriesArticlesListItem
        v-for="(category, index) in categories"
        :key="index"
        :category="category"
      ></CategoriesArticlesListItem>
    </CategoriesArticlesList>
  </div>
</template>

<script>
import axios from "axios";

import SingleTitle from "@/components/common/SingleTitle";
import MetaLine from "@/components/common/MetaLine";
import MetaLineItem from "@/components/common/MetaLineItem";
import CategoriesArticlesList from "@/components/main/categories/CategoriesArticlesList";
import CategoriesArticlesListItem from "@/components/main/categories/CategoriesArticlesListItem";

export default {
  name: "Categories",
  components: {
    SingleTitle,
    MetaLine,
    MetaLineItem,
    CategoriesArticlesList,
    CategoriesArticlesListItem,
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

<style scoped></style>
