<template>
  <footer>
    <Copyright></Copyright>
  </footer>
</template>

<script>
import Copyright from "@/components/common/Copyright";

export default {
  name: "Footer",
  components: {
    Copyright,
  },
};
</script>

<style scoped>
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 0;
}
</style>
