<template>
  <div>
    <GroupTitle>
      <svg
        t="1678590010691"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="63960"
        width="18"
        height="18"
      >
        <path
          d="M800 192h-288a128 128 0 0 0-128-128H160a128 128 0 0 0-128 128v576a192 192 0 0 0 192 192h576a192 192 0 0 0 192-192V384a192 192 0 0 0-192-192z"
          fill="#3B4252"
          p-id="63961"
        ></path>
      </svg>
      {{ year }}
    </GroupTitle>
    <ul>
      <li class="doc-item" v-for="(docItem, index) in docItemList" :key="index">
        <router-link :to="`/article/${docItem._id}`">{{
          docItem.title
        }}</router-link>
        <span>{{ MonthAndDate(docItem.created) }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

import GroupTitle from "@/components/common/GroupTitle";

export default {
  name: "DocItem",
  props: ["year"],
  components: {
    GroupTitle,
  },
  data() {
    return {
      docItemList: [],
    };
  },
  methods: {
    MonthAndDate(timestamp) {
      var date = new Date(timestamp * 1000);
      var currentMonth =
        date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth();
      var currentDate =
        date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      return `${currentMonth} - ${currentDate}`;
    },
  },
  created() {
    axios
      .get("https://website.cms.gin-18.top/api/article/getArticleByYear", {
        params: {
          year: this.year,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        this.docItemList = res.data.data;
      });
  },
};
</script>

<style scoped>
.doc-item {
  display: flex;
  justify-content: space-between;
}
</style>
