<template>
  <span class="meta-line-item">
    <span>
      <slot name="icon"></slot>
    </span>
    <span>
      <slot name="info"></slot>
    </span>
  </span>
</template>

<script>
export default {
  name: "MetaLineItem",
};
</script>

<style scoped>
.meta-line-item {
  display: flex;
  align-items: center;
  color: var(--nord-text-meta);
  font-size: 14px;
}
.meta-line-item  span {
  display: flex;
  justify-content: center;
  align-items: center;
}
.meta-line-item:not(:first-child) {
  margin-left: 12px;
}
</style>
