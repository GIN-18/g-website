import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import Index from "@/pages/Index";
import Articles from "@/pages/Articles";
import Tags_Articles from "@/pages/Tags_Articles";
import Article from "@/pages/Article";
import Tags from "@/pages/Tags";
import Categories from "@/pages/Categories";
import Docs from "@/pages/Docs";
import About from "@/pages/About";

Vue.use(VueRouter);

var router = new VueRouter({
  linkExactActiveClass: "route-link-active",
  routes: [
    {
      path: "/",
      component: Index,
    },
    {
      path: "/articles",
      component: Articles,
    },
    {
      path: "/article/:id/:views",
      component: Article,
    },
    {
      path: "/tags",
      component: Tags,
      children: [
        {
          path: "/tags/:tag",
          component: Tags_Articles,
        },
      ],
    },
    {
      path: "/categories",
      component: Categories,
    },
    {
      path: "/docs",
      component: Docs,
    },
    {
      path: "/about",
      component: About,
    },
  ],
});

export default router;
