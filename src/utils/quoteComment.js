// 引用评论
export function quoteComment(content) {
  var contentArray = content.split("\n");
  var updateContentArray = contentArray.map((item) => {
    return `> ${item}`;
  });
  return {
    commentContent: `${updateContentArray.join("\n")}\n\n`,
  };
}
