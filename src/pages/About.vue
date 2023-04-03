<template>
  <div class="w-full px-3">
    <SingleTitle>关于作者</SingleTitle>
    <div id="about-author">
      <div class="author-info">
        <Profile></Profile>
      </div>
      <div class="open-source">
        <OpenSource></OpenSource>
      </div>
    </div>
  </div>
</template>

<script>
import SingleTitle from "@/components/common/SingleTitle";
import Profile from "@/components/main/about/profile/Profile";
import OpenSource from "@/components/main/about/open_source/OpenSource";

export default {
  name: "About",
  components: {
    SingleTitle,
    Profile,
    OpenSource,
  },
};
</script>
