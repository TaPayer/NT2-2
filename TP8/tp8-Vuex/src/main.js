import Vue from "vue";
import App from "./App.vue";
// importo bootstrap , jquery y popper
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery";
import "popper.js";
import "bootstrap";

// importo el js de formulario
import "./form";
// importa axios
import "./axios";
// importa Router
import { router } from "./router";
// importo Vuex
import store from "./store";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
