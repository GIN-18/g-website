<template>
  <div class="flex justify-between pb-5 border-b border-ctp-overlay0 border-dashed">
    <AuthorInfo></AuthorInfo>
    <Avatar width="9.5"></Avatar>
  </div>
</template>

<script>
import Avatar from "@/components/main/index/Avatar";
import AuthorInfo from "@/components/main/about/profile/AuthorInfo";

export default {
  name: "Profile",
  components: {
    Avatar,
    AuthorInfo,
  },
};
</script>
