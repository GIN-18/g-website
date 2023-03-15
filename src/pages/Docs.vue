<template>
  <div id="docs">
    <SingleTitle>归档</SingleTitle>
    <DocItem v-for="(year, index) in years" :key="index" :year="year"></DocItem>
  </div>
</template>

<script>
import axios from "axios";

import SingleTitle from "@/components/common/SingleTitle";
import DocItem from "@/components/main/docs/DocItem";

export default {
  name: "Docs",
  components: {
    SingleTitle,
    DocItem,
  },
  data() {
    return {
      years: [],
    };
  },
  created() {
    axios
      .get("https://website.cms.gin-18.top/api/article/getAllYears")
      .then((res) => {
        this.years = res.data.data;
      });
  },
};
</script>
