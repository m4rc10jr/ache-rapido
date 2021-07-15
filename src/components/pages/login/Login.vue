<template>
    <main>
      <div class="container">     
        <div class="shadow-sm p-3 mb-5 bg-white rounded">
          <form @submit.prevent="Logar()">
            <div class="row">
              <div class="col-4">
                <div class="form-group mb-2">
                  <input required type="text" class="form-control" placeholder="E-mail" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="form.email">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <div class="form-group mb-2">
                  <input required type="password" class="form-control" placeholder="Senha" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="form.password">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <div class="form-group mb-2">
                  <button id="button-save" type="submit" class="btn btn-primary">Login</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>  
    </main>
</template>

<script>

export default {
    name: 'Login',
    data(){
      return {
        form:{
          email: '',
          password: ''
        } 
      }
    },

    mounted(){
    },

    methods:{
      Logar(){
        alert('teste')
      }
    }
}

</script>

<style scoped>

#button-save{
        background-color: var(--color-background-buttons);
        border: none;
        width: 120px;
}

</style>