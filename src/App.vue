<template>
  <div class="flex flex-col justify-between h-screen text-ctp-text bg-ctp-base">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import axios from "axios";

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
  created() {
    axios
      .get("https://website.cms.gin-18.top/api/user", {
        params: {
          id: "63ad2586b9410d7b61a65764",
        },
      })
      .then((res) => {
        this.$store.state.user = res.data.data;
      });
  },
};
</script>

<style>
/* 引入tailwindcss/index.css */
@import "@/assets/style/tailwindcss/index.css";
</style>
