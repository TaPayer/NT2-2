import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    url: "https://62af9a383bbf46a35223feae.mockapi.io/users",
    posts: [],
  },
  actions: {
    async enviarUsuarios({ commit }, formData) {
      let usuarioNuevo = formData;
      try {
        await axios.post(this.state.url, usuarioNuevo, {
          "content-type": "application/json",
        });
        commit("enviarUsuarios");
      } catch (error) {
        console.error("Error Axios", error);
      }
    },
    getUsuarios({ commit }) {
      axios(this.state.url)
        .then(({ data }) => {
          commit("getUsuarios", data);
          console.log("Entro");
        })
        .catch((error) => console.error("Error", error));
    },
  },
  mutations: {
    enviarUsuarios() {},
    getUsuarios(state, data) {
      state.posts = data;
    },
  },
});
