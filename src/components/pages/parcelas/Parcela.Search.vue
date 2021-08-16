<template>
    <main>
      <div class="container">
        <div class="row" id="breadcumb">
            <div class="col-6">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a aria-current="page">Homepage</a></li>
                        <li class="breadcrumb-item active"><a aria-current="page">Parcelas</a></li>
                    </ol>
                </nav>
            </div>
        </div>
        <div class="row" id="search-parcelas">
          <div class="col-9">
            <div class="input-group rounded">
              <input type="search" v-model="search" class="form-control rounded" :placeholder="'Buscar em ' + filteredParcelas.length + ' parcela(s)'" aria-label="Search"
                aria-describedby="search-addon"/>     
            </div>
          </div>
          <div class="col-2">
            <select class="form-select" aria-label="Default select example" v-model="selectedFilterSelect">
              <option value="Nenhum" selected>Todos</option>
              <option value="Atraso"> Atraso </option>
              <option value="Pago"> Pago </option>
              <option value="Pendente"> Pendente </option>
            </select>
          </div>
          <div id="div-button-add" class="col-1">
            <b-button id="button-add" v-b-modal.modal-1 @click="listarContratos()" type="button" class="btn btn-primary">+ Novo</b-button>
          </div>
        </div>
        <div class="row">
          <div id="table-search" class="shadow-sm">
            <div class="col-12">
              <b-table :bordered="true" outlined hover label-sort-desc="" label-sort-asc="" label-sort-clear="" :items="filteredParcelas" :fields="ColunasTabelaView">             
                <template v-slot:cell()="data">
                  <router-link :to="`/parcelas/editar/${data.item.IdParcela}`">{{ data.value }}</router-link>
                </template>
              </b-table>      
            </div>
          </div>
        </div>
      </div>
      <!-- Modal para selecionar qual Contrato associar -->
      <div>
        <b-modal id="modal-1" hide-header>
          <div class="row">
            <p>Selecione um cliente:</p>
            <div class="col-12">
              <select v-model="clienteSelected" class="form-select" aria-label="Default select example">
                <option :value="cliente.NomeCliente" v-for="cliente of filteredClientes" :key="cliente.NomeCliente"> {{cliente.NomeCliente}} </option>
              </select>
            </div>
          </div>
          <div class="row">
            <p>Selecione um contrato:</p>
            <div class="col-12">
              <select v-model="contratoSelected" class="form-select" aria-label="Default select example">
                <option :value="contrato.IdContrato" v-for="contrato of filteredContratos" :key="contrato.IdContrato"> {{contrato.CodContrato}} </option>
              </select>
            </div>
          </div>
          <template v-slot:modal-footer="{ close }">
            <b-button @click="close()">Cancelar</b-button>
            <b-button @click="criarParcelas(contratoSelected)">Continuar</b-button>
          </template>
        </b-modal>
      </div>
    </main>
</template>

<script>
import Parcela from '@/services/parcelas';
import Contrato from '@/services/contratos';

export default {
    name: 'ParcelaSearch',

    data(){
      return {
        search: '',
        parcelas: [],
        contratos: [],
        errors: [],
        selectedFilterSelect: "Nenhum",
        clienteSelected: '',
        contratoSelected: '',
        filteredClientes: [],
        ColunasTabelaView: [
          { key: 'NomeCliente', label: 'Cliente', sortable: true },
          { key: 'CodContrato', label: 'Contrato', sortable: true },
          { key: 'NumParcela', label: 'Parcela', sortable: true },
          { key: 'DataPrevista', label: 'Data Prevista', sortable: true },
          { key: 'ValorParcela', label: 'Valor', sortable: true },
          { key: 'TotalValorPago', label: 'Pago', sortable: true },
          { key: 'StatusPagamento', label: 'Status', sortable: true }
        ]
      }
    },

    mounted(){
      this.listarParcelas()
    },

    computed: {
      filteredParcelas(){
        let valores = [];
        valores = this.parcelas.filter((parcela) => {
          return (
            parcela.CodContrato.toLowerCase().indexOf(this.search.toLowerCase()) > -1
          )
        })

        valores = valores.filter((parcela) => {
          if(this.selectedFilterSelect === "Nenhum") {return parcela;}
          return parcela.StatusPagamento === this.selectedFilterSelect;
        });

        return valores;
      },
      filteredContratos(){
        let valores = [];
        let x = this.clienteSelected;
        valores = this.contratos.filter(function (contrato) { return (contrato.NomeCliente === x)})
        return valores;
      }
    },

    methods:{
      listarParcelas(){
          Parcela.listar().then(res => {
          console.log(res.data)
          this.parcelas = res.data
        })
      },
      listarContratos(){
          Contrato.listar().then(res => {
          console.log(res.data)
          this.contratos = res.data
          this.contratos.filter(function (contrato)
          {
            return (contrato.StatusContrato != 'Finalizado' &&
                    contrato.StatusContrato != 'Cancelado')
          })
          this.filteredClientes = [...new Map(this.contratos.map(item => [item['NomeCliente'], item])).values()];
          this.filteredClientes.sort((filteredClientes1,filteredClientes2) => (filteredClientes1.NomeCliente < filteredClientes2.NomeCliente) ? -1 : 1)
        })
      },
      criarParcelas(IdContrato){
        if(IdContrato == null || IdContrato == ''){
          alert('Selecione um contrato antes de continuar!')
        } else {
          this.$router.push({ path: '/contrato/' + IdContrato + '/parcela/cadastrar' })
        }
      }
    }
}
</script>

<style scoped>
  #search-parcelas{
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