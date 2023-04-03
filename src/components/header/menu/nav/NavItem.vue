<template>
  <router-link class="p-2 link-hover" :to="url">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: "NavItem",
  props: ["url"],
};
</script>

<style scoped>
.router-link-active {
  @apply font-semibold;
}
</style>
