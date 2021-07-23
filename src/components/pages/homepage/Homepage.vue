<template>
    <main>
        <div class="container">
            <div class="row" id="breadcumb">
                <div class="col-6">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item active"><a aria-current="page">Homepage</a></li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div class="row">
                <div id="cards-kpi" class="col-12">
                    <div class="shadow-sm p-3 mb-5 bg-white rounded">
                        <b> Parcelas em atraso (+7 dias após vencimento)</b>
                        <table class="table table-striped">
                            <thead>
                            <tr>
                                <th scope="col">Cliente</th>
                                <th scope="col">Contrato</th>
                                <th scope="col">Parcela</th>
                                <th scope="col">Data</th>
                                <th scope="col">Valor</th>
                                <th scope="col">Pago</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="parcela of parcelas_atrasos" :key="parcela.IdParcela">
                                <td>{{parcela.NomeCliente}}</td>
                                <td>{{parcela.CodContrato}}</td>
                                <td>{{parcela.NumParcela}}</td>
                                <td>{{parcela.DataPrevista}}</td>
                                <td>{{parcela.ValorParcela}}</td>
                                <td>{{parcela.TotalValorPago}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="row">
                <div id="cards-kpi" class="col-12">
                    <div class="shadow-sm p-3 mb-5 bg-white rounded">
                        <b> Parcelas a vencer (próximos 15 dias) </b>
                        <table class="table table-striped">
                            <thead>
                            <tr>
                                <th scope="col">Cliente</th>
                                <th scope="col">Contrato</th>
                                <th scope="col">Parcela</th>
                                <th scope="col">Data</th>
                                <th scope="col">Valor</th>
                                <th scope="col">Pago</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="parcela of parcelas_proximos_vencimentos" :key="parcela.IdParcela">
                                <td>{{parcela.NomeCliente}}</td>
                                <td>{{parcela.CodContrato}}</td>
                                <td>{{parcela.NumParcela}}</td>
                                <td>{{parcela.DataPrevista}}</td>
                                <td>{{parcela.ValorParcela}}</td>
                                <td>{{parcela.TotalValorPago}}</td>
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
import Parcela from '@/services/parcelas';

export default {
    name: 'Homepage',
    data(){
      return {
          parcelas_atrasos: [],
          parcelas_proximos_vencimentos: []
      }
    },

    mounted(){
        this.listarAtrasos()
        this.listarProximosVencimento()
    },

    methods:{
      listarAtrasos(){
          Parcela.listarAtrasos().then(res => {
          console.log(res.data)
          this.parcelas_atrasos = res.data
        })
      },
      listarProximosVencimento(){
          Parcela.listarProximosVencimento().then(res => {
          console.log(res.data)
          this.parcelas_proximos_vencimentos = res.data
        })
      }

    }
}

</script>

<style scoped>

    #cards-kpi{
        margin-top: 30px;
    }

</style>