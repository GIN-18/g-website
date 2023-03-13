<template>
  <nav id="nav-bar">
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

<style scoped>
@media (min-width: 1008px) {
  #nav-bar {
    display: block;
  }
}
@media (max-width: 1007px) {
  #nav-bar {
    display: block;
  }
}
@media (max-width: 640px) {
  #nav-bar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
