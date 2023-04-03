<template>
  <div class="fixed top-12 left-0 flex flex-col justify-center items-center w-full py-2 bg-ctp-mantle">
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
