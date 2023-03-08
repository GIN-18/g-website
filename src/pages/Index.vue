<template>
  <div id="index">
    <Avatar width="11"></Avatar>
    <Welcomes></Welcomes>
    <Social></Social>
  </div>
</template>

<script>
import Avatar from "@/components/main/index/Avatar";
import Welcomes from "@/components/main/index/Welcomes";
import Social from "@/components/main/index/social/Social";

export default {
  name: "Index",
  components: {
    Avatar,
    Welcomes,
    Social,
  },
};
</script>

<style scoped>
#index {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
