import axios from "@/utils/request";

export function getAllTags() {
  return axios({
    url: "/article/getAllTags",
  });
}

export function getArticlesByTag(params) {
  return axios({
    url: "/article/getArticlesByTag",
    params,
  });
}
