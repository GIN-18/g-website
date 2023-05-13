<template>
  <!-- 移动端评论框 -->
  <div class="pt-8">
    <div class="flex items-center pb-3 font-semibold text-xl">
      <svg
        t="1683892338497"
        class="fill-current mr-2"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="12269"
        width="20"
        height="20"
      >
        <path
          d="M978.7 467.6c-26.3-23.7-60.7-36.8-96.7-36.8s-70.3 13.1-96.7 36.8L668.1 573.3c-28.5-25.3-60.3-45.2-95.5-59.8 67-48 110.4-123.4 110.4-208.3 0-144.7-125.8-262.5-280.4-262.5S122.2 160.5 122.2 305.2c0 86.5 45.1 163.2 114.3 211C97.3 575.4 0 706.1 0 857.9c0 23.6 19.1 42.7 42.7 42.7s42.7-19.1 42.7-42.7c0-160 142.4-290.2 317.3-290.2 84.5 0 149.4 20.5 201.4 63.3L488.6 735.2c-12.1 10.9-20.8 25-25.1 40.6l-27 97.5c-8 28.9-0.2 59.9 20.4 81.6 16.3 17.1 38.7 26.5 61.8 26.5 6.2 0 12.5-0.7 18.7-2.1L645.5 955c14.3-3.2 27.5-10.1 38.4-19.9l294.7-265.6c28.8-26 45.3-62.7 45.3-100.9 0.1-38.2-16.4-75-45.2-101zM207.6 305.2c0-97.7 87.5-177.2 195.1-177.2s195.1 79.5 195.1 177.2-87.5 177.2-195.1 177.2-195.1-79.5-195.1-177.2z m714 300.8L626.9 871.7 518.7 896l27-97.5L842.5 531c11-9.9 25.3-14.9 39.5-14.9 14.3 0 28.5 5 39.5 14.9 22.9 20.6 22.9 54.5 0.1 75z"
          p-id="12270"
        ></path>
      </svg>
      写评论
    </div>
    <!-- 写评论 -->
    <div class="pb-3">
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
              class="flex items-center text-ctp-red"
              key="1"
              v-show="message.error"
            >
              <svg
                t="1683875941374"
                class="fill-ctp-red mr-2"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4504"
                width="16"
                height="16"
              >
                <path
                  d="M512 0C229.2 0 0 229.3 0 512v288.4c0 119 95.7 223.6 213.8 223.6 2.2 0 4.3 0 6.5-0.1 55.4-1.8 105.4-24.8 142.4-61.1 38.5 37.8 91.1 61.2 149.3 61.2s110.8-23.4 149.3-61.2c36.9 36.3 86.9 59.3 142.4 61.1 2.2 0.1 4.3 0.1 6.5 0.1 118.1 0 213.8-104.6 213.8-223.6V512C1024 229.3 794.8 0 512 0z m426.7 597.3V800.4c0 73.6-60 138.3-128.5 138.3l-3.7-0.1c-32-1-62.3-14.1-85.3-36.7l-59.8-58.7-59.8 58.7c-24.2 23.7-56 36.8-89.5 36.8s-65.4-13.1-89.5-36.8l-59.8-58.7-59.8 58.7c-23.1 22.6-53.4 35.7-85.3 36.7l-3.7 0.1c-68.4 0-128.5-64.6-128.5-138.3V512C85.3 276.8 276.7 85.4 512 85.4s426.7 191.4 426.7 426.7v85.2z"
                  p-id="4505"
                ></path>
                <path
                  d="M341.3 468m-85.3 0a85.3 85.3 0 1 0 170.6 0 85.3 85.3 0 1 0-170.6 0Z"
                  p-id="4506"
                ></path>
                <path
                  d="M682.7 468m-85.3 0a85.3 85.3 0 1 0 170.6 0 85.3 85.3 0 1 0-170.6 0Z"
                  p-id="4507"
                ></path>
              </svg>
              {{ message.content }}</span
            >
            <!-- 成功信息 -->
            <span
              class="flex items-center text-ctp-green"
              key="2"
              v-show="message.succeed"
            >
              <svg
                t="1683875987290"
                class="fill-ctp-green mr-2"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4765"
                width="16"
                height="16"
              >
                <path
                  d="M512 0C229.2 0 0 229.2 0 512s229.2 512 512 512 512-229.2 512-512S794.8 0 512 0z m0 945.2C273.1 945.2 78.8 750.9 78.8 512S273.1 78.8 512 78.8 945.2 273.1 945.2 512 750.9 945.2 512 945.2z"
                  p-id="4766"
                ></path>
                <path
                  d="M606.5 638c-36.6 27.4-74.9 31.5-94.5 31.5-45.7 0-78.8-19.7-94.5-31.5-17.5-13.1-42.1-9.4-55.1 7.9-13.1 17.4-9.5 42.1 7.9 55.1 23.5 17.7 73.3 47.3 141.8 47.3 29.4 0 87-6.2 141.8-47.3 17.4-13 21-37.7 7.9-55.1-13.2-17.5-37.9-20.9-55.3-7.9zM736.8 326.6c-15.4-15.4-40.3-15.4-55.7 0L641.7 366c-15.4 15.4-15.4 40.3 0 55.7l39.4 39.4c7.7 7.7 17.8 11.5 27.8 11.5s20.2-3.8 27.8-11.5c15.4-15.4 15.4-40.3 0-55.7l-11.5-11.5 11.5-11.5c15.4-15.5 15.4-40.4 0.1-55.8zM303.5 326.6c-15.4-15.4-40.3-15.4-55.7 0s-15.4 40.3 0 55.7l11.5 11.5-11.5 11.5c-15.4 15.4-15.4 40.3 0 55.7 7.7 7.7 17.8 11.5 27.8 11.5 10.1 0 20.2-3.8 27.8-11.5l39.4-39.4c15.4-15.4 15.4-40.3 0-55.7l-39.3-39.3z"
                  p-id="4767"
                ></path>
              </svg>
              {{ message.content }}</span
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
import { debounce } from "@/utils/debounce";
import { addComment } from "@/request/comment";

import Loading from "@/components/common/Loading";

export default {
  name: "WriteComment",
  props: ["article_id"],
  components: {
    Loading,
  },
  data() {
    return {
      author: "",
      email: "",
      content: "",
      message: {
        content: "",
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
        this.message.error = true;
      } else {
        this.message.succeed = true;
      }
      setTimeout(() => {
        this.message.error = false;
        this.message.succeed = false;
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
        this.message.content = "请输入昵称~";
        this.displayMessage("error");
        return (isValid = false);
      } else if (a && a.length < 4) {
        this.message.content = "昵称不能少于4个字符~";
        this.displayMessage("error");
        return (isValid = false);
      }
      // 验证邮箱
      if (!e) {
        this.message.content = "请输入邮箱~";
        this.displayMessage("error");
        return (isValid = false);
      } else if (e && !this.validateEmail(e)) {
        this.message.content = "邮箱格式不正确~";
        this.displayMessage("error");
        return (isValid = false);
      }
      // 验证评论内容
      if (!c) {
        this.message.content = "请输入评论内容~";
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
          this.message.content = "评论发布成功~";
          this.$store.dispatch("requestCommentsByArticleId", this.article_id);
          this.displayMessage();
          this.content = "";
        }
      } catch (error) {
        console.error(error);
      }
    }, 1000),
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
