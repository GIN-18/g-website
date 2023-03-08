<template>
  <div class="icon-info">
    <span>
      <slot name="icon"></slot>
    </span>
    <span>
      <slot name="info"></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "IconInfo",
};
</script>

<style scoped>
.icon-info {
  display: flex;
  align-items: center;
}
.icon-info span {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
