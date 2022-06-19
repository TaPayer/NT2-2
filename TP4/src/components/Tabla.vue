<template>

  <div>
    <h5>Tabliteh</h5>

    <table class="table">
      <tr>
        <th>Nombre</th>
        <th>Edad</th>
        <th>eMail</th>
      </tr>
      <tr v-for="(usuario, index) in usuarios" :key="index">
        <td>{{ usuario.nombre }}</td>
        <td>{{ usuario.edad }}</td>
        <td>{{ usuario.email }}</td>
      </tr>
    </table>
  </div>

</template>

<script>

  export default  {
    name: 'src-components-contador',
    props: {
      usuarios: Array
    },
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-contador {

  }
</style>
