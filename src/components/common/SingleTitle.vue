<template>
  <transition appear name="single-title">
    <h2 class="single-title">
      <slot></slot>
    </h2>
  </transition>
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
}

.single-title-enter-active {
  animation: lightSpeedInRight;
  animation-duration: 0.2s;
}
</style>
