<template>
  <router-link class="w-full text-center pb-3 link-hover sm:p-3" :to="url">
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
