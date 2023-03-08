<template>
  <div id="menu-bar">
    <Nav></Nav>
    <span class="split-line">|</span>
    <Theme></Theme>
  </div>
</template>

<script>
import Nav from "@/components/header/menu/nav/Nav";
import Theme from "@/components/header/menu/theme/Theme";

export default {
  name: "Menu",
  components: {
    Nav,
    Theme,
  },
};
</script>

<style scoped>
#menu-bar {
  display: flex;
  justify-content: center;
  align-items: center;
}
#menu-bar .split-line {
  margin: 0 16px;
}
</style>
