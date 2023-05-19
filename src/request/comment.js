import axios from "@/utils/request";

export function addComment(article_id, author, email, content) {
  return axios({
    method: "post",
    url: "/article/addComment",
    data: {
      article_id,
      author,
      email,
      content,
    },
  });
}

export function addCommentReply(comment_id, author, email, content) {
  return axios({
    method: "post",
    url: "article/addCommentReply",
    data: {
      comment_id,
      author,
      email,
      content,
    },
  });
}

export function getCommentsByArticleId(article_id) {
  return axios({
    url: "/article/getCommentsByArticleId",
    params: {
      article_id,
    },
  });
}
