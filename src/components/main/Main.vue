<template>
  <main id="main">
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  name: "Main",
};
</script>

<style scoped>
#main {
  flex: 1;
  max-width: 56%;
  min-width: 56%;
  margin: auto;
}

@media (min-width: 1008px) {
  #main {
    max-width: 56%;
    min-width: 56%;
  }
}
@media (max-width: 1007px) {
  #main {
    max-width: 56%;
    min-width: 56%;
  }
}
@media (max-width: 640px) {
  #main {
    max-width: 100%;
    min-width: 100%;
    padding: 0 8px;
  }
}
</style>
