<template>
  <div>
    <GroupTitle>
      <template v-slot:icon>
        <svg
          t="1677677583158"
          class="fill-current"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="59558"
          width="22"
          height="22"
        >
          <path
            d="M971.2 245.44a263.68 263.68 0 0 0-192-192 1717.12 1717.12 0 0 0-533.44 0 263.68 263.68 0 0 0-192 192 1717.12 1717.12 0 0 0 0 533.44 263.68 263.68 0 0 0 192 192 1717.12 1717.12 0 0 0 533.44 0 263.68 263.68 0 0 0 192-192 1719.04 1719.04 0 0 0 0-533.44zM492.8 539.52A529.92 529.92 0 0 1 329.6 704a69.76 69.76 0 1 1-71.68-119.68 360 360 0 0 0 89.6-80 409.92 409.92 0 0 0-89.6-79.36 69.76 69.76 0 1 1 71.68-120.32 529.6 529.6 0 0 1 163.2 163.2 69.76 69.76 0 0 1 0 71.68zM742.4 704h-172.8c-32 0-57.6-16.32-57.6-48s25.92-48 57.6-48h172.8c32 0 57.6 16.32 57.6 48s-25.92 48-57.6 48z"
            p-id="59559"
          ></path>
        </svg>
      </template>
      <template v-slot:info> 开源项目 </template>
    </GroupTitle>

    <!-- 开源项目列表 -->
    <div class="">
      <OpenSourceItem
        v-for="(project, index) in projects"
        :key="index"
        :imageUrl="project.projectImageUrl"
        :projectUrl="project.projectUrl"
      >
        <template v-slot:project-name>
          {{ project.projectName }}
        </template>
        <template v-slot:project-description>
          {{ project.projectDescription }}
        </template>
      </OpenSourceItem>
    </div>
  </div>
</template>

<script>
import { getAllProjects } from "@/request/about";

import GroupTitle from "@/components/common/GroupTitle";
import OpenSourceItem from "@/components/main/about/open_source/OpenSourceItem";

export default {
  name: "OpenSource",
  components: {
    GroupTitle,
    OpenSourceItem,
  },
  data() {
    return {
      projects: [],
    };
  },
  created() {
    getAllProjects().then((res) => {
      this.projects = res.data;
    });
  },
};
</script>
