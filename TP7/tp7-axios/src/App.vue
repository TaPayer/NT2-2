<template>
  <div id="app">
    <div class="container mt-5">
      <h1 class="mb-5">Trabajo Practico N°7</h1>
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
h1 {
  text-align: center;
  color: #fff;
}
body {
  background-color: #3a3845 !important;
}
</style>
