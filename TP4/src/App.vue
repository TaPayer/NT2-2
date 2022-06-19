<template>
  <div id="app">
   
    <Nav />
    <router-view></router-view>
  
  </div>
</template>

<script>
// import FormularioPage from './components/FormularioPage.vue'
// import SoloApi from './components/SoloApi.vue'
import Nav from './components/Nav.vue'

export default {
  
  name: 'App',
  components: {
    Nav
  }
}
</script>

