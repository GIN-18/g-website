<template>
  <div
    class="fixed top-12 left-0 flex flex-col justify-center items-center w-full p-3 pb-0 bg-ctp-mantle"
    v-show="$store.state.showMobileMenu"
  >
    <MobileSearch></MobileSearch>
    <Nav v-show="!focusToHide"></Nav>
    <Theme v-show="!focusToHide"></Theme>
  </div>
</template>

<script>
import Nav from "@/components/header/menu/nav/Nav";
import Theme from "@/components/header/menu/theme/Theme";
import MobileSearch from "@/components/mobile/MobileSearch";

export default {
  name: "MobileMenu",
  components: {
    Nav,
    Theme,
    MobileSearch,
  },
  computed: {
    focusToHide() {
      return this.$store.state.focusToHide;
    },
  },
};
</script>
