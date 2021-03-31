<template>
  <div id="app">
    <router-view></router-view>
    <catnav></catnav>
  </div>
</template>

<script>
import catnav from "./components/commer/catnav.vue";
export default {
  name: "App",
  components: {
    catnav,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html {
  font-size: 26.66vw;
  height: 100%;
}
body {
  font: 0.08rem "微软雅黑", Arial;
  height: 100%;
}
#app{
  width: 100%;
  height: 100%;
}
</style>
