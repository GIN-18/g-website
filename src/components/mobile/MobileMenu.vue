<template>
  <div id="mobile-menu">
    <Nav></Nav>
    <Theme></Theme>
  </div>
</template>

<script>
import Nav from "@/components/header/menu/nav/Nav";
import Theme from "@/components/header/menu/theme/Theme";

export default {
  name: "MobileMenu",
  components: {
    Nav,
    Theme,
  },
};
</script>

<style scoped>
#mobile-menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50px;
  left: 0;
  width: 100%;
  background-color: var(--nord-bg-secondary);
}
</style>
