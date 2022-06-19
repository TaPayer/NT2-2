import Vue from 'vue'
import VueRouter from 'vue-router'

import FormularioPage from "./components/FormularioPage.vue"
import SoloApi from "./components/SoloApi.vue"

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', redirect: '/formulario' },
        {path: '/formulario',component: FormularioPage},
        {path: '/api', component: SoloApi},
        { path: '*', redirect: '/' },
    ]
});



