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
<!-- 
              <b-table outlined hover label-sort-desc="" label-sort-asc="" label-sort-clear="" :items="filteredClientes" :fields="ColunasTabelaView">
                <template v-slot:cell(NomeCliente)="data">
                  <router-link :to="`/clientes/editar/' + ${data.value}`">{{ data.value }}</router-link>
                </template>
              </b-table>
--> 
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Cliente</th>
                    <th scope="col">Apelido</th>
                    <th scope="col">Origem</th>
                    <th scope="col">Documento</th>
                    <th scope="col">Representante</th>
                    <th scope="col">Telefone</th>
                    <th scope="col">Celular</th>
                    <th scope="col">Município</th>
                    <th scope="col">Status</th>
                    <th scope="col">Ação</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="cliente of filteredClientes" :key="cliente.IdCliente">
                    <td>{{cliente.NomeCliente}}</td>
                    <td>{{cliente.ApelidoCliente}}</td>
                    <td>{{cliente.TipoOrigem}}</td>
                    <td>{{cliente.NumDocumento}}</td>
                    <td>{{cliente.NomeRepresentante}}</td>
                    <td>{{cliente.TelefoneRepresentante}}</td>
                    <td>{{cliente.CelularRepresentante}}</td>
                    <td>{{cliente.MunicipioCliente}}</td>
                    <td>{{cliente.StatusCliente}}</td>
                    <td>
                      <router-link :to="'/clientes/editar/' + cliente.IdCliente"><button class="btn btn-link"><b-icon id="search-icon" icon="search"></b-icon></button></router-link>
                    </td>
                  </tr>
                </tbody>
              </table>
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

</style>