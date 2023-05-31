<template>
  <Transition appear name="doc-item">
    <div>
      <IconInfo class="mb-3">
        <template v-slot:icon>
          <svg
            t="1680321773787"
            class="fill-current"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="9426"
            width="22"
            height="22"
          >
            <path
              d="M421.42 152.25H152.25c-23.78 0-44.62 8.83-62.02 26.23C72.58 196.13 64 217.46 64 242.71v538.58c0 25.25 8.82 46.57 26.23 64.23 17.41 17.66 38.24 26.23 62.02 26.23h719.49c23.78 0 44.62-8.83 62.02-26.23 17.41-17.4 26.23-38.98 26.23-64.23V333.17c0-25.25-8.82-46.57-26.23-64.23s-38.24-26.23-62.02-26.23H511.88l-90.46-90.46z"
              p-id="9427"
            ></path>
          </svg>
        </template>
        <template v-slot:info>
          {{ year }}
        </template>
      </IconInfo>

      <!-- 文章列表 -->
      <ul>
        <TransitionGroup appear name="doc-item-article">
          <li
            class="flex justify-between items-center mb-3"
            v-for="(docItem, index) in docItemList"
            :key="index"
          >
            <router-link class="link-hover" :to="`/article/${docItem._id}`">{{
              docItem.title
            }}</router-link>
            <span class="text-ctp-overlay1">{{
              MonthAndDate(docItem.createdAt)
            }}</span>
          </li>
        </TransitionGroup>
      </ul>
    </div>
  </Transition>
</template>

<script>
import { getArticlesByYear } from "@/request/docs";

import IconInfo from "@/components/common/IconInfo";

export default {
  name: "DocItem",
  props: ["year"],
  components: {
    IconInfo,
  },
  data() {
    return {
      docItemList: [],
    };
  },
  methods: {
    // 月份和日期添加0
    MonthAndDate(timestamp) {
      var date = new Date(timestamp);
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
    getArticlesByYear({
      year: this.year,
    }).then((res) => {
      this.docItemList = res.data;
    });
  },
};
</script>

<style scoped>
.doc-item-enter-active,
.doc-item-article-enter-active {
  animation: fadeIn;
  animation-duration: 0.5s;
}
.doc-item-leave-active,
.doc-item-article-leave-active {
  animation: fadeOut;
  animation-duration: 0.5s;
}
</style>
