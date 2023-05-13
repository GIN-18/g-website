<template>
  <div id="buy-me-a-coffee" class="flex flex-col justify-center items-center py-8">
    <!-- 赞赏二维码 -->
    <Transition appear name="animate__animated animate__bounce payment">
      <div
        class="flex mb-2 p-6 border border-ctp-peach rounded-md text-ctp-peach"
        v-if="showPayment"
      >
        <div class="payment-item mr-2">
          <img
            class="payment-image"
            src="@/assets/images/payment/wechatpay.jpg"
          />
          <span>微信</span>
        </div>
        <div class="payment-item">
          <img class="payment-image" src="@/assets/images/payment/alipay.jpg" />
          <span>支付宝</span>
        </div>
      </div>
    </Transition>
    <!-- 赞赏按钮 -->
    <button
      class="flex justify-center items-center px-3 py-2 border border-ctp-peach rounded-md text-ctp-peach"
      @click="showPayment = !showPayment"
    >
      <svg
        t="1678711849388"
        class="fill-ctp-peach"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="18983"
        width="16"
        height="16"
      >
        <path
          d="M819.2 375.47008H102.4V614.4c0 96.60416 44.62592 182.67136 114.3296 238.92992H102.4V921.6h614.4v-68.27008H602.50112a306.86208 306.86208 0 0 0 106.43456-170.65984H819.2c56.53504 0 102.4-45.86496 102.4-102.4v-102.4c0-56.53504-45.86496-102.4-102.4-102.4z m34.12992 204.8A34.12992 34.12992 0 0 1 819.2 614.4H716.8V443.72992h102.4a34.18112 34.18112 0 0 1 34.12992 34.14016v102.4zM375.47008 102.4h68.25984v204.8h-68.25984zM238.92992 102.4H307.2v204.8h-68.27008zM512 102.4h68.27008v204.8H512z"
          p-id="18984"
        ></path>
      </svg>
      <span class="ml-2"> buy me a coffee </span>
    </button>
  </div>
</template>

<script>
export default {
  name: "BuyMeACoffee",
  data() {
    return {
      showPayment: false,
    };
  },
};
</script>

<style scoped>
.payment-item {
  @apply flex flex-col items-center;
}
.payment-image {
  @apply w-36 mb-2 p-6 rounded-md bg-ctp-mantle;
}

.payment-enter-active {
  animation: zoomIn;
  animation-duration: 0.5s;
}
.payment-leave-active {
  animation: zoomOut;
  animation-duration: 0.5s;
}
</style>
