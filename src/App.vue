<template>
  <div
    :class="`${flavour} flex flex-col justify-between h-screen text-ctp-text`"
  >
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

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
  methods: {
    ...mapActions(["requestUser"]),
  },
  mounted() {
    this.requestUser();
  },
};
</script>

<style>
/* 引入animate动画库 */
@import "animate.css";
/* 引入tailwindcss/index.css */
@import "@/assets/style/tailwindcss/index.css";
</style>
