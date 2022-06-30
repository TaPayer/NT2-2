<template>
  <section class="src-components-nav-bar my-2">
    <nav class="navbar navbar-expand-lg">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link to="/formulario">
              <a class="nav-link" href="#">Formulario </a>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/tabla">
              <a class="nav-link" href="#">Tabla</a>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </section>
</template>

<script>
export default {
  name: "src-components-nav-bar",
  props: [],
  mounted() {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style scoped lang="css">
nav {
  border-radius: 10px;
  background-color: #dee2e6;
}
a {
  color: black !important;
  font-weight: 600;
}
</style>
