<template>
  <section class="src-components-tabla">
    <div class="jumbotron">
      <table class="table">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Edad</th>
            <th scope="col">Email</th>
          </tr>
        <tbody>
          <tr v-for="(data, index) in this.$store.state.posts" :key="index" >
            <td>{{ data.name }}</td>
            <td>{{ data.edad }}</td>
            <td>{{ data.mail }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: "src-components-tabla",
  props: [],
  mounted() {
    this.$store.dispatch("getUsuarios");
  },
  data() {
    return {};
  },
  methods: {},

  computed: {},
};
</script>

<style scoped lang="css">
.jumbotron {
  background-color: rgb(32, 3, 55);
  color: rgb(202, 166, 214);
  border-radius: 5px;
}
.table {
  background-color: rgb(32, 3, 55);
  color: rgb(202, 166, 214);
}
</style>
