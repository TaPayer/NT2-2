<template>

    <div class="jumbotron">

      <vue-form :state="formState" @submit.prevent="registrar()">  
        <validate tag="div">
          <input
            type="text"
            id="nombre"
            name="nombre" 
            placeholder="Su nombre"
            autocomplete="off"
            :minlength="nombreMinLength"
            :maxlength="nombreMaxLength"
            v-model.trim="formData.nombre"
            class="form-control"
            required
          />

            <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo requiere como mínimo {{nombreMinLength}} caracteres.
            </div>
            <div slot="maxlength" class="alert alert-danger mt-1">
              Este campo requiere como mínimo {{nombreMaxLength}} caracteres.
            </div>
          </field-messages>
        
        </validate>
        
        <validate tag="div">
          <input 
            type="number"
            id="edad"
            name="edad" 
            v-model.number="formData.edad"
            placeholder="Su edad"
            autocomplete="off"
            :min="edadMin"
            :max="edadMax"
            class="form-control" 
            required
          />

          <field-messages name="edad" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="min" class="alert alert-danger mt-1">
              La edad mínima permitida es de {{edadMin}} años.
            </div>
            <div slot="max" class="alert alert-danger mt-1">
              La edad máxima permitida es de {{edadMax}} años.
            </div>
          </field-messages>
        
        </validate>
        
        <validate tag="div">
          <input
            type="email"
            id="email"
            name="email" 
            v-model.trim="formData.email" 
            placeholder="Su email" 
            autocomplete="off"
            class="form-control"
            required
          />

            <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="email" class="alert alert-danger mt-1">Email no válido</div>
          </field-messages>
        </validate>

        <button class="btn btn-success my-4" :disabled="formState.$invalid">Registrar</button>
      </vue-form>
    </div>

</template>

<script>

  export default  {
    name: 'src-components-formulario',
    props: {}, 
    mounted () {
    },
    //ya tengo
    data () {
      return {
          formData: {
            nombre: '',
            edad: '',
            email: ''
          },
          formState : {},
          nombreMinLength: 5,
          nombreMaxLength: 15,
          edadMin: 18,
          edadMax: 120
      }
    },
    methods: {
        registrar(){
            this.$emit(
              "submit",
              {
                nombre: this.formData.nombre,
                edad: this.formData.edad,
                email: this.formData.email
              }
            )
        }   
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-contador {

  }

   .jumbotron {
    background-color: #f4f4f4;
    color: rgb(133, 12, 12);
    border: 2px inset rgb(0,0,0,0.5);
  }

</style>
