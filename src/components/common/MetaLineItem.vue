<template>
  <span class="metaline-item flex items-center text-ctp-overlay1">
    <span class="mr-1">
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
.metaline-item:not(:last-child) {
  @apply mr-5;
}
</style>
