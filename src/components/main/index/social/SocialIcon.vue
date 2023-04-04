<template>
  <a class="mr-6 link-hover" :href="url">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "SocialIcon",
  props: ["url"],
};
</script>
