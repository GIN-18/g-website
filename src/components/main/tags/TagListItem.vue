<template>
  <router-link class="tag-list-item" :to="`/tags/${tag}`">
    <h3>
      <slot></slot>
    </h3>
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
}
.tag-list-item:not(:first-child) {
  margin-left: 1rem;
}

.route-link-active {
  color: var(--nord-link-active);
}
</style>
