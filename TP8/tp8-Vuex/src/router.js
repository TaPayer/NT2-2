import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import Tabla from "./components/Tabla.vue";
import Formulario from "./components/FormularioAxios.vue";
export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", redirect: "/formulario" },
    { path: "/tabla", component: Tabla },
    { path: "/formulario", component: Formulario },
  ],
});
