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
          <tr v-for="(data, index) in this.posts" :key="index" >
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
    this.getUsuarios();
  },
  data() {
    return {
      url: "https://62af9a383bbf46a35223feae.mockapi.io/users",
      posts: [],
    };
  },
  methods: {
    getUsuarios() {
      this.axios(this.url)
        .then(({ data }) => { this.posts = data; })
        .catch((error) => console.error("Error", error));
    },
  },

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
