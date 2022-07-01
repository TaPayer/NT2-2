<template>
  <div id="app">
    <div class="container mt-5">
      <h2 class="mb-5">TP N°7</h2>
      <NavBar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBarr.vue";
export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
h2 {
  text-align: center;
  color: #fff;
}
body {
  background-color: #2f0931 !important;
}
</style>
