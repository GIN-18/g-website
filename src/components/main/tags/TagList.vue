<template>
  <div id="tag-list">
    <TagListItem v-for="(tag, index) in tagList" :key="index" :tag="tag">{{ tag }}</TagListItem>
  </div>
</template>

<script>
import TagListItem from "@/components/main/tags/TagListItem";

export default {
  name: "TagList",
  props: ["tagList"],
  components: {
    TagListItem,
  },
};
</script>

<style scoped>
#tag-list {
  display: flex;
  align-items: center;
}
</style>
