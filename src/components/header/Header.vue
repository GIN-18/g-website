<template>
  <header id="header">
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

<style scoped>
#header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 60px;
  background-color: var(--nord-bg-secondary);
}

@media (min-width: 1008px) {
  #header {
    padding: 8px 60px;
  }
}
@media (max-width: 1007px) {
  #header {
    padding: 8px 60px;
  }
}
@media (max-width: 640px) {
  #header {
    padding: 8px;
  }
}
</style>
