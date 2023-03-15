<template>
  <div id="menu-bar">
    <Nav></Nav>
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

@media (min-width: 1008px) {
  #menu-bar {
    display: flex;
  }
}
@media (max-width: 1007px) {
  #menu-bar {
    display: flex;
  }
}
@media (max-width: 640px) {
  #menu-bar {
    display: none;
  }
}
</style>
