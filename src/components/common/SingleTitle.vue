<template>
  <h2 class="single-title">
    <slot></slot>
  </h2>
</template>

<script>
export default {
  name: "SingleTitle",
};
</script>

<style scoped>
.single-title {
  display: flex;
  justify-content: flex-end;
  margin: 1rem 0;
  animation: bounceIn;
  animation-duration: 1s;
}
</style>
