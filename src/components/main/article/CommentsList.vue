<template>
  <div class="mb-3 py-3 border-b border-dashed border-ctp-text">
    <div class="pb-3 font-semibold text-xl">{{ comments.length }} 评论</div>
    <div v-for="(comment, index) in comments" :key="index">
      <div class="flex justify-between items-center">
        <svg
          t="1683385481133"
          class="fill-current mr-2 p-2 border-2 border-ctp-text rounded-md"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2974"
          width="40"
          height="40"
        >
          <path
            d="M689.824 568.064C738.005333 521.525333 768 456.266667 768 384V256C768 114.613333 653.386667 0 512 0S256 114.613333 256 256v128c0 72.245333 29.994667 137.482667 78.144 184.032C139.061333 598.421333 0 677.205333 0 769.002667V853.333333c0 70.72 57.28 128 128 128h768c70.72 0 128-57.28 128-128v-84c0-91.786667-139.072-170.816-334.176-201.269333zM341.333333 384V256c0-94.250667 76.416-170.666667 170.666667-170.666667 94.261333 0 170.666667 76.416 170.666667 170.666667v128c0 94.250667-76.405333 170.666667-170.666667 170.666667-94.250667 0-170.666667-76.416-170.666667-170.666667z m597.333334 469.333333c0 23.530667-19.136 42.666667-42.666667 42.666667H128c-23.530667 0-42.666667-19.136-42.666667-42.666667v-84.330666c0-9.941333 24.586667-42.037333 97.621334-72.661334C268.330667 660.533333 388.266667 640 512 640c123.669333 0 243.573333 20.586667 328.981333 56.469333C914.058667 727.189333 938.666667 759.349333 938.666667 769.333333V853.333333z"
            p-id="2975"
          ></path>
        </svg>
        <div class="flex-1 flex flex-col justify-between text-sm">
          <span class="font-semibold">{{ comment.author }}</span>
          <span class="text-ctp-overlay1">{{ formatDate(comment.created) }}</span>
        </div>
        <button class="text-ctp-sky">回复</button>
      </div>
      <p class="pt-3 pb-8 pl-12">{{ comment.content }}</p>
    </div>
  </div>
</template>

<script>
import { getCommentsByArticleId } from "@/request/comment";
import { formatDate } from "@/utils/dateFormat";

export default {
  name: "CommentsList",
  props: ["article_id"],
  data() {
    return {
      comments: [],
    };
  },
  methods: {
    formatDate,
  },
  mounted() {
    getCommentsByArticleId(this.article_id).then((res) => {
      this.comments = res.data;
    });
  },
};
</script>
