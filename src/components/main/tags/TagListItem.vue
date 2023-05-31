<template>
  <Transition appear name="tag-list-item">
  <router-link
    class="pr-3 text-lg font-semibold link-hover"
    :to="`/tags/${tag}`"
  >
    <slot></slot>
  </router-link>
  </Transition>
</template>

<script>
export default {
  name: "TagListItem",
  props: ["tag"],
};
</script>

<style scoped>
.router-link-active {
  @apply text-ctp-green;
}
.tag-list-item-enter-active {
  animation: fadeIn;
  animation-duration: 0.5s;
}
.tag-list-item-leave-active {
  animation: fadeOut;
  animation-duration: 0.5s;
}
</style>
