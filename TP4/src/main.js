import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery'
import 'popper.js'
import 'bootstrap'

/* -------------- FORMULARIO AVANZADO (vue-form) -------------*/
/* https://www.npmjs.com/package/vue-form */
/* Instalación: npm i vue-form */
import './form'

/* -------------- ROUTER (vue-router) -------------*/
/* https://www.npmjs.com/package/vue-router */
/* Instalación: npm i vue-router@3 */
import { router } from './router'

Vue.config.productionTip = false

new Vue({
  router, // es igual a -> router : router,
  render: h => h(App),
}).$mount('#app')
