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
import { router } from "./router";
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
