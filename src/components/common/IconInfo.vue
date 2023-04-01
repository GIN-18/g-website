<template>
  <div class="flex items-center">
    <span class="mr-2">
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
