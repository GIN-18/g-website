<template>
  <!-- 移动端评论框 -->
  <div>
    <GroupTitle>
      <template v-slot:icon>
        <svg
          t="1683345955737"
          class="fill-current"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2611"
          width="22"
          height="22"
        >
          <path
            d="M853.333333 128c23.530667 0 42.666667 19.136 42.666667 42.666667v469.333333a42.709333 42.709333 0 0 1-42.666667 42.656H484.661333L298.666667 815.509333V682.656H170.666667c-23.541333 0-42.666667-19.136-42.666667-42.656V170.666667c0-23.541333 19.136-42.666667 42.666667-42.666667h682.666666m0-85.333333H170.666667C99.978667 42.666667 42.666667 99.978667 42.666667 170.666667v469.333333c0 70.688 57.312 128 128 128h42.666666v213.333333l298.666667-213.333333h341.333333c70.688 0 128-57.312 128-128V170.666667c0-70.688-57.312-128-128-128z"
            p-id="2612"
          ></path>
        </svg>
      </template>
      <template v-slot:info>评论</template>
    </GroupTitle>
    <!-- 写评论 -->
    <div class="pb-3 border-b border-dashed border-ctp-overlay0">
      <input
        class="w-full p-3 border border-b-0 border-ctp-overlay0 rounded-md rounded-b-none outline-none bg-ctp-base"
        type="text"
        placeholder="昵称"
        v-model="author"
      />
      <input
        class="w-full p-3 border border-b-0 border-ctp-overlay0 rounded-none outline-none bg-ctp-base"
        type="text"
        placeholder="邮箱"
        v-model="email"
      />
      <textarea
        class="w-full h-56 p-3 border border-ctp-overlay0 rounded-md rounded-t-none outline-none resize-none bg-ctp-base"
        placeholder="请多多指教~"
        v-model="content"
      >
      </textarea>
      <!-- 提交评论 -->
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <Loading v-show="showLoading"></Loading>
          <TransitionGroup appear name=" message">
            <!-- 错误信息 -->
            <span
              class="flex items-center text-sm text-ctp-red"
              key="1"
              v-show="showMessage.error"
            >
              <svg
                t="1683631534731"
                class="fill-ctp-red mr-2"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="6007"
                width="18"
                height="18"
              >
                <path
                  d="M780.1 256l32.2-55.7c10.9-18.8 4.4-42.9-14.4-53.8-18.9-10.9-42.9-4.4-53.8 14.4l-39.4 68.2c-4.3 7.5-5.2 15.7-4.4 23.7H323.7c0.8-8 0-16.2-4.4-23.7L280 160.8c-10.9-18.8-35-25.3-53.8-14.4-18.8 10.9-25.3 35-14.4 53.8l32.2 55.7c-71.8 14.7-125.7 78.2-125.7 154.3v315.1c0 87 70.5 157.5 157.5 157.5h472.6c87 0 157.5-70.5 157.5-157.5v-315c-0.1-76.1-54-139.6-125.8-154.3z m47 469.3c0 43.4-35.3 78.8-78.8 78.8H275.7c-43.4 0-78.8-35.3-78.8-78.8v-315c0-43.4 35.3-78.8 78.8-78.8h472.6c43.4 0 78.8 35.3 78.8 78.8v315zM39.4 449.6C17.6 449.6 0 467.3 0 489v157.5c0 21.8 17.6 39.4 39.4 39.4s39.4-17.6 39.4-39.4V489c0-21.7-17.7-39.4-39.4-39.4zM984.6 449.6c-21.8 0-39.4 17.6-39.4 39.4v157.5c0 21.8 17.6 39.4 39.4 39.4s39.4-17.6 39.4-39.4V489c0-21.7-17.6-39.4-39.4-39.4z"
                  p-id="6008"
                ></path>
                <path
                  d="M382.4 552.4m-59.1 0a59.1 59.1 0 1 0 118.2 0 59.1 59.1 0 1 0-118.2 0Z"
                  p-id="6009"
                ></path>
                <path
                  d="M641.6 555.9m-59.1 0a59.1 59.1 0 1 0 118.2 0 59.1 59.1 0 1 0-118.2 0Z"
                  p-id="6010"
                ></path>
              </svg>
              {{ message }}</span
            >
            <!-- 成功信息 -->
            <span
              class="flex items-center text-sm text-ctp-green"
              key="2"
              v-show="showMessage.succeed"
            >
              <svg
                t="1683631534731"
                class="fill-ctp-green mr-2"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="6007"
                width="18"
                height="18"
              >
                <path
                  d="M780.1 256l32.2-55.7c10.9-18.8 4.4-42.9-14.4-53.8-18.9-10.9-42.9-4.4-53.8 14.4l-39.4 68.2c-4.3 7.5-5.2 15.7-4.4 23.7H323.7c0.8-8 0-16.2-4.4-23.7L280 160.8c-10.9-18.8-35-25.3-53.8-14.4-18.8 10.9-25.3 35-14.4 53.8l32.2 55.7c-71.8 14.7-125.7 78.2-125.7 154.3v315.1c0 87 70.5 157.5 157.5 157.5h472.6c87 0 157.5-70.5 157.5-157.5v-315c-0.1-76.1-54-139.6-125.8-154.3z m47 469.3c0 43.4-35.3 78.8-78.8 78.8H275.7c-43.4 0-78.8-35.3-78.8-78.8v-315c0-43.4 35.3-78.8 78.8-78.8h472.6c43.4 0 78.8 35.3 78.8 78.8v315zM39.4 449.6C17.6 449.6 0 467.3 0 489v157.5c0 21.8 17.6 39.4 39.4 39.4s39.4-17.6 39.4-39.4V489c0-21.7-17.7-39.4-39.4-39.4zM984.6 449.6c-21.8 0-39.4 17.6-39.4 39.4v157.5c0 21.8 17.6 39.4 39.4 39.4s39.4-17.6 39.4-39.4V489c0-21.7-17.6-39.4-39.4-39.4z"
                  p-id="6008"
                ></path>
                <path
                  d="M382.4 552.4m-59.1 0a59.1 59.1 0 1 0 118.2 0 59.1 59.1 0 1 0-118.2 0Z"
                  p-id="6009"
                ></path>
                <path
                  d="M641.6 555.9m-59.1 0a59.1 59.1 0 1 0 118.2 0 59.1 59.1 0 1 0-118.2 0Z"
                  p-id="6010"
                ></path>
              </svg>
              {{ message }}</span
            >
          </TransitionGroup>
        </div>
        <button
          class="px-3 py-2 rounded-md bg-ctp-teal text-ctp-base font-semibold"
          @click="submitComment"
        >
          提交
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { addComment } from "@/request/comment";

