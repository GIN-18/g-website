<template>
  <router-link class="tag-list-item" :to="`/tags/${tag}`">
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
.tag-list-item {
  margin-bottom: 0.5rem;
  color: var(--nord-text-primary);
  font-size: 18px;
  font-weight: 600;
}
.tag-list-item:not(:first-child) {
  margin-left: 1rem;
}

.route-link-active {
  color: var(--nord-link-active);
}
</style>
