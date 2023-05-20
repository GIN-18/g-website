<template>
  <div>
    <!-- 移动端搜索框 -->
    <div class="flex justify-center items-center w-full mb-3 sm:hidden">
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
      <!-- 搜索框 -->
      <input
        class="w-full px-8 py-2 outline-none rounded-md placeholder-ctp-overlay0 bg-ctp-surface0"
        type="text"
        placeholder="请输入文章标题或内容"
        ref="searchInput"
        v-model="searchInputValue"
        @keydown.enter="searchArticles(searchInputValue)"
        @focus="SetFocusToHide(false)"
        @blur="SetFocusToHide(true)"
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
    <!-- pc端搜索框 -->
    <div class="hidden sm:flex sm:justify-center sm:items-center">
      <!-- 搜索框 -->
      <input
        class="w-64 px-3 py-1 outline-none border border-ctp-text rounded-md bg-ctp-base placeholder-ctp-overlay0 transition focus:border-ctp-blue focus:ring-2 focus:ring-ctp-blue"
        type="text"
        placeholder="请输入文章标题或内容"
        ref="searchInput"
        v-model="searchInputValue"
        v-show="searchButton"
        @keydown.enter="searchArticles(searchInputValue)"
      />
      <!-- 清除按钮 -->
      <button
        class="fixed right-28"
        v-show="showClearButton"
        @click="clearSearchInputValue"
      >
        <svg
          t="1681870722917"
          class="fill-ctp-overlay1"
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
      <!-- 搜索按钮 -->
      <button class="p-3" @click="showSearchButton">
        <svg
          t="1681807555212"
          class="fill-ctp-text"
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
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  name: "Search",
  data() {
    return {
      showClearButton: false,
      searchInputValue: "",
      // pc端属性
      searchButton: false,
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
    // 搜索文章
    ...mapActions(["searchArticles"]),
    ...mapMutations(["SetFocusToHide", "SetShowSearchArticlesList"]),

    // 清除搜索框中的内容
    clearSearchInputValue() {
      this.searchInputValue = "";
      this.$refs.searchInput.focus();
    },

    // pc端方法
    // 隐藏或显示搜索框
    showSearchButton() {
      this.searchInputValue = "";
      this.SetShowSearchArticlesList(false);
      this.searchButton = !this.searchButton;
    },
  },
};
</script>
