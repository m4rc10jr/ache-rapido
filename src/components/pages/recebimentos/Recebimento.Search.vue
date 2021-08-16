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
          <div id="table-search" class="shadow-sm">
            <div class="col-12">
              <b-table :bordered="true" outlined hover label-sort-desc="" label-sort-asc="" label-sort-clear="" :items="filteredRecebimentos" :fields="ColunasTabelaView">             
                <template v-slot:cell()="data">
                  <router-link :to="`/recebimentos/editar/${data.item.IdRecebimento}`">{{ data.value }}</router-link>
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
                <option :value="parcela.NomeCliente" v-for="parcela of filteredClientes" :key="parcela.NomeCliente">{{parcela.NomeCliente}}</option>
              </select>
            </div>
          </div>
          <div class="row">
            <p>Selecione um contrato:</p>
            <div class="col-12">
              <select v-model="contratoSelected" class="form-select" aria-label="Default select example">
                <option :value="parcela.CodContrato" v-for="parcela of filteredContratos" :key="parcela.CodContrato">{{parcela.CodContrato}}</option>
              </select>
            </div>
          </div>
          <div class="row">
            <p>Selecione uma parcela:</p>
            <div class="col-12">
              <select v-model="parcelaSelected" class="form-select" aria-label="Default select example">
                <option :value="parcela.IdParcela" v-for="parcela of filteredParcelas" :key="parcela.IdParcela">{{parcela.NumParcela}}</option>
              </select>
            </div>
          </div>
          <template v-slot:modal-footer="{ close }">
            <b-button @click="close()">Cancelar</b-button>
            <b-button @click="criarRecebimentos(parcelaSelected)">Continuar</b-button>
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
        },
        clienteSelected: '',
        contratoSelected: '',
        parcelaSelected: '',
        filteredClientes: [],
        ColunasTabelaView: [
          { key: 'NomeCliente', label: 'Nome Cliente', sortable: true },
          { key: 'CodContrato', label: 'Cod Contrato', sortable: true },
          { key: 'NumParcela', label: 'Num Parcela', sortable: true },
          { key: 'DataPrevista', label: 'Data Parcela', sortable: true },
          { key: 'DataPagamento', label: 'Data Pagamento', sortable: true },
          { key: 'ValorParcela', label: 'Valor Parcela', sortable: true },
          { key: 'ValorPago', label: 'Valor Pago', sortable: true },
          { key: 'TipoPagamento', label: 'Tipo Pagamento', sortable: true },
          { key: 'StatusPagamento', label: 'Status', sortable: true }        ]
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
      },
      filteredContratos(){
        let valores = [];
        let x = this.clienteSelected;
        let valoresFinal;

        valores = this.parcelas.filter(function (parcela) { return (parcela.NomeCliente === x)})

        valoresFinal = [...new Map(valores.map(item => [item['CodContrato'], item])).values()];
        return valoresFinal;
      },
      filteredParcelas(){
        let valores = [];
        let x = this.contratoSelected;
        let valoresFinal;

        valores = this.parcelas.filter(function (parcela) { return (parcela.CodContrato === x)})
        
        valoresFinal = [...new Map(valores.map(item => [item['NumParcela'], item])).values()];
        return valoresFinal
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

          this.filteredClientes = [...new Map(this.parcelas.map(item => [item['NomeCliente'], item])).values()];
          this.filteredClientes.sort((filteredClientes1,filteredClientes2) => (filteredClientes1.NomeCliente < filteredClientes2.NomeCliente) ? -1 : 1)
        })
      },
      criarRecebimentos(IdParcela){
        if(IdParcela == null || IdParcela == ''){
          alert('Selecione uma parcela antes de continuar!')
        } else {
          this.$router.push({ path: '/parcela/' + IdParcela + '/recebimento/cadastrar' })
        }
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

  a{ 
    text-decoration: none; 
    color: var(--color-text-dark);
  }

</style>