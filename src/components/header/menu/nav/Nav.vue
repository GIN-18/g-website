<template>
  <nav class="flex flex-col justify-center items-center sm:block">
    <NavItem url="/articles">所有文章</NavItem>
    <NavItem url="/tags">标签</NavItem>
    <NavItem url="/categories">分类</NavItem>
    <NavItem url="/docs">归档</NavItem>
    <NavItem url="/about">关于</NavItem>
  </nav>
</template>

<script>
import NavItem from "@/components/header/menu/nav/NavItem";

export default {
  name: "Nav",
  components: {
    NavItem,
  },
};
</script>
