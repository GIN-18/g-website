<template>
  <!-- 移动端菜单栏 -->
  <div
    class="fixed top-12 left-0 w-full pt-3 px-3 border-t-2 border-ctp-surface0 bg-ctp-mantle sm:hidden"
    v-show="showMobileMenu"
  >
    <Search></Search>
    <Navbar></Navbar>
    <Theme></Theme>
  </div>
</template>

<script>
import { mapState } from "vuex";

import Search from "@/components/header/menu/search/Search";
import Navbar from "@/components/header/menu/navbar/Navbar";
import Theme from "@/components/header/menu/theme/Theme";

export default {
  name: "Menu",
  components: {
    Search,
    Navbar,
    Theme,
  },
  computed: {
    ...mapState(["showMobileMenu"]),
  },
};
</script>
