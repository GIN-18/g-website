<template>
  <div class="open-source-project item-bigger">
    <img :src="imageUrl" />
    <div class="project-info">
      <a :href="projectUrl">
        <h4 class="project-name">
          <slot name="project-name"></slot>
        </h4>
      </a>
      <p class="project-description">
        <slot name="project-description"></slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "OpenSourceItem",
  props: ["imageUrl", "projectUrl"],
};
</script>

<style>
.open-source-project {
  break-inside: avoid;
  margin-bottom: 10px;
  border-radius: 6px;
}

.open-source-project img {
  width: 100%;
  border-radius: 6px 6px 0 0;
  vertical-align: middle;
}

.project-info {
  padding: 16px;
  border-radius: 0 0 6px 6px;
  background-color: var(--nord-bg-quaternary);
}

.project-description {
  font-size: 14px;
}
</style>
