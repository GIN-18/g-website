<template>
  <img id="avatar" :style="imageWidth" :src="avatarUrl" alt="avatar" />
</template>

<script>
export default {
  name: "Avatar",
  props: ["width"],
  computed: {
    avatarUrl() {
      return `https://website.cms.gin-18.top${this.$store.state.user.avatar}`;
    },
    imageWidth() {
      return {"width": `${this.width}rem`};
    },
  },
};
</script>

<style scoped>
#avatar {
  border: 2px solid var(--nord-text-primary);
  border-radius: 50%;
  vertical-align: middle;
}
</style>
