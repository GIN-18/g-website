<template>
  <div class="self-center flex flex-col justify-center items-center sm:w-7/12">
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
