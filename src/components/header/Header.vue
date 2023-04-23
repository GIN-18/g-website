<template>
  <header
    class="z-10 fixed top-0 flex justify-between items-center w-full h-12 px-3 shadow bg-ctp-mantle sm:px-16"
  >
    <Logo></Logo>
    <Menu></Menu>
    <MobileMenuButton></MobileMenuButton>
  </header>
</template>

<script>
import Logo from "@/components/header/logo/Logo";
import MobileMenuButton from "@/components/common/MobileMenuButton";
import Menu from "@/components/header/menu/Menu";

export default {
  name: "Header",
  components: {
    Logo,
    MobileMenuButton,
    Menu,
  },
};
</script>
