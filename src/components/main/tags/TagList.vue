<template>
  <div class="flex items-center mb-3">
    <TagListItem v-for="(tag, index) in tagList" :key="index" :tag="tag">{{
      tag
    }}</TagListItem>
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
