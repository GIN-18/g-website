<template>
  <div>
    <h1>{{ tagList }}</h1>
    <h2>{{ test }}</h2>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TagList",
  data() {
    return {
      tagList: [],
    };
  },
  computed: {
    test() {
      return this.tagList.reduce((previous, current) => {
        return current === "Linux" ? previous + 1 : previous + 0;
      }, 0)
    }
  },
  created() {
    axios
      .get("https://website.cms.gin-18.top/api/article/getAllTag")
      .then((res) => {
        this.tagList = res.data.data;
      });
  },
};
</script>

<style scoped></style>
