<template>
    <main>
      <div class="container">
        <div class="row" id="breadcumb">
            <div class="col-6">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a aria-current="page">Homepage</a></li>
                        <li class="breadcrumb-item active"><a aria-current="page">Contratos</a></li>
                    </ol>
                </nav>
            </div>
        </div>
        <div class="row" id="search-contratos">
          <div class="col-9">
            <div class="input-group rounded">
              <input type="search" v-model="searchContratos" class="form-control rounded" :placeholder="'Buscar em ' + filteredContratos.length + ' contrato(s)'" aria-label="Search"
                aria-describedby="search-addon"/>     
            </div>
          </div>
          <div class="col-2">
            <select class="form-select" aria-label="Default select example" v-model="selectedFilterSelect">
              <option value="Nenhum" selected>Todos</option>
              <option value="Vigente"> Vigentes </option>
              <option value="Finalizado"> Finalizados </option>
              <option value="Previsto"> Previstos </option>
            </select>
          </div>
          <div id="div-button-add" class="col-1">
            <b-button id="button-add" v-b-modal.modal-1 @click="listarClientes()" type="button" class="btn btn-primary">+ Novo</b-button>
          </div>
        </div>
        <div class="row">
          <div class="col-12">      
            <div id="table-search" class="shadow-sm p-3 mb-5 bg-white rounded">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Contrato</th>                    
                    <th scope="col">Cliente</th>
                    <th scope="col">Plano</th>
                    <th scope="col">Início</th>
                    <th scope="col">Fim</th>
                    <th scope="col">Valor Contrato</th>
                    <th scope="col">Valor Pago</th>
                    <th scope="col">Valor Atraso</th>
                    <th scope="col">Status</th>
                    <th scope="col">Ação</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="contrato of filteredContratos" :key="contrato.IdContrato">
                    <td>{{contrato.CodContrato}}</td>
                    <td>{{contrato.NomeCliente}}</td>
                    <td>{{contrato.PacoteContratado}}</td>
                    <td>{{contrato.VigenciaInicial}}</td>
                    <td>{{contrato.VigenciaFinal}}</td>
                    <td>{{contrato.ValorContrato}}</td>
                    <td>{{contrato.TotalValorPago}}</td>
                    <td>{{contrato.TotalValorAtraso}}</td>
                    <td>{{contrato.StatusContrato}}</td>
                    <td>
                      <router-link :to="'/contratos/editar/' + contrato.IdContrato"><button class="btn btn-link"><b-icon id="search-icon" icon="search"></b-icon></button></router-link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
<!-- Modal para selecionar qual Cliente associar -->
      <div>
        <b-modal id="modal-1" hide-header>
          <p>Selecione um cliente para continuar:</p>
          <div class="row">
            <div class="col-12">
              <select v-model="clientes.IdCliente" class="form-select" aria-label="Default select example">
                <option :value="cliente.IdCliente" v-for="cliente of clientes" :key="cliente.IdCliente">{{cliente.NomeCliente}}</option>
              </select>
            </div>
          </div>
          <template v-slot:modal-footer="{ close }">
            <b-button @click="close()">Cancelar</b-button>
            <router-link :to ="'/cliente/' + clientes.IdCliente + '/contrato/cadastrar'"><b-button>Continuar</b-button></router-link>
          </template>
        </b-modal>
      </div>
    </main>
</template>

<script>
import Contrato from '@/services/contratos';
import Cliente from '@/services/clientes';

export default {
    name: 'ContratoSearch',

    data(){
      return {
        searchContratos: '',
        contratos: [],
        clientes: [],
        errors: [],
        selectedModal: null,
        selectedFilterSelect: "Nenhum",
        contrato: {
          IdContrato: ''
        },
        cliente: {
          idCliente: ''
        }
      }
    },

    mounted(){
      this.listarContratos()
      this.listarClientes()
    },

    computed: {
      filteredContratos(){
        let valores = [];
        valores = this.contratos.filter((contrato) => {
          return (
            contrato.NomeCliente.toLowerCase().indexOf(this.searchContratos.toLowerCase()) > -1 ||
            contrato.CodContrato.toLowerCase().indexOf(this.searchContratos.toLowerCase()) > -1 ||
            contrato.PacoteContratado.toLowerCase().indexOf(this.searchContratos.toLowerCase()) > -1
          )
        });

        valores = valores.filter((contrato) => {
          if(this.selectedFilterSelect === "Nenhum") {return contrato;}
          return contrato.StatusContrato === this.selectedFilterSelect;
        });

        return valores;
      },
    },

    methods:{
      listarContratos(){
          Contrato.listar().then(res => {
          console.log(res.data)
          this.contratos = res.data
        })
      },
      listarClientes(){
          Cliente.listar().then(res => {
          console.log(res.data)
          this.clientes = res.data
          this.clientes.sort((cliente1,cliente2) => cliente1.NomeCliente < cliente2.NomeCliente ? -1 : 1)
        })
      },
    },
}
</script>

<style scoped>
  #search-contratos{
    margin-top: 20px;
  }
  
  #table-search{
    margin: 20px auto;
  }

  #div-button-add{
    position: relative;
  }

  #button-add{
    margin: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    background-color: var(--color-background-buttons);
    border: none;
  }

  #search-icon{
    color: var(--color-background-buttons);
  }
  
</style>