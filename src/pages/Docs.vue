<template>
  <div class="w-full px-3">
    <SingleTitle>归档</SingleTitle>
    <DocItem v-for="(year, index) in years" :key="index" :year="year"></DocItem>
  </div>
</template>

<script>
import { getAllYears } from "@/request/docs";

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
    getAllYears().then((res) => {
      this.years = res.data;
    });
  },
};
</script>