import GroupTitle from "@/components/common/GroupTitle";
import Loading from "@/components/common/Loading";

// 防抖函数
function debounce(fn, delay) {
  var timerId = null;
  return function () {
    clearTimeout(timerId);
    if (!timerId) fn.apply(this, arguments);
    timerId = setTimeout(() => (timerId = null), delay);
  };
}

export default {
  name: "WriteComment",
  props: ["article_id"],
  components: {
    GroupTitle,
    Loading,
  },
  data() {
    return {
      author: "",
      email: "",
      content: "",
      message: "",
      showMessage: {
        error: false,
        succeed: false,
      },
      showLoading: false,
    };
  },
  methods: {
    // 验证邮箱格式
    validateEmail(email) {
      const emailRegex = /\S+@\S+\.\S+/;
      return emailRegex.test(email);
    },
    // 显示提示信息
    displayMessage(value) {
      if (value === "error") {
        this.showMessage.error = true;
      } else {
        this.showMessage.succeed = true;
      }
      setTimeout(() => {
        this.showMessage.error = false;
        this.showMessage.succeed = false;
      }, 2000);
    },
    // 验证评论信息并提交
    validateCommentInfo() {
      var a = this.author;
      var e = this.email;
      var c = this.content;
      var isValid = true;
      // 验证昵称
      if (!a) {
        this.message = "请输入昵称~";
        this.displayMessage("error");
        return (isValid = false);
      } else if (a && a.length < 4) {
        this.message = "昵称不能少于4个字符~";
        this.displayMessage("error");
        return (isValid = false);
      }
      // 验证邮箱
      if (!e) {
        this.message = "请输入邮箱~";
        this.displayMessage("error");
        return (isValid = false);
      } else if (e && !this.validateEmail(e)) {
        this.message = "邮箱格式不正确~";
        this.displayMessage("error");
        return (isValid = false);
      }
      // 验证评论内容
      if (!c) {
        this.message = "请输入评论内容~";
        this.displayMessage("error");
        return (isValid = false);
      }
      return isValid;
    },
    // 提交评论
    submitComment: debounce(async function () {
      if (!this.validateCommentInfo()) {
        return;
      }
      this.showLoading = true;
      try {
        const res = await addComment(
          this.article_id,
          this.author,
          this.email,
          this.content
        );
        if (res.added === "ok") {
          this.showLoading = false;
          this.message = "评论发布成功~";
          this.displayMessage();
        }
      } catch (error) {
        console.error(error);
      }
    }, 500),
  },
};
</script>

<style scoped>
.message-enter-active {
  animation: zoomIn;
  animation-duration: 0.5s;
}
.message-leave-active {
  animation: zoomOut;
  animation-duration: 0.5s;
}
</style>
