<template>
  <div :class="`${flavour} flex flex-col justify-between h-screen text-ctp-text`">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import { mapState } from "vuex";

import { getUser } from "@/request/home";

// 引入组件
import Header from "@/components/header/Header";
import Main from "@/components/main/Main";
import Footer from "@/components/footer/Footer";

export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,
  },
  computed: {
    ...mapState(["flavour"]),
  },
  created() {
    getUser().then((res) => {
      this.$store.state.user = res.data;
    });
  },
};
</script>

<style>
/* 引入tailwindcss/index.css */
@import "@/assets/style/tailwindcss/index.css";
</style>
