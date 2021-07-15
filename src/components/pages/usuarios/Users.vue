<template>
  <div>
    <div class="container">
        <div class="row" id="breadcumb">
            <div class="col-6">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a aria-current="page">Homepage</a></li>
                        <li class="breadcrumb-item active"><a aria-current="page">Usuários</a></li>
                    </ol>
                </nav>
            </div>
        </div>
      <ul>
        <li v-for="(erro, index) of errors" :key="index">
          campo <b>{{ erro.field }}</b> - {{ erro.defaultMessage }}
        </li>
      </ul>
      <form @submit.prevent="salvar">
        <div class="row">
          <div class="col-6">
            <div class="form-group mb-2">
              <label>Nome</label>
              <input type="text" class="form-control" placeholder="Nome" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="user.name">
            </div>
          </div>
          <div class="col-6">
            <div class="form-group mb-2">
              <label>E-mail</label>
              <input type="email" class="form-control" placeholder="E-mail" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="user.email">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <div class="form-group mb-2">
              <label>Perfil</label>
              <select class="form-select" aria-label="Default select example" v-model="user.role">
                <option value="" disabled selected>Perfil</option>
                <option value="Administrador"> Administrador </option>
                <option value="Financeiro"> Financeiro </option>
                <option value="Operacional"> Operacional </option>
              </select>
            </div>
          </div>
          <div class="col-6">
            <div class="form-group mb-2">
              <label>Senha</label>
              <input type="password" class="form-control" placeholder="Senha" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="user.password">
            </div>
          </div>
        </div>
        <button id="button-save" class="btn btn-primary">Salvar</button>
      </form>
      <div id="table-users" class="shadow-sm p-3 mb-5 bg-white rounded">
        <div class="row">
            <div class="col-12">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Perfil</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="user of users" :key="user.id">
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.role}}</td>
                    <td>
                      <button @click="editar(user)" class="btn btn-link">Editar</button>
                      <button @click="remover(user)" class="btn btn-link">Remover</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  import User from '@/services/users'

  export default {
    name: 'Users',

    data(){
      return {
        user: {
          id: '',
          name: '',
          email: '',
          role: '',
          password: ''
        },
        users: [],
        errors: []
      }
    },

    mounted(){
      this.listar()
  },

    methods:{

      listar(){
          User.listar().then(res => {
          console.log(res.data)
          this.users = res.data
        })
      },

      salvar(){

        if(!this.user.id){
            User.salvar(this.user).then(res => {
              this.res = res
              this.user = {}
              alert('Salvo com sucesso!')
              this.listar()
              this.errors = []
              }).catch( e => {
                this.errors = e.response.data.errors
          })
        }else{
            User.atualizar(this.user).then(res => {
              this.res = res
              this.user = {}
              alert('Atualizado com sucesso!')
              this.listar()
              this.errors = []
              }).catch( e => {
                this.errors = e.response.data.errors
            })
        }
        
      },

      editar(user){
        this.user = user
      },

      remover(user){

        if(confirm('Realmente deseja excluir o registro?')){
            User.apagar(user).then(res => {
              this.res = res
              this.listar()
              this.errors = []
              }).catch(e => {
                this.errors = e.response.data.errors
            })
        }   
      }
    }
  }
</script>

<style scoped>
  #button-save{
    background-color: var(--color-background-buttons);
    border: none;
    margin-top:20px;
    width: 120px;
  }

  #table-users{
    margin-top: 20px;
  }
</style>