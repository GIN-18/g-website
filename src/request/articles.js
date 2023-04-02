import axios from "@/utils/request"

export function getAllArticles() {
  return axios({
    url: "/article/getAllArticles"
  })
}
