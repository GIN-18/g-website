<template>
  <div class="sm:flex-1 sm:flex sm:justify-end">
    <!-- 移动端菜单栏 -->
    <Transition
      appear
      name="menu"
    >
      <div
        class="fixed top-12 left-0 w-full pt-3 px-3 border-t-2 border-ctp-surface0 bg-ctp-mantle blur-sm sm:hidden"
        v-if="showMobileMenu"
      >
        <Search></Search>
        <SearchArticlesList></SearchArticlesList>
        <Navbar v-show="focusToHide"></Navbar>
        <Theme v-show="focusToHide"></Theme>
      </div>
    </Transition>
    <!-- 宽屏菜单栏 -->
    <div class="hidden sm:flex sm:justify-center sm:items-center sm:relative">
      <Navbar></Navbar>
      <Theme></Theme>
      <Search></Search>
      <SearchArticlesList></SearchArticlesList>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import Search from "@/components/header/menu/search/Search";
import SearchArticlesList from "@/components/main/articles/SearchArticlesList";
import Navbar from "@/components/header/menu/navbar/Navbar";
import Theme from "@/components/header/menu/theme/Theme";

export default {
  name: "Menu",
  components: {
    Search,
    SearchArticlesList,
    Navbar,
    Theme,
  },
  computed: {
    ...mapState(["showMobileMenu", "focusToHide"]),
  },
  created() {},
};
</script>

<style scoped>
.menu-enter-active {
  animation: slideInRight;
  animation-duration: 0.5s;
}
.menu-leave-active {
  animation: slideOutRight;
  animation-duration: 0.5s;
}
</style>
