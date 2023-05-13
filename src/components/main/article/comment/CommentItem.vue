<template>
  <Transition appear name="comment">
    <div>
      <div
        class="flex justify-between items-center p-3 border border-b-0 border-ctp-overlay0 rounded rounded-b-none"
      >
        <svg
          t="1683890989291"
          class="fill-current mr-2 p-1 border-2 border-ctp-text rounded-md"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4529"
          width="36"
          height="36"
        >
          <path
            d="M780.1 256l32.2-55.7c10.9-18.8 4.4-42.9-14.4-53.8-18.9-10.9-42.9-4.4-53.8 14.4l-39.4 68.2c-4.3 7.5-5.2 15.7-4.4 23.7H323.7c0.8-8 0-16.2-4.4-23.7L280 160.8c-10.9-18.8-35-25.3-53.8-14.4-18.8 10.9-25.3 35-14.4 53.8l32.2 55.7c-71.8 14.7-125.7 78.2-125.7 154.3v315.1c0 87 70.5 157.5 157.5 157.5h472.6c87 0 157.5-70.5 157.5-157.5v-315c-0.1-76.1-54-139.6-125.8-154.3z m47 469.3c0 43.4-35.3 78.8-78.8 78.8H275.7c-43.4 0-78.8-35.3-78.8-78.8v-315c0-43.4 35.3-78.8 78.8-78.8h472.6c43.4 0 78.8 35.3 78.8 78.8v315zM39.4 449.6C17.6 449.6 0 467.3 0 489v157.5c0 21.8 17.6 39.4 39.4 39.4s39.4-17.6 39.4-39.4V489c0-21.7-17.7-39.4-39.4-39.4zM984.6 449.6c-21.8 0-39.4 17.6-39.4 39.4v157.5c0 21.8 17.6 39.4 39.4 39.4s39.4-17.6 39.4-39.4V489c0-21.7-17.6-39.4-39.4-39.4z"
            p-id="4530"
          ></path>
          <path
            d="M382.4 552.4m-59.1 0a59.1 59.1 0 1 0 118.2 0 59.1 59.1 0 1 0-118.2 0Z"
            p-id="4531"
          ></path>
          <path
            d="M641.6 555.9m-59.1 0a59.1 59.1 0 1 0 118.2 0 59.1 59.1 0 1 0-118.2 0Z"
            p-id="4532"
          ></path>
        </svg>
        <div class="flex-1 flex flex-col justify-between text-sm">
          <span class="font-semibold">{{ author }}</span>
          <span class="text-ctp-overlay1">{{ formatDate(createdAt) }}</span>
        </div>
        <button class="text-ctp-sky">回复</button>
      </div>
      <p class="p-3 border border-ctp-overlay0 rounded rounded-t-none">
        {{ content }}
      </p>
    </div>
  </Transition>
</template>

<script>
import { formatDate } from "@/utils/dateFormat"

export default {
  name: "CommentItem",
  props: {
    author: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Number,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  methods: {
    formatDate,
  },
};
</script>

<style scoped>
.comment-enter-active {
  animation: fadeInLeft;
  animation-duration: 0.5s;
}
</style>
