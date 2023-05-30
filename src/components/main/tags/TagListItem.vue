<template>
  <router-link
    class="pr-3 text-lg font-semibold link-hover"
    :to="`/tags/${tag}`"
  >
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: "TagListItem",
  props: ["tag"],
};
</script>

<style scoped>
.router-link-active {
  @apply text-ctp-green;
}
</style>
