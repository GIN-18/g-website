<template>
  <transition appear name="doc-item">
    <div v-show="showDoc">
      <GroupTitle>
        <svg
          t="1678611562869"
          class="primary-icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4414"
          width="18"
          height="18"
        >
          <path
            d="M399.082667 260.672L423.658667 298.666667H853.333333c23.530667 0 42.666667 19.136 42.666667 42.666666v469.333334c0 23.530667-19.136 42.666667-42.666667 42.666666H170.666667c-23.530667 0-42.666667-19.136-42.666667-42.666666V213.333333c0-23.530667 19.136-42.666667 42.666667-42.666666h170.666666l57.749334 90.005333zM384 85.333333H170.666667C99.946667 85.333333 42.666667 142.613333 42.666667 213.333333v597.333334c0 70.72 57.28 128 128 128h682.666666c70.72 0 128-57.28 128-128V341.333333c0-70.72-57.28-128-128-128H469.333333L384 85.333333z"
            p-id="4415"
            fill="#3B4252"
          ></path>
        </svg>
        {{ year }}
      </GroupTitle>
      <ul>
        <li
          class="doc-item"
          v-for="(docItem, index) in docItemList"
          :key="index"
        >
          <router-link :to="`/article/${docItem._id}`">{{
            docItem.title
          }}</router-link>
          <span class="doc-item-date">{{ MonthAndDate(docItem.created) }}</span>
        </li>
      </ul>
    </div>
  </transition>
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
      showDoc: false,
      docItemList: [],
    };
  },
  methods: {
    // 月份和日期添加0
    MonthAndDate(timestamp) {
      var date = new Date(timestamp * 1000);
      var currentMonth =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1;
      var currentDate =
        date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      return `${currentMonth}-${currentDate}`;
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
        this.showDoc = res.data.data.length > 0 ? true : false;
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

.doc-item-date {
  color: var(--nord-text-meta);
}

.doc-item-enter-active {
  animation-name: zoomIn;
  animation-duration: 0.2s;
}
</style>
