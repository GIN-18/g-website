<template>
  <div class="meta-line">
    <slot></slot>
  </div>
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
</style>
