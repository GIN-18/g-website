<template>
  <div class="w-7/12">
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
import { getAllTags } from "@/request/tags";

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
    getAllTags().then((res) => {
      // 数组去重
      this.tags = Array.from(new Set(res.data));
    });
  },
};
</script>
