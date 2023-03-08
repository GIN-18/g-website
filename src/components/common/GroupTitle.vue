<template>
  <h3 class="group-title">
    <slot></slot>
  </h3>
</template>

<script>
export default {
  name: "GroupTitle",
};
</script>

<style scoped>
.group-title {
  display: flex;
  align-items: center;
  margin: 1rem 0 calc(0.5rem - 2px);
}
</style>
