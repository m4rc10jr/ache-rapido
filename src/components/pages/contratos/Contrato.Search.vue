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
              <option value="Cancelado"> Cancelados </option>
            </select>
          </div>
          <div id="div-button-add" class="col-1">
            <b-button id="button-add" v-b-modal.modal-1 @click="listarClientes()" type="button" class="btn btn-primary">+ Novo</b-button>
          </div>
        </div>
        <div class="row">
          <div id="table-search" class="shadow-sm">
            <div class="col-12">
              <b-table :bordered="true" outlined hover label-sort-desc="" label-sort-asc="" label-sort-clear="" :items="filteredContratos" :fields="ColunasTabelaView">             
                <template v-slot:cell()="data">
                  <router-link :to="`/contratos/editar/${data.item.IdContrato}`">{{ data.value }}</router-link>
                </template>
              </b-table>      
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
        },
        ColunasTabelaView: [
          { key: 'CodContrato', label: 'Contrato', sortable: true },
          { key: 'NomeCliente', label: 'Cliente', sortable: true },
          { key: 'PacoteContratado', label: 'Plano', sortable: true },
          { key: 'VigenciaInicial', label: 'Início', sortable: true },
          { key: 'VigenciaFinal', label: 'Fim', sortable: true },
          { key: 'ValorContrato', label: 'Contrato', sortable: true },
          { key: 'TotalValorPago', label: 'Pago', sortable: true },
          { key: 'TotalValorAtraso', label: 'Atraso', sortable: true },
          { key: 'StatusContrato', label: 'Status', sortable: true }
        ]
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
  
  a{ 
    text-decoration: none; 
    color: var(--color-text-dark);
  }
</style>