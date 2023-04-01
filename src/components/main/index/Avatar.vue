<template>
  <img
    class="border-2 border-ctp-subtext0 rounded-full"
    :style="imageWidth"
    :src="avatarSrc"
    alt="avatar"
  />
</template>

<script>
export default {
  name: "Avatar",
  props: ["width"],
  computed: {
    avatarSrc() {
      return `https://website.cms.gin-18.top${this.$store.state.user.avatar}`;
    },
    imageWidth() {
      return { width: `${this.width}rem` };
    },
  },
};
</script>
