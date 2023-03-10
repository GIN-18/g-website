<template>
  <div>
    <SingleTitle>所有分类</SingleTitle>
    <MetaLine>
      <MetaLineItem>
        <template v-slot:icon>
          <div>
            <svg
              t="1678338671108"
              class="meta-icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="27040"
              width="14"
              height="14"
            >
              <path
                d="M800 192h-288a128 128 0 0 0-128-128H160a128 128 0 0 0-128 128v576a192 192 0 0 0 192 192h576a192 192 0 0 0 192-192V384a192 192 0 0 0-192-192z"
                fill="#3B4252"
                p-id="27041"
              ></path>
            </svg>
          </div>
        </template>
        <template v-slot:info> 共 {{ categories.length }} 种分类 </template>
      </MetaLineItem>
    </MetaLine>
    <CategoriesArticlesList :categories="categories"></CategoriesArticlesList>
  </div>
</template>

<script>
import axios from "axios";

import SingleTitle from "@/components/common/SingleTitle";
import MetaLine from "@/components/common/MetaLine";
import MetaLineItem from "@/components/common/MetaLineItem";
import CategoriesArticlesList from "@/components/main/categories/CategoriesArticlesList";

export default {
  name: "Categories",
  components: {
    SingleTitle,
    MetaLine,
    MetaLineItem,
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

<style scoped></style>
