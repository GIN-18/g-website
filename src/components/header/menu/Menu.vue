<template>
  <div class="hidden sm:flex items-center">
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
