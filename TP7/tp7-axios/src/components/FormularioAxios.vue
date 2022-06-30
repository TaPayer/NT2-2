<template>
  <section class="src-components-formulario-axios">
    <div class="jumbotron">
      <vue-form :state="formState" @submit.prevent="enviar()">
        <!-- Campo nombre -->
        <validate tag="div">
          <!-- elemento de entrada -->
          <label for="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            class="form-control"
            v-model.trim="formData.nombre"
            autocomplete="off"
            required
            :minlength="nombreMinLength"
            :maxlength="nombreMaxLength"
          />

          <!-- Mensajes de validacion -->
          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido
            </div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo requiere entre {{ nombreMinLength }} y
              {{ nombreMaxLength }} caracteres
            </div>
          </field-messages>
        </validate>

        <!-- Campo edad -->
        <validate tag="div" class="my-4">
          <!-- elemento de entrada -->
          <label for="edad">Edad</label>
          <input
            type="number"
            id="edad"
            name="edad"
            class="form-control"
            v-model.trim="formData.edad"
            autocomplete="off"
            required
            :min="edadMin"
            :max="edadMax"
          />

          <!-- Mensajes de validacion -->
          <field-messages name="edad" show="$dirty">
            <div slot="required" class="alert alert-danger mt-2">
              Campo requerido
            </div>
            <div slot="minlength" class="alert alert-danger mt-2">
              Este campo requiere como minumo {{ nombreMinLength }} caracteres
            </div>
            <div slot="min" class="alert alert-danger mt-2">
              La edad minima permitida es de {{ edadMin }}
            </div>
            <div slot="max" class="alert alert-danger mt-2">
              La edad minima permitida es de {{ edadMax }}
            </div>
          </field-messages>
        </validate>

        <!-- Campo email -->
        <validate tag="div">
          <!-- elemento de entrada -->
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            class="form-control"
            v-model.trim="formData.email"
            autocomplete="off"
            required
          />

          <!-- Mensajes de validacion -->
          <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido
            </div>
            <div slot="email" class="alert alert-danger mt-1">
              Email no valido
            </div>
          </field-messages>
        </validate>
        <button
          type="submit"
          class="btn btn-success my-4"
          :disabled="formState.$invalid"
        >
          Enviar
        </button>
      </vue-form>
    </div>
  </section>
</template>

<script>
export default {
  name: "src-components-formulario-axios",
  props: [],

  mounted() {},
  data() {
    return {
      formData: this.getInicialData(),
      formState: {},
      nombreMinLength: 5,
      nombreMaxLength: 15,
      edadMin: 18,
      edadMax: 120,
      url: "https://62842c2aa48bd3c40b6bd976.mockapi.io/usuariosTp7",
    };
  },
  methods: {
    getInicialData() {
      return {
        nombre: "",
        edad: "",
        email: "",
      };
    },
    enviar() {
      this.enviarUsuarios(this.formData);
      this.formData = this.getInicialData(); //reset de los datos del vue-form
      this.formState._reset(); //reseet de los estados vue-form
    },
    async enviarUsuarios(formData) {
      let usuarioNuevo = formData;
      try {
        await this.axios.post(this.url, usuarioNuevo, {
          "content-type": "application/json",
        });
      } catch (error) {
        console.error("Error Axios", error);
      }
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
