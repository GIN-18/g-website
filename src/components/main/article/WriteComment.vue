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
        class="w-full p-3 border border-b-0 border-ctp-overlay0 rounded-t-md outline-none bg-ctp-base"
        type="text"
        placeholder="昵称"
        v-model="author"
      />
      <input
        class="w-full p-3 border border-b-0 border-ctp-overlay0 outline-none bg-ctp-base"
        type="text"
        placeholder="邮箱"
        v-model="email"
      />
      <textarea
        class="w-full h-56 p-3 border border-ctp-overlay0 rounded-b-md outline-none resize-none bg-ctp-base"
        placeholder="请多多指教~"
        v-model="content"
      >
      </textarea>
      <!-- 提交评论 -->
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <Loading v-show="showLoading"></Loading>
          <TransitionGroup
            appear
            name="animate__animated animate__bounce"
            enter-active-class="animate__zoomIn"
            leave-active-class="animate__zoomOut"
          >
            <!-- 评论信息验证失败信息 -->
            <span key="1" v-show="showMessage">{{ errorMessage }}</span>
            <!-- 提交成功提示信息 -->
            <span
              class="flex items-center text-ctp-pink"
              key="2"
              v-show="postCommentInfo"
            >
              <svg
                t="1683450804835"
                class="fill-ctp-pink mr-2"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="15990"
                width="16"
                height="16"
              >
                <path
                  d="M581.18 384c-40.36 0-213.64 3.96-325.18 171.9V384c0-105.88-86.12-192-192-192-35.34 0-64 28.66-64 64s28.66 64 64 64c35.28 0 64 28.72 64 64v512c0 70.6 57.4 128 128 128h352c17.68 0 32-14.32 32-32v-32c0-35.34-28.66-64-64-64h-64l256-192v288c0 17.68 14.32 32 32 32h64c17.68 0 32-14.32 32-32V579.72c-20.58 5.34-41.78 9.08-64 9.08-123.62 0-227.04-88.1-250.82-204.8zM896 192h-128l-128-128v268.8c0 106.04 85.96 192 192 192s192-85.96 192-192V64l-128 128z m-144 160c-17.68 0-32-14.32-32-32s14.32-32 32-32 32 14.32 32 32-14.32 32-32 32z m160 0c-17.68 0-32-14.32-32-32s14.32-32 32-32 32 14.32 32 32-14.32 32-32 32z"
                  p-id="15991"
                ></path>
              </svg>
              评论发布成功~
            </span>
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
      postCommentInfo: false,
      showLoading: false,
      disableSubmitButton: false,
      errorMessage: "",
      showMessage: false,
    };
  },
  watch: {
    errorMessage() {
      this.showMessage = true;
      setTimeout(() => {
        this.showMessage = false;
      }, 1000);
    },
  },
  methods: {
    // validateEmail(email) {
    //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //   return emailRegex.test(email);
    // },
    // 验证评论信息
    validateCommentInfo() {
      var a = this.author;
      var e = this.email;
      var c = this.content;
      if (!a) {
        this.errorMessage = "昵称不能为空";
        return;
      } else if (!a || !e) {
        this.errorMessage = "邮箱不能为空";
        return;
      } else if (!a || !e || !c) {
        this.errorMessage = "内容不能为空";
        return;
      }
      console.log("都有内容");
    },

    // 显示评论提交成功信息
    showCommentInfo() {
      this.postCommentInfo = true;
      setTimeout(() => {
        this.postCommentInfo = false;
      }, 2000);
    },
    // 网络请求相关方法
    submitComment() {
      this.validateCommentInfo();
      // this.showLoading = true;
      // addComment(this.article_id, this.author, this.email, this.content).then(
      //   (res) => {
      //     if (res.added == "ok") {
      //       this.showLoading = false;
      //       this.showCommentInfo();
      //     }
      //   }
      // );
    },
  },
};
</script>
