<template>
  <transition appear name="profile">
    <div id="author-profile">
      <AuthorInfo></AuthorInfo>
      <Avatar width="9.5"></Avatar>
    </div>
  </transition>
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

<style scoped>
#author-profile {
  display: flex;
  justify-content: space-between;
}

/* 作者信息动画 */
.profile-enter-active {
  animation-name: zoomIn;
  animation-duration: 0.2s;
}

@media (min-width: 1008px) {
  #author-profile {
    flex-direction: row;
  }
}
@media (max-width: 1007px) {
  #author-profile {
    flex-direction: row;
  }
}
@media (max-width: 640px) {
  #author-profile {
    flex-direction: row;
  }
}
</style>
