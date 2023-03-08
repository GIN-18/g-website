<template>
  <a :href="url">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "SocialIcon",
  props: ["url"],
};
</script>

<style scoped>
a:not(:last-child) {
  margin-right: 16px;
}
a .primary-icon path {
  fill: var(--nord-text-primary);
}
</style>
