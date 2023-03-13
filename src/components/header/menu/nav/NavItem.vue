<template>
  <router-link class="nav-item" :to="url">
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
.nav-item {
  margin-right: 16px;
}

.route-link-active {
  font-weight: 600;
}

@media (min-width: 1008px) {
  .nav-item:not(:last-child) {
    margin-right: 16px;
  }
}
@media (max-width: 1007px) {
  .nav-item:not(:last-child) {
    margin-right: 16px;
  }
}
@media (max-width: 640px) {
  .nav-item:not(:last-child) {
    margin: 8px 0;
  }
}
</style>
