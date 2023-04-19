<template>
  <router-link class="pb-3 link-hover sm:p-5" :to="url">
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
