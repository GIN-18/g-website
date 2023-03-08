<template>
  <div id="tag-list">
    <TagListItem v-for="(tag, index) in tagList" :key="index" :tag="tag">{{ tag }}</TagListItem>
  </div>
</template>

<script>
import axios from "axios";

import TagListItem from "@/components/main/tags/TagListItem";

export default {
  name: "TagList",
  components: {
    TagListItem,
  },
  data() {
    return {
      tags: [],
    };
  },
  computed: {
    tagList() {
      return Array.from(new Set(this.tags));
    },
  },
  created() {
    axios
      .get("https://website.cms.gin-18.top/api/article/getAllTag")
      .then((res) => {
        this.tags = res.data.data;
      });
  },
};
</script>

<style scoped>
#tag-list {
  display: flex;
  align-items: center;
}
</style>
