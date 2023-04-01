<template>
  <div class="flex justify-between">
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
