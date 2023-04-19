<template>
  <div class="flex justify-center items-center w-full mb-3">
    <svg
      t="1681807555212"
      class="fill-ctp-overlay1 fixed left-5"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2605"
      id="mx_n_1681807555214"
      width="16"
      height="16"
    >
      <path
        d="M968.842667 908.501333L726.698667 666.357333A382.293333 382.293333 0 0 0 810.666667 426.666667C810.666667 214.592 638.752 42.666667 426.666667 42.666667 214.592 42.666667 42.666667 214.592 42.666667 426.666667s171.925333 384 384 384c90.666667 0 173.994667-31.413333 239.690666-83.978667l242.144 242.144a42.666667 42.666667 0 0 0 60.341334-60.330667zM426.666667 725.333333c-164.949333 0-298.666667-133.717333-298.666667-298.666666s133.717333-298.666667 298.666667-298.666667c164.96 0 298.666667 133.717333 298.666666 298.666667S591.626667 725.333333 426.666667 725.333333z"
        p-id="2606"
      ></path>
    </svg>
    <input
      class="w-full px-8 py-2 outline-none rounded-md placeholder-ctp-overlay1 bg-ctp-surface0"
      type="text"
      placeholder="请输入文章标题或内容"
      ref="searchInput"
      v-model="searchInputValue"
      @keydown.enter="search"
      @focus="focusToHide"
      @blur="focusToHide"
    />
    <!-- 清除按钮 -->
    <button
      class="flex justify-center items-center"
      v-show="showClearButton"
      @click="clearSearchInputValue"
    >
      <svg
        t="1681870722917"
        class="fill-ctp-overlay1 fixed right-5"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2493"
        width="16"
        height="16"
      >
        <path
          d="M512 42.666667C252.8 42.666667 42.666667 252.789333 42.666667 512s210.133333 469.333333 469.333333 469.333333 469.333333-210.122667 469.333333-469.333333S771.2 42.666667 512 42.666667z m0 853.333333c-212.074667 0-384-171.925333-384-384s171.925333-384 384-384 384 171.925333 384 384-171.925333 384-384 384z m150.858667-534.837333a42.688 42.688 0 0 0-60.352 0L512 451.658667l-90.496-90.485334a42.666667 42.666667 0 0 0-60.352 60.330667L451.658667 512l-90.506667 90.496a42.666667 42.666667 0 0 0 60.352 60.330667L512 572.341333l90.496 90.485334a42.666667 42.666667 0 1 0 60.352-60.330667L572.341333 512l90.506667-90.496a42.666667 42.666667 0 0 0 0.010667-60.341333z"
          p-id="2494"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script>
import { getArticlesByKeyword } from "@/request/articles";

export default {
  name: "MobileSearch",
  data() {
    return {
      showClearButton: false,
      searchInputValue: "",
    };
  },
  watch: {
    // 搜索框中有内容才会显示清楚按钮
    searchInputValue() {
      if (this.searchInputValue) {
        this.showClearButton = true;
      } else {
        this.showClearButton = false;
      }
    },
  },
  methods: {
    search(e) {
      getArticlesByKeyword(e.target.value).then((res) => {
        this.$store.state.searchArticles = res.data;
      });
    },
    // 清除搜索框中的内容
    clearSearchInputValue() {
      this.searchInputValue = "";
      this.$refs.searchInput.focus()
    },
    // 搜索框获得焦点时，隐藏菜单栏
    focusToHide() {
      this.$store.dispatch("focusToHide");
    },
  },
};
</script>
