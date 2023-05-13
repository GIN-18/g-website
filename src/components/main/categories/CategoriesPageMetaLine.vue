<template>
  <div class="categories-page-meta-line">
    <IconInfo
      componentStyle="mb-2"
      fontStyle="text-sm text-ctp-overlay1"
    >
      <template v-slot:icon>
        <svg
          t="1678613901024"
          class="fill-ctp-overlay1"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="7733"
          width="14"
          height="14"
        >
          <path
            d="M597.332444 938.656889H213.336444c-23.573088 0-42.666222-19.093134-42.666222-42.666222V178.110145c-49.684816 17.599817-85.332444 64.852658-85.332444 120.564077v597.327111c0 70.687264 57.311403 127.998667 127.998666 127.998667h426.662223c55.71142 0 102.953594-35.658295 120.564077-85.332444L597.332444 938.656889zM810.663556 0H384.001333c-70.687264 0-127.998667 57.32207-127.998666 127.998667v597.327111c0 70.69793 57.311403 128.009333 127.998666 128.009333h426.662223c70.687264 0 127.998667-57.311403 127.998666-128.009333V127.998667c0-70.676597-57.311403-127.998667-127.998666-127.998667z m42.666222 725.325778a42.666222 42.666222 0 0 1-42.655556 42.676889H384.001333a42.666222 42.666222 0 0 1-42.666222-42.666223V127.998667a42.666222 42.666222 0 0 1 42.666222-42.666223h426.662223c23.573088 0 42.666222 19.093134 42.666222 42.666223v597.327111z"
            p-id="7734"
          ></path>
        </svg>
      </template>
      <template v-slot:info> 共 {{ sumOfCategories }} 种分类 </template>
    </IconInfo>
  </div>
</template>

<script>
import IconInfo from "@/components/common/IconInfo";

export default {
  name: "CategoriesPageMetaLine",
  props: ["sumOfCategories"],
  components: {
    IconInfo,
  },
};
</script>

<style scoped></style>
