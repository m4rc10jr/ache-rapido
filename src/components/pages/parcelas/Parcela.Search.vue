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
          <div class="col-12">      
            <div id="table-search" class="shadow-sm p-3 mb-5 bg-white rounded">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Cliente</th>
                    <th scope="col">Contrato</th>
                    <th scope="col">Parcela</th>
                    <th scope="col">Data Prevista</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Pago</th>
                    <th scope="col">Status</th>
                    <th scope="col">Ação</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="parcela of filteredParcelas" :key="parcela.IdParcela">
                    <td>{{parcela.NomeCliente}}</td>
                    <td>{{parcela.CodContrato}}</td>
                    <td>{{parcela.NumParcela}}</td>
                    <td>{{parcela.DataPrevista}}</td>
                    <td>{{parcela.ValorParcela}}</td>
                    <td>{{parcela.TotalValorPago}}</td>
                    <td>{{parcela.StatusPagamento}}</td>
                    <td>
                      <router-link :to="'/parcelas/editar/' + parcela.IdParcela"><button class="btn btn-link"><b-icon id="search-icon" icon="search"></b-icon></button></router-link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <!-- Modal para selecionar qual Contrato associar -->
      <div>
        <b-modal id="modal-1" hide-header>
          <p>Selecione um contrato para continuar:</p>
          <div class="row">
            <div class="col-12">
              <label> Cliente </label>
              <select v-model="contrato.IdContrato" class="form-select" aria-label="Default select example">
                <option :value="contrato.IdContrato" v-for="contrato of contratos" :key="contrato.IdContrato"> {{contrato.NomeCliente}} </option>
              </select>
              <label> Contrato </label>
              <select v-model="contrato.IdContrato" class="form-select" aria-label="Default select example">
                <option :value="contrato.IdContrato" v-for="contrato of contratos" :key="contrato.IdContrato"> {{contrato.CodContrato}} </option>
              </select>
            </div>
          </div>
          <template v-slot:modal-footer="{ close }">
            <b-button @click="close()">Cancelar</b-button>
            <router-link :to ="'/contrato/' + contrato.IdContrato + '/parcela/cadastrar'"><b-button>Continuar</b-button></router-link>
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
        contrato: {
          IdContrato: '',
          IdCliente: '',
          NomeCliente: ''
        }
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
            return (contrato.StatusPagamento != 'Finalizado' &&
                   contrato.TotalValorParcelas != 0)
          })
          this.contratos.sort((contrato1,contrato2) => (contrato1.NomeCliente + '-' + contrato1.CodContrato) < (contrato2.NomeCliente + '-' + contrato2.CodContrato) ? -1 : 1)
        })
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

</style>