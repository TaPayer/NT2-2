<template>
  <div id="app">
    <div class="container mt-5">
      <h2 class="mb-5">TP8</h2>
      <NavBar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
h1 {
  text-align: center;
  color: #fff;
}
body {
  background-color: #3a3845 !important;
}
</style>
