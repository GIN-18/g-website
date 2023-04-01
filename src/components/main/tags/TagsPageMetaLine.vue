<template>
  <div class="tags-page-meta-line">
    <PageMetaLine>
      <MetaLineItem>
        <template v-slot:icon>
          <svg
            t="1678613815284"
            class="fill-ctp-overlay1"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="7435"
            width="14"
            height="14"
          >
            <path
              d="M490.048 128l393.450667 393.482667A42.421333 42.421333 0 0 1 896 551.637333a42.453333 42.453333 0 0 1-12.501333 30.165334L581.802667 883.498667A42.464 42.464 0 0 1 551.637333 896c-6.592 0-19.306667-1.621333-30.176-12.501333L128 490.037333V128h362.048m35.338667-85.333333H42.666667v482.72l418.453333 418.442666A127.637333 127.637333 0 0 0 551.637333 981.333333c32.746667 0 65.514667-12.501333 90.506667-37.504l301.685333-301.685333c49.994667-50.005333 49.994667-131.029333 0-181.024L525.386667 42.666667zM362.666667 256c-58.912 0-106.666667 47.765333-106.666667 106.666667s47.754667 106.666667 106.666667 106.666666c58.901333 0 106.666667-47.765333 106.666666-106.666666s-47.754667-106.666667-106.666666-106.666667z m0 128a21.333333 21.333333 0 1 1 0-42.666667 21.333333 21.333333 0 0 1 0 42.666667z"
              p-id="7436"
            ></path>
          </svg>
        </template>
        <template v-slot:info> 共 {{ sumOfTags }} 个标签 </template>
      </MetaLineItem>
    </PageMetaLine>
  </div>
</template>

<script>
import PageMetaLine from "@/components/common/PageMetaLine";
import MetaLineItem from "@/components/common/MetaLineItem";

export default {
  name: "TagsPageMetaLine",
  props: ["sumOfTags"],
  components: {
    PageMetaLine,
    MetaLineItem,
  },
};
</script>

<style scoped></style>
