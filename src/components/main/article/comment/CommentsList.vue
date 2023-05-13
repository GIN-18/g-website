<template>
  <div>
    <div class="flex items-center -mb-8 pb-3 font-semibold text-xl">
      <svg
        t="1683892538702"
        class="fill-current mr-2"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="12490"
        width="20"
        height="20"
      >
        <path
          d="M853.216678 0H170.683332C76.39254 0 0 75.592618 0 168.783517v463.554731c0 92.790938 76.792501 168.783517 170.683332 168.783517h101.790059c22.197832 0 42.59584 12.098818 52.994825 31.596915l65.193633 159.684406c10.898936 20.398008 31.796895 31.596914 53.094815 31.596914 12.398789 0 24.897569-3.799629 35.696514-11.698858l286.672005-199.480519c10.298994-7.599258 22.797774-11.698858 35.696514-11.698858h51.494971c93.890831 0 170.683332-75.992579 170.683332-168.783517V168.783517C1023.90001 75.892589 947.107509 0 853.216678 0z m85.391661 632.238258c0 45.995508-38.29626 83.391856-85.291671 83.391856h-51.494971c-30.796992 0-60.194122 9.499072-85.09169 27.397325l-261.374475 181.982228-50.89503-124.687823c-1.099893-2.699736-2.399766-5.399473-3.699639-7.999219-25.29753-47.295381-74.392735-76.69251-128.187481-76.692511H170.683332c-47.095401 0-85.291671-37.396348-85.291671-83.391856V168.783517c0-45.995508 38.29626-83.391856 85.291671-83.391856h682.633336c47.095401 0 85.291671 37.396348 85.291671 83.391856v463.454741z"
          p-id="12491"
        ></path>
        <path
          d="M732.228493 255.675032H291.671516c-23.597696 0-42.69583 19.098135-42.69583 42.69583s19.098135 42.69583 42.69583 42.695831h440.656968c23.597696 0 42.69583-19.098135 42.69583-42.695831-0.09999-23.597696-19.198125-42.69583-42.795821-42.69583zM585.442828 467.25437H291.671516c-23.597696 0-42.69583 19.098135-42.69583 42.69583s19.098135 42.69583 42.69583 42.695831h293.771312c23.597696 0 42.69583-19.098135 42.69583-42.695831-0.09999-23.597696-19.198125-42.69583-42.69583-42.69583z"
          p-id="12492"
        ></path>
      </svg>
      {{ sumOfComments }} 条评论
    </div>
    <CommentReplyItem
      v-for="(comment, index) in comments"
      :key="index"
      :comment="comment"
    ></CommentReplyItem>
  </div>
</template>

<script>
import CommentReplyItem from "@/components/main/article/comment/CommentReplyItem";

export default {
  name: "CommentsList",
  components: {
    CommentReplyItem,
  },
  props: {
    article_id: {
      type: String,
      required: true,
    },
  },
  computed: {
    comments() {
      return this.$store.state.comments;
    },
    sumOfComments() {
      return this.comments.length + this.flattenObject(this.comments).length;
    },
  },
  methods: {
    flattenObject(obj) {
      return obj.flatMap((item) => {
        return item.replies;
      });
    },
  },
  mounted() {
    this.$store.dispatch("requestCommentsByArticleId", this.article_id);
  },
};
</script>
