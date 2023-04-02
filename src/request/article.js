import axios from "@/utils/request";

export function getArticleById(params) {
  return axios({
    url: "/article/getArticleById",
    params,
  });
}
