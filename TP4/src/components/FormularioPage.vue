<template>

  <section class="src-components-formulario-page">
    <h1>TP4</h1>
    <h3>Formulario</h3>
    <formulario 
      :usuarios="usuarios"
      @submit="onSubmit"
    />

    <h3>Tabla</h3>
    <tabla 
      :usuarios="usuarios"
    />

  </section>

</template>

<script>

  import Formulario from './Formulario.vue'
  import Tabla from './Tabla.vue'
  
  export default  {
    components: {
      Formulario,
      Tabla
    },
    name: 'src-components-formulario-page',
    props: [],
    mounted () {

    },
    data () {
      return {
        usuarios: []
      }
    },
    methods: {
      onSubmit(usuario){
        this.usuarios.push(usuario)
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-form-page {

  }
</style>
