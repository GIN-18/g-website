<template>
  <div id="tags">
    <SingleTitle>所有标签</SingleTitle>
    <MetaLine>
      <MetaLineItem>
        <template v-slot:icon>
          <svg
            t="1678286358225"
            class="meta-icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="16524"
            width="14"
            height="14"
          >
            <path
              d="M16 875.2l256 68.8-136.64-513.92zM825.92 163.52c-32-119.36-196.48-179.2-367.04-133.44s-283.2 179.84-251.2 299.2l182.08 680 618.24-165.76z m-292.8 144.64a80 80 0 1 1 56.64-97.92 80 80 0 0 1-56.64 97.92z"
              fill="#3B4252"
              p-id="16525"
            ></path>
          </svg>
        </template>
        <template v-slot:info>
          共 {{ tags.length }} 个标签
        </template>
      </MetaLineItem>
    </MetaLine>
    <TagList :tagList="tags"></TagList>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";

import SingleTitle from "@/components/common/SingleTitle";
import MetaLine from "@/components/common/MetaLine";
import MetaLineItem from "@/components/common/MetaLineItem";
import TagList from "@/components/main/tags/TagList";

export default {
  name: "Tags",
  components: {
    SingleTitle,
    MetaLine,
    MetaLineItem,
    TagList,
  },
  data() {
    return {
      tags: [],
    };
  },
  created() {
    axios
      .get("https://website.cms.gin-18.top/api/article/getAllTag")
      .then((res) => {
        // 数组去重
        this.tags = Array.from(new Set(res.data.data));
      });
  },
};
</script>

<style scoped></style>
