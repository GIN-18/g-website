<template>
  <nav class="flex flex-col justify-center items-center sm:block">
    <NavbarItem url="/articles">所有文章</NavbarItem>
    <NavbarItem url="/tags">标签</NavbarItem>
    <NavbarItem url="/categories">分类</NavbarItem>
    <NavbarItem url="/docs">归档</NavbarItem>
    <NavbarItem url="/about">关于</NavbarItem>
  </nav>
</template>

<script>
import NavbarItem from "./NavbarItem";

export default {
  name: "Nav",
  components: {
    NavbarItem,
  },
};
</script>
