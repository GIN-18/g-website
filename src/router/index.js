import Vue from "vue";
import VueRouter from "vue-router";

// 引入 store 实例
import store from "@/store/index";

// 引入组件
var Index = () => import("@/pages/Index");
var Articles = () => import("@/pages/Articles");
var TagsArticles = () => import("@/pages/TagsArticles");
var Article = () => import("@/pages/Article");
var Tags = () => import("@/pages/Tags");
var Categories = () => import("@/pages/Categories");
var Docs = () => import("@/pages/Docs");
var About = () => import("@/pages/About");

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

  store.state.showMobileMenu = false;
  store.commit("SetShowSearchArticlesList", false);

  next();
});

export default router;
