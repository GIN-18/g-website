<template>
  <router-link id="nav-item" :to="url">
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
#nav-item:not(:last-child) {
  margin-right: 16px;
}
#nav-item:hover {
  color: var(--nord-hover-primary);
}

.route-link-active {
  font-weight: 600;
}
</style>
