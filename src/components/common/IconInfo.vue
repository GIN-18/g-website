<template>
  <div
    class="flex items-center"
    :class="[componentStyle]">
    <span class="mr-2">
      <slot name="icon"></slot>
    </span>
    <span :class="[fontStyle]">
      <slot name="info"></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "IconInfo",
  props: {
    // 组件容器样式
    componentStyle: String,
    // 字体样式
    fontStyle: String,
  },
};
</script>
