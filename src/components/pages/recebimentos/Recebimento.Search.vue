<template>
    <main>
      <div class="container">
        <div class="row" id="breadcumb">
            <div class="col-6">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a aria-current="page">Homepage</a></li>
                        <li class="breadcrumb-item active"><a aria-current="page">Recebimentos</a></li>
                    </ol>
                </nav>
            </div>
        </div>
        <div class="row" id="search-recebimentos">
          <div class="col-11">
            <div class="input-group rounded">
              <input type="search" v-model="search" class="form-control rounded" :placeholder="'Buscar em ' + filteredRecebimentos.length + ' recebimento(s)'" aria-label="Search"
                aria-describedby="search-addon"/>     
            </div>
          </div>
          <div id="div-button-add" class="col-1">
            <b-button id="button-add" v-b-modal.modal-1 @click="listarParcelas()" type="button" class="btn btn-primary">+ Novo</b-button>
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
                    <th scope="col">Previsão</th>
                    <th scope="col">Pagamento</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Status</th>
                    <th scope="col">Ação</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="recebimento of filteredRecebimentos" :key="recebimento.IdRecebimento">
                    <td>{{recebimento.NomeCliente}}</td>
                    <td>{{recebimento.CodContrato}}</td>
                    <td>{{recebimento.NumParcela}}</td>
                    <td>{{recebimento.DataPrevista}}</td>
                    <td>{{recebimento.DataPagamento}}</td>
                    <td>{{recebimento.ValorPago}}</td>
                    <td>{{recebimento.TipoPagamento}}</td>
                    <td>{{recebimento.StatusPagamento}}</td>
                    <td>
                      <router-link :to="'/recebimentos/editar/' + recebimento.IdRecebimento"><button class="btn btn-link"><b-icon id="search-icon" icon="search"></b-icon></button></router-link>
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
          <p>Selecione uma parcela para continuar:</p>
          <div class="row">
            <div class="col-12">
              <select v-model="parcela.IdParcela" class="form-select" aria-label="Default select example">
                <option :value="parcela.IdParcela" v-for="parcela of parcelas" :key="parcela.IdParcela">Contrato: {{parcela.CodContrato}} | Parcela: {{parcela.NumParcela}}</option>
              </select>
            </div>
          </div>
          <template v-slot:modal-footer="{ close }">
            <b-button @click="close()">Cancelar</b-button>
            <router-link :to ="'/parcela/' + parcela.IdParcela + '/recebimento/cadastrar'"><b-button>Continuar</b-button></router-link>
          </template>
        </b-modal>
      </div>
    </main>
</template>

<script>
import Parcela from '@/services/parcelas';
import Recebimento from '@/services/recebimentos';

export default {
    name: 'RecebimentoSearch',

    data(){
      return {
        search: '',
        recebimentos: [],
        parcelas: [],
        errors: [],
        parcela: {
          IdParcela: ''
        }
      }
    },

    mounted(){
      this.listarRecebimentos()
    },

    computed: {
      filteredRecebimentos(){
        let valores = [];
        valores = this.recebimentos.filter((recebimento) => {
          return (
            recebimento.TipoPagamento.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
            recebimento.NomeCliente.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
            recebimento.CodContrato.toLowerCase().indexOf(this.search.toLowerCase()) > -1
          )
        })
        return valores;
      }
    },

    methods:{
      listarRecebimentos(){
          Recebimento.listar().then(res => {
          console.log(res.data)
          this.recebimentos = res.data
        })
      },
      listarParcelas(){
          Parcela.listar().then(res => {
          console.log(res.data)
          this.parcelas = res.data
          this.parcelas.sort((parcela1,parcela2) => (parcela1.NumParcela) <  (parcela2.NumParcela) ? -1 : 1)
          this.parcelas.sort((parcela1,parcela2) => (parcela1.CodContrato) <  (parcela2.CodContrato) ? -1 : 1)
        })
      }
    }
}
</script>

<style scoped>
  #search-recebimentos{
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