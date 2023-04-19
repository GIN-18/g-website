import axios from "@/utils/request"

export function getAllArticles() {
  return axios({
    url: "/article/getAllArticles"
  })
}

export function getArticlesByKeyword(keyword) {
  return axios({
    url: "/article/getArticlesByKeyword",
    params: {
      keyword
    }
  })
}
