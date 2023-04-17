<template>
  <router-link to="/">
    <img class="h-7" :src="src" alt="logo" />
  </router-link>
</template>

<script>
export default {
  name: "Logo",
  computed: {
    src() {
      if (!this.$store.state.flavour) {
        return require("@/assets/images/logo/logo_light.webp");
      } else {
        return require("@/assets/images/logo/logo_dark.webp");
      }
    },
  },
};
</script>
