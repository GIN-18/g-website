<template>
  <div class="opensource-item break-inside-avoid">
    <img class="rounded-t-md" :src="imageUrl" />
    <div class="p-3 rounded-b-md bg-ctp-crust">
      <a class="link-hover" :href="projectUrl">
        <h4 class="text-lg font-semibold">
          <slot name="project-name"></slot>
        </h4>
      </a>
      <p class="text-ctp-subtext0">
        <slot name="project-description"></slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "OpenSourceItem",
  props: ["imageUrl", "projectUrl"],
};
</script>

<style scoped>
.opensource-item:not(:last-child) {
  @apply mb-3;
}
</style>
