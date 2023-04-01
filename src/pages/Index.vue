<template>
  <div
    class="self-center flex flex-col justify-center items-center"
    v-if="showIndex"
  >
    <Avatar width="11"></Avatar>
    <Welcomes></Welcomes>
    <Social></Social>
  </div>
  <Loading v-else></Loading>
</template>

<script>
import {showPage} from "@/utils/showPage";

import Loading from "@/components/common/Loading";
import Avatar from "@/components/main/index/Avatar";
import Welcomes from "@/components/main/index/Welcomes";
import Social from "@/components/main/index/social/Social";

export default {
  name: "Index",
  components: {
    Loading,
    Avatar,
    Welcomes,
    Social,
  },
  computed: {
    showIndex() {
      return showPage(this.$store.state.user)
    },
  },
};
</script>
