<template>
  <div class="articles-page-meta-line">
    <IconInfo
      componentStyle="mb-2"
      fontStyle="text-sm text-ctp-overlay1"
    >
      <template v-slot:icon>
        <svg
          t="1678613546748"
          class="fill-ctp-overlay1"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5906"
          width="14"
          height="14"
        >
          <path
            d="M810.666667 0H213.333333C142.613333 0 85.333333 57.28 85.333333 128v768c0 70.72 57.28 128 128 128h597.333334c70.72 0 128-57.28 128-128V128c0-70.72-57.28-128-128-128z m42.666666 896c0 23.573333-19.093333 42.666667-42.666666 42.666667H213.333333c-23.573333 0-42.666667-19.093333-42.666666-42.666667V128c0-23.573333 19.093333-42.666667 42.666666-42.666667h597.333334c23.573333 0 42.666667 19.093333 42.666666 42.666667v768zM682.666667 725.333333H341.333333a42.666667 42.666667 0 0 0 0 85.333334h341.333334a42.666667 42.666667 0 0 0 0-85.333334z m0-170.666666H341.333333a42.666667 42.666667 0 0 0 0 85.333333h341.333334a42.666667 42.666667 0 0 0 0-85.333333z m0-170.666667H341.333333a42.666667 42.666667 0 0 0 0 85.333333h341.333334a42.666667 42.666667 0 0 0 0-85.333333z m-341.333334-85.333333h170.666667a42.666667 42.666667 0 0 0 0-85.333334H341.333333a42.666667 42.666667 0 0 0 0 85.333334z"
            p-id="5907"
          ></path>
        </svg>
      </template>
      <template v-slot:info> 共 {{ sumOfArticles }} 篇文章 </template>
    </IconInfo>
  </div>
</template>

<script>
import IconInfo from "@/components/common/IconInfo";

export default {
  name: "ArticlesPageMetaLine",
  props: ["sumOfArticles"],
  components: {
    IconInfo,
  },
};
</script>

<style scoped></style>
