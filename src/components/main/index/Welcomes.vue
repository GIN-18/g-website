<template>
  <p class="my-6 text-ctp-text text-3xl font-semibold">{{ welcomes }}</p>
</template>

<script>
export default {
  name: "Welcomes",
  computed: {
    welcomes() {
      return `Welcome to ${this.$store.state.user.username}'s Blog`;
    },
  },
};
</script>
