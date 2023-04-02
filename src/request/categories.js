import axios from "@/utils/request";

export function getAllCategories() {
  return axios({
    url: "/article/getAllCategories",
  });
}

export function getArticlesByCategory(params) {
  return axios({
    url: "/article/getArticlesByCategory",
    params,
  });
}
