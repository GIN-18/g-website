<template>
  <!-- 显示按钮 -->
  <button class="sm:hidden" @click="changeMobileMenuState" v-if="!$store.state.showMobileMenu">
    <svg
      t="1678610661661"
      class="fill-current"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="4212"
      width="24"
      height="24"
    >
      <path
        d="M128 298.666667h768a42.666667 42.666667 0 0 0 0-85.333334H128a42.666667 42.666667 0 0 0 0 85.333334z m768 170.666666H128a42.666667 42.666667 0 0 0 0 85.333334h768a42.666667 42.666667 0 0 0 0-85.333334z m0 256H128a42.666667 42.666667 0 0 0 0 85.333334h768a42.666667 42.666667 0 0 0 0-85.333334z"
        p-id="4213"
      ></path>
    </svg>
  </button>
  <!-- 取消按钮 -->
  <button class="sm:hidden" @click="changeMobileMenuState" v-else>
    <svg
      t="1678610592745"
      class="fill-current"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="3914"
      width="24"
      height="24"
    >
      <path
        d="M572.341333 512l268.490667-268.501333a42.666667 42.666667 0 0 0-59.274667-61.376c-0.362667 0.341333-0.704 0.693333-1.056 1.045333L512 451.658667 243.509333 183.168a42.666667 42.666667 0 0 0-60.341333 60.330667L451.669333 512 183.168 780.501333a42.666667 42.666667 0 0 0 59.669333 61.002667l0.672-0.672L512 572.341333l268.501333 268.490667C788.832 849.162667 799.754667 853.333333 810.666667 853.333333s21.845333-4.170667 30.165333-12.501333a42.666667 42.666667 0 0 0 0-60.330667L572.341333 512z"
        p-id="3915"
      ></path>
    </svg>
  </button>
</template>

<script>
export default {
  name: "MobileMenu",
  methods: {
    changeMobileMenuState() {
      this.$store.dispatch("showMobileMenu");
    },
  },
};
</script>
