<template>
  <div id="buy-me-a-coffee">
    <!-- 赞赏二维码 -->
    <transition appear name="payment">
      <div class="payment" v-if="showPayment">
        <div class="payment-item">
          <img src="@/assets/images/payment/wechatpay.jpg" />
          <span>微信</span>
        </div>
        <div class="payment-item">
          <img src="@/assets/images/payment/alipay.jpg" />
          <span>支付宝</span>
        </div>
      </div>
    </transition>
    <!-- 赞赏按钮 -->
    <button class="pay-button" @click="showPayment = !showPayment">
      <svg
        t="1678711849388"
        class="icon"
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
          fill="#D08770"
        ></path>
      </svg>
      buy me a coffee
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
#buy-me-a-coffee {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
}

/* 赞赏二维码 */
.payment {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  top: 50px;
  padding: 8px;
  border: 1px solid #d08770;
  border-radius: 6px;
}
.payment-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #d08770;
}
.payment-item:first-child {
  margin-right: 8px;
}
.payment-item img {
  height: 120px;
  border-radius: 6px;
}

/* 赞赏按钮 */
.pay-button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border: 1px solid #d08770;
  border-radius: 6px;
  color: #d08770;
  background-color: var(--nord-bg-primary);
}

/* 赞赏二维码动画 */
.payment-enter-active {
  animation-name: fadeIn;
  animation-duration: 0.3s;
}
.payment-leave-active {
  animation-name: fadeOut;
  animation-duration: 0.3s;
}
</style>
