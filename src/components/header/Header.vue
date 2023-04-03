<template>
  <header class="fixed top-0 left-0 flex justify-between items-center w-full h-12 px-3 bg-ctp-mantle">
    <Logo></Logo>
    <Menu></Menu>
    <MobileMenuButton></MobileMenuButton>
    <MobileMenu v-show="$store.state.showMobileMenu"></MobileMenu>
  </header>
</template>

<script>
import Logo from "@/components/header/logo/Logo";
import Menu from "@/components/header/menu/Menu";
import MobileMenuButton from "@/components/mobile/MobileMenuButton";
import MobileMenu from "@/components/mobile/MobileMenu";

export default {
  name: "Header",
  components: {
    Logo,
    Menu,
    MobileMenuButton,
    MobileMenu,
  },
};
</script>
