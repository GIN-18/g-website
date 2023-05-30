<template>
  <div class="self-center flex flex-col justify-center items-center sm:w-7/12">
      <div class="flex flex-col justify-center items-center" v-if="showIndex">
        <Avatar width="11"></Avatar>
        <Welcomes></Welcomes>
        <Social></Social>
      </div>
    <Loading v-else></Loading>
  </div>
</template>

<script>
import Avatar from "@/components/main/index/Avatar";
import Welcomes from "@/components/main/index/Welcomes";
import Social from "@/components/main/index/social/Social";
import Loading from "@/components/common/Loading";

export default {
  name: "Index",
  components: {
    Avatar,
    Welcomes,
    Social,
    Loading,
  },
  computed: {
    showIndex() {
      return Object.keys(this.$store.state.user).length;
    },
  },
};
</script>
