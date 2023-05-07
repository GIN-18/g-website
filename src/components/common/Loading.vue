<template>
  <!-- loading -->
  <div class="loading">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: "Loading",
};
</script>

<style scoped>
.loading {
  display: inline-block;
  font-size: 0px;
  padding: 0px;
}

.loading span {
  vertical-align: middle;
  border-radius: 100%;

  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 3px 2px;
  animation: loading-animation 0.8s linear infinite alternate;
}

.loading span:nth-child(1) {
  animation-delay: -1s;
  @apply bg-ctp-overlay1;
}

.loading span:nth-child(2) {
  animation-delay: -0.8s;
  @apply bg-ctp-overlay2;
}

.loading span:nth-child(3) {
  animation-delay: -0.26666s;
  @apply bg-ctp-subtext0;
}

.loading span:nth-child(4) {
  animation-delay: -0.8s;
  @apply bg-ctp-overlay2;
}

.loading span:nth-child(5) {
  animation-delay: -1s;
  @apply bg-ctp-overlay0;
}

@keyframes loading-animation {
  from {
    transform: scale(0, 0);
  }

  to {
    transform: scale(1, 1);
  }
}
</style>
