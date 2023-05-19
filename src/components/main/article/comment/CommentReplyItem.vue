<template>
  <div class="py-8 border-b border-ctp-overlay0 border-dashed">
    <CommentItem
      :commentId="comment._id"
      :author="comment.author"
      :createdAt="comment.createdAt"
      :content="comment.content"
    ></CommentItem>
    <div v-for="(reply, index) in comment.replies" :key="index" :id="reply._id">
      <span class="ml-6 border-l border-ctp-overlay0 border-dashed"></span>
      <CommentItem
        :replyId="reply._id"
        :commentId="comment._id"
        :author="reply.author"
        :createdAt="reply.createdAt"
        :content="reply.content"
      ></CommentItem>
    </div>
  </div>
</template>

<script>
import CommentItem from "@/components/main/article/comment/CommentItem";

export default {
  name: "CommentReplyItem",
  components: {
    CommentItem,
  },
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
};
</script>
