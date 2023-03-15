<template>
  <div id="tags">
    <SingleTitle>所有标签</SingleTitle>
    <!-- 标签总数 -->
    <TagsPageMetaLine :sumOfTags="tags.length"></TagsPageMetaLine>
    <!-- 标签列表 -->
    <TagList :tagList="tags"></TagList>
    <!-- 展示根据标签查找到的文章 -->
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";

import SingleTitle from "@/components/common/SingleTitle";
import TagsPageMetaLine from "@/components/main/tags/TagsPageMetaLine";
import TagList from "@/components/main/tags/TagList";

export default {
  name: "Tags",
  components: {
    SingleTitle,
    TagsPageMetaLine,
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
