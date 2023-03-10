<template>
  <div class="article-list-item">
    <!-- 文章标题 -->
    <header>
      <router-link :to="`/article/${id}`">
        <h3 class="article-title">
          {{ title }}
        </h3>
      </router-link>
    </header>
    <!-- 文章描述 -->
    <p class="article-description">
      {{ description }}
    </p>
    <!-- 文章信息 -->
    <footer>
      <MetaLine>
        <MetaLineItem>
          <template v-slot:icon>
            <svg
              t="1678613642182"
              class="meta-icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="6204"
              width="14"
              height="14"
            >
              <path
                d="M512 42.666667C252.789333 42.666667 42.666667 252.8 42.666667 512c0 259.210667 210.122667 469.333333 469.333333 469.333333s469.333333-210.122667 469.333333-469.333333C981.333333 252.8 771.210667 42.666667 512 42.666667z m0 853.333333c-212.074667 0-384-171.914667-384-384 0-212.074667 171.925333-384 384-384s384 171.925333 384 384c0 212.085333-171.925333 384-384 384z m158.165333-286.165333a42.666667 42.666667 0 0 1-60.330666 60.341333l-128-128A42.666667 42.666667 0 0 1 469.333333 512V256a42.666667 42.666667 0 0 1 85.333334 0v238.336l115.498666 115.498667z"
                p-id="6205"
                fill="#3B4252"
              ></path>
            </svg>
          </template>
          <template v-slot:info>
            {{ postDate }}
          </template>
        </MetaLineItem>
        <MetaLineItem>
          <template v-slot:icon>
            <svg
              t="1678613669078"
              class="meta-icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="6694"
              width="14"
              height="14"
            >
              <path
                d="M490.048 128l393.450667 393.482667A42.421333 42.421333 0 0 1 896 551.637333a42.453333 42.453333 0 0 1-12.501333 30.165334L581.802667 883.498667A42.464 42.464 0 0 1 551.637333 896c-6.592 0-19.306667-1.621333-30.176-12.501333L128 490.037333V128h362.048m35.338667-85.333333H42.666667v482.72l418.453333 418.442666A127.637333 127.637333 0 0 0 551.637333 981.333333c32.746667 0 65.514667-12.501333 90.506667-37.504l301.685333-301.685333c49.994667-50.005333 49.994667-131.029333 0-181.024L525.386667 42.666667zM362.666667 256c-58.912 0-106.666667 47.765333-106.666667 106.666667s47.754667 106.666667 106.666667 106.666666c58.901333 0 106.666667-47.765333 106.666666-106.666666s-47.754667-106.666667-106.666666-106.666667z m0 128a21.333333 21.333333 0 1 1 0-42.666667 21.333333 21.333333 0 0 1 0 42.666667z"
                p-id="6695"
                fill="#3B4252"
              ></path>
            </svg>
          </template>
          <template v-slot:info>
            {{ tag }}
          </template>
        </MetaLineItem>
        <MetaLineItem>
          <template v-slot:icon>
            <svg
              t="1678614214546"
              class="meta-icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="8031"
              width="14"
              height="14"
            >
              <path
                d="M512 128C170.666667 128 0 513.770667 0 513.770667S170.666667 896 512 896s512-384 512-384-170.666667-384-512-384z m0 682.666667C286.442667 810.666667 144.032 598.592 96.032 513.578667 144 427.754667 286.442667 213.333333 512 213.333333c225.6 0 368.021333 213.312 415.978667 298.666667C879.936 597.504 737.546667 810.666667 512 810.666667z m0-469.333334c-94.250667 0-170.666667 76.416-170.666667 170.666667 0 94.261333 76.416 170.666667 170.666667 170.666667 94.261333 0 170.666667-76.405333 170.666667-170.666667 0-94.250667-76.405333-170.666667-170.666667-170.666667z m0 256c-47.050667 0-85.333333-38.282667-85.333333-85.333333s38.282667-85.333333 85.333333-85.333333 85.333333 38.282667 85.333333 85.333333-38.282667 85.333333-85.333333 85.333333z"
                p-id="8033"
                fill="#3B4252"
              ></path>
            </svg>
          </template>
          <template v-slot:info>
            {{ views }}
          </template>
        </MetaLineItem>
      </MetaLine>
    </footer>
  </div>
</template>

<script>
import { formatDate } from "@/utils/dateFormat";

import MetaLine from "@/components/common/MetaLine";
import MetaLineItem from "@/components/common/MetaLineItem";

export default {
  name: "ArticleListItem",
  props: ["id", "title", "description", "created", "views", "tag"],
  components: {
    MetaLine,
    MetaLineItem,
  },
  computed: {
    postDate() {
      return formatDate(this.created);
    },
  },
};
</script>

<style scoped>
.article-list-item {
  padding: 16px;
  border: 1px solid var(--nord-border-primary);
  border-radius: 6px;
}
.article-list-item:not(:first-child) {
  margin-top: 8px;
}

/* 文章描述 */
.article-description {
  margin: 16px 0;
  color: var(--nord-text-description);
}

.meta-line {
  margin-bottom: 0;
}
</style>
