<template>
    <main>
      <div class="container">
        <div class="row" id="breadcumb">
          <div class="col-6">
              <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                      <li class="breadcrumb-item"><a aria-current="page">Homepage</a></li>
                      <li class="breadcrumb-item active"><a aria-current="page">Clientes</a></li>
                  </ol>
              </nav>
          </div>
        </div>
        <div class="row" id="search-clientes">
          <div class="col-9">
            <div class="input-group rounded">
              <input type="search" v-model="search" class="form-control rounded" :placeholder="'Buscar em ' + filteredClientes.length + ' cliente(s)'" aria-label="Search"
                aria-describedby="search-addon"/>     
            </div>
          </div>
          <div class="col-2">
            <select class="form-select" aria-label="Default select example" v-model="selectedFilterSelect">
              <option value="Nenhum" selected>Todos</option>
              <option value="Ativo"> Ativo </option>
              <option value="Inativo"> Inativo </option>
            </select>
          </div>
          <div id="div-button-add" class="col-1">
            <router-link to ="/clientes/cadastrar"><button id="button-add" type="button" class="btn btn-primary">+ Novo</button></router-link>
          </div>
        </div>
        <div class="row">
          <div id="table-search" class="shadow-sm">
            <div class="col-12">
              <b-table :bordered="true" outlined hover label-sort-desc="" label-sort-asc="" label-sort-clear="" :items="filteredClientes" :fields="ColunasTabelaView">             
                <template v-slot:cell()="data">
                  <router-link :to="`/clientes/editar/${data.item.IdCliente}`">{{ data.value }}</router-link>
                </template>
              </b-table>
            </div>
          </div>
        </div>
      </div>
    </main>
</template>

<script>
import Cliente from '@/services/clientes';

export default {
    name: 'ClienteSearch',

    data(){
      return {
        search: '',
        clientes: [],
        errors: [],
        selectedFilterSelect: "Nenhum",
        ColunasTabelaView: [
          { key: 'NomeCliente', label: 'Cliente/Empresa', sortable: true },
          { key: 'ApelidoCliente', label: 'Apelido/Razão', sortable: true },
          { key: 'TipoOrigem', label: 'Origem', sortable: true },
          { key: 'NomeRepresentante', label: 'Representante', sortable: true },
          { key: 'NumDocumento', label: 'Documento', sortable: true },
          { key: 'TelefoneRepresentante', label: 'Telefone', sortable: true },
          { key: 'CelularRepresentante', label: 'Celular', sortable: true },
          { key: 'MunicipioCliente', label: 'Município', sortable: true },
          { key: 'StatusCliente', label: 'Status', sortable: true }
        ]
      }
    },

    mounted(){
      this.listarClientes()
    },

    computed: {
      filteredClientes(){
        let valores = [];
        valores = this.clientes.filter((cliente) => {
          return (
            cliente.NomeCliente.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
            cliente.ApelidoCliente.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
            cliente.TipoOrigem.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
            cliente.NomeRepresentante.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
            cliente.MunicipioCliente.toLowerCase().indexOf(this.search.toLowerCase()) > -1
          )
        });

        valores = valores.filter((cliente) => {
          if(this.selectedFilterSelect === "Nenhum") {return cliente;}
          return cliente.StatusCliente === this.selectedFilterSelect;
        });

        return valores;
      }
    },

    methods:{
      listarClientes(){
          Cliente.listar().then(res => {
          console.log(res.data)
          this.clientes = res.data
        })
      }
    }
}
</script>

<style scoped>
  #search-clientes{
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