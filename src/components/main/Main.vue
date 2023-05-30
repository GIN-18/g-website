<template>
  <main class="flex flex-grow justify-center items-start mt-12 bg-ctp-base">
    <Transition appear name="page" mode="out-in">
      <router-view></router-view>
    </Transition>
  </main>
</template>

<script>
export default {
  name: "Main",
};
</script>

<style scoped>
.page-enter-active {
  animation: zoomIn;
  animation-duration: 0.5s;
}
.page-leave-active {
  animation: zoomOut;
  animation-duration: 0.5s;
}
</style>
