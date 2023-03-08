<template>
  <div id="tags">
    <SingleTitle>所有标签</SingleTitle>
    <TagList></TagList>
  </div>
</template>

<script>
import SingleTitle from "@/components/common/SingleTitle";
import TagList from "@/components/main/tags/TagList";

export default {
  name: "Tags",
  components: {
    SingleTitle,
    TagList,
  },
};
</script>

<style scoped></style>
