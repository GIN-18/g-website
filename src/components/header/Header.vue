<template>
  <header
    class="z-10 fixed top-0 left-0 flex justify-between items-center w-full h-12 px-3 shadow bg-ctp-mantle sm:px-16"
  >
    <Logo></Logo>
    <Menu></Menu>
    <MobileMenuButton></MobileMenuButton>
    <MobileMenu></MobileMenu>
    <SearchArticlesList></SearchArticlesList>
  </header>
</template>

<script>
import Logo from "@/components/header/logo/Logo";
import Menu from "@/components/header/menu/Menu";
import MobileMenuButton from "@/components/mobile/MobileMenuButton";
import MobileMenu from "@/components/mobile/MobileMenu";
import SearchArticlesList from "@/components/main/articles/SearchArticlesList";

export default {
  name: "Header",
  components: {
    Logo,
    Menu,
    MobileMenuButton,
    MobileMenu,
    SearchArticlesList,
  },
};
</script>
