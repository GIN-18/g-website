<template>
  <transition appear name="meta-line">
    <div class="meta-line">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: "MetaLine",
};
</script>

<style scoped>
.meta-line {
  display: flex;
  align-items: center;
  margin: 0 0 6px;
}

/* 信息栏动画 */
.meta-line-enter-active {
  animation-name: lightSpeedInLeft;
  animation-duration: 0.2s;
}
</style>
