<template>
  <p id="welcomes">{{ welcomes }}</p>
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

<style scoped>
#welcomes {
  margin: 28px 0 28px;
  font-size: 28px;
  font-weight: 600;
  animation: heartBeat;
  animation-duration: 2s;
}
</style>
