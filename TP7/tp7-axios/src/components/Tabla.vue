<template>
  <section class="src-components-tabla">
    <div class="jumbotron">
      <!-- Tabla -->
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Edad</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(data, index) in this.posts"
            :key="index"
            class="table-light"
          >
            <td>{{ data.nombre }}</td>
            <td>{{ data.edad }}</td>
            <td>{{ data.email }}</td>
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
      url: "https://62842c2aa48bd3c40b6bd976.mockapi.io/usuariosTp7",
      posts: [],
    };
  },
  methods: {
    getUsuarios() {
      this.axios(this.url)
        .then(({ data }) => {
          this.posts = data;
        })
        .catch((error) => console.error("Error Axios", error));
    },
  },

  computed: {},
};
</script>

<style scoped lang="css">
.jumbotron {
  background-color: #03045e;
  color: white;
  border-radius: 10px;
}
</style>
