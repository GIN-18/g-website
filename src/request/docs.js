import axios from "@/utils/request";

export function getAllYears() {
  return axios({
    url: "/article/getAllYears",
  });
}

export function getArticlesByYear(params) {
  return axios({
    url: "/article/getArticlesByYear",
    params,
  });
}
