import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import Index from "@/pages/Index";
import Articles from "@/pages/Articles";
import TagsArticles from "@/pages/TagsArticles";
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
      meta: {
        title: "首页",
      },
    },
    {
      path: "/articles",
      component: Articles,
      meta: {
        title: "所有文章",
      },
    },
    {
      path: "/article/:id",
      component: Article,
      meta: {
        title: "文章",
      },
    },
    {
      path: "/tags",
      component: Tags,
      meta: {
        title: "所有标签",
      },
      children: [
        {
          path: "/tags/:tag",
          component: TagsArticles,
        },
      ],
    },
    {
      path: "/categories",
      component: Categories,
      meta: {
        title: "所有分类",
      },
    },
    {
      path: "/docs",
      component: Docs,
      meta: {
        title: "文章归档",
      },
    },
    {
      path: "/about",
      component: About,
      meta: {
        title: "关于作者",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  var pageTitle = to.meta.title;
  if (pageTitle) {
    document.title = to.meta.title;
  }

  window.scrollTo(0, 0);

  next();
});

export default router;
