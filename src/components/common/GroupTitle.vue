<template>
  <h3
    class="flex justify-start items-center mt-6 mb-3"
  >
    <span class="mr-2">
      <slot name="icon"></slot>
    </span>
    <span class="text-xl font-semibold">
      <slot name="info"></slot>
    </span>
  </h3>
</template>

<script>
export default {
  name: "GroupTitle",
};
</script>
