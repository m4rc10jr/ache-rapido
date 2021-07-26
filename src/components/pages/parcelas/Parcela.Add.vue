<template>
    <main>
        <div class="container">
            <div class="row" id="breadcumb">
                <div class="col-6">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a aria-current="page">Homepage</a></li>
                            <li class="breadcrumb-item"><a aria-current="page">Parcelas</a></li>
                            <li class="breadcrumb-item active"><a aria-current="page">Adicionar</a></li>
                        </ol>
                    </nav>
                </div>
            </div>
            <b-tabs content-class="mt-3">
                <b-tab title="Cliente">
                    <div class="row">
                        <div class="col-2">
                            <label>Origem do Cliente</label>
                            <select disabled class="form-select" aria-label="Default select example" v-model="clientes.TipoOrigem">
                                <option value="" disabled selected>Nenhum</option>
                                <option value="Indicação"> Indicação </option>
                                <option value="Venda corrida"> Venda corrida </option>
                                <option value="Desconhecida"> Desconhecida </option>
                            </select>
                        </div>
                        <div class="col-2">
                            <label>Tipo de Cliente</label>
                            <select disabled class="form-select" aria-label="Default select example" v-model="clientes.TipoCliente">
                                <option value="" disabled selected>Nenhum</option>
                                <option value="Pessoa física"> Pessoa física </option>
                                <option value="Pessoa jurídica"> Pessoa jurídica </option>
                            </select>
                        </div>
                        <div class="col-2">
                            <label>Tipo de Documento</label>
                            <select disabled class="form-select" aria-label="Default select example" v-model="clientes.TipoDocumento">
                                <option value="" disabled selected>Nenhum</option>
                                <option value="RG"> RG </option>
                                <option value="CPF"> CPF </option>
                                <option value="CNPJ"> CNPJ </option>
                            </select>
                        </div>
                        <div class="col-2">
                            <div class="form-group mb-2">
                                <label>Documento</label>
                                <input disabled type="text" class="form-control" placeholder="Somente números" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="clientes.NumDocumento">
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="form-group mb-3">
                                <label>Nome do Cliente / Razão Social</label>
                                <input disabled type="text" class="form-control" placeholder="Digite um nome" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="clientes.NomeCliente">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <div class="form-group mb-3">
                                <label>Apelido Cliente / Nome Fantasia </label>
                                <input disabled type="text" class="form-control" placeholder="Digite um apelido" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="clientes.ApelidoCliente">
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="form-group mb-3">
                                <label>Contato Principal</label>
                                <input disabled type="text" class="form-control" placeholder="Digite um Representante" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="clientes.NomeRepresentante">
                            </div>
                        </div>
                        <div class="col-2">
                            <label>Sexo</label>
                            <select disabled class="form-select" aria-label="Default select example" v-model="clientes.SexoRepresentante">
                                <option value="" disabled selected>Nenhum</option>
                                <option value="Masculino"> Masculino </option>
                                <option value="Feminino"> Feminino </option>
                            </select>
                        </div>
                        <div class="col-2">
                            <div class="form-group mb-3">
                                <label>Data de Nascimento</label>
                                <input disabled type="text" class="form-control" v-mask="'##/##/####'" placeholder="dd/mm/aaaa" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="clientes.DataNascimento">
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="form-group mb-3">
                                <label>Telefone Fixo</label>
                                <input disabled type="text" class="form-control" v-mask="'(###) ####-####'" placeholder="(000) 0000-0000" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="clientes.TelefoneRepresentante">
                            </div>
                        </div>                
                    </div>
                    <div class="row">
                        <div class="col-2">
                            <div class="form-group mb-3">
                                <label>Celular</label>
                                <input disabled type="text" class="form-control"  v-mask="'(###) #####-####'" placeholder="(000) 00000-0000" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="clientes.CelularRepresentante">
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="form-group mb-3">
                                <label>Endereço do Cliente</label>
                                <input disabled type="text" class="form-control" placeholder="Digite o endereço completo" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="clientes.EnderecoCliente">
                            </div>
                        </div>
                        <div class="col-2">
                            <label>Município</label>
                            <select disabled class="form-select" aria-label="Default select example" v-model="clientes.MunicipioCliente">
                                <option value="" disabled selected>Nenhum</option>
                                <option value="Catalão"> Catalão </option>
                                <option value="Formosa"> Formosa </option>
                                <option value="Jataí"> Jataí </option>
                            </select>
                        </div>
                        <div class="col-2">
                            <div class="form-group mb-3">
                                <label>Registrado em</label>
                                <input type="text" disabled class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="clientes.createdAt">
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="form-group mb-3">
                                <label>Alterado em</label>
                                <input type="text" disabled class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="clientes.updatedAt">
                            </div>
                        </div>
                    </div>
                </b-tab>
                <b-tab title="Contrato">
                    <div class="row">
                        <div class="col-4">
                            <label>Pacote Contratado</label>
                            <div>
                                <div class="form-check form-check-inline">
                                    <input disabled class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio1" value="option1" v-model="contratos.StatusPacote_Lista">
                                    <label class="form-check-label" for="inlineRadio1">Lista</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input disabled class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="option2" v-model="contratos.StatusPacote_Site">
                                    <label class="form-check-label" for="inlineRadio2">Site</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input disabled class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio3" value="option3" v-model="contratos.StatusPacote_RedeSocial">
                                    <label class="form-check-label" for="inlineRadio3">Rede Social</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="form-group mb-2">
                                <label>Código Contrato</label>
                                <input disabled type="text" class="form-control" placeholder="Código físico" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="contratos.CodContrato">
                            </div>
                        </div>
                        <div class="col-2">
                            <label>Vendedor</label>
                            <select disabled class="form-select" aria-label="Default select example" v-model="contratos.IdVendedor">
                                <option value="" disabled selected>Nenhum</option>
                                <option value="1"> Guilherme </option>
                                <option value="2"> Luizemar </option>
                                <option value="3"> Desconhecido </option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-2">
                            <div class="form-group mb-3">
                                <label>Vigência Inicial</label>
                                <input disabled id="VigenciaInicial" type="text" class="form-control" v-mask="'##/##/####'" placeholder="dd/mm/aaaa" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="contratos.VigenciaInicial">
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="form-group mb-3">
                                <label>Qtde Meses</label>
                                <input disabled id="QtdeMeses" type="number" class="form-control" placeholder="0" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="contratos.QtdeMeses">
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="form-group mb-3">
                                <label>Qtde Parcelas</label>
                                <input disabled id="QtdeParcelas" type="number" class="form-control" placeholder="0" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="contratos.QtdeParcelas">
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="form-group mb-3">
                                <label>Valor Contrato</label>
                                <input disabled id="ValorContrato" type="text" class="form-control" placeholder="R$" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="contratos.ValorContrato">
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="form-group mb-3">
                                <label>Registrado em</label>
                                <input disabled type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="contratos.createdAt">
                            </div>
                        </div> 
                        <div class="col-2">
                            <div class="form-group mb-3">
                                <label>Alterado em</label>
                                <input disabled type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="contratos.updatedAt">
                            </div>
                        </div>               
                    </div>
                </b-tab>
                <b-tab title="Parcela" active>
                    <div class="row">
                        <div class="col-12">    
                            <button v-if="contratos.FK_Parcelas_Contratos && contratos.FK_Parcelas_Contratos.length == 0" type="button" id="button-gerar-parcelas" class="btn btn-primary" @click="gerarParcelasPadrao">Gerar Automático</button>
                            <button type="button" id="button-gerar-parcelas" class="btn btn-primary" @click="adicionarParcelaManual">Gerar +1</button>
                            <button type="button" id="button-gerar-parcelas" class="btn btn-primary" @click="removerTodasParcelas">Apagar todos</button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-2">
                            <label>Parcela</label>
                            <div v-for="(parcela, index) of id_parcelas" :key="index">
                                <input type="text" disabled class="form-control" v-model="id_parcelas[index]"/>
                            </div>
                        </div>
                        <div class="col-2">
                            <label>Data</label>
                            <div v-for="(parcela, index) of data_parcelas" :key="index">
                                <input required type="text" v-mask="'##/##/####'" class="form-control" v-model="data_parcelas[index]"/>
                            </div>
                        </div>
                        <div class="col-2">
                            <label>Valor</label>
                            <div v-for="(parcela, index) of valor_parcelas" :key="index">
                                <input required type="text" class="form-control" v-model="valor_parcelas[index]"/>
                            </div>
                        </div>
                        <div class="col-4">
                            <label>Remover</label>
                            <div v-for="(parcela, index) of id_parcelas" :key="index">
                            <button type="button" id="button-apagar-manual" class="btn btn-primary" @click.prevent="removerParcelaManual(index)"> &times;</button>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <button id="button-save" @click="salvarParcela()" class="btn btn-primary">Criar</button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <ul>
                                <li v-for="(erro, index) of errors" :key="index">
                                campo <b>{{ erro.field }}</b> - {{ erro.defaultMessage }}
                                </li>
                            </ul>
                        </div>
                    </div>                    
                </b-tab>
                <b-tab title="Recebimentos" disabled>
                </b-tab>
            </b-tabs>
        </div>
    </main>
</template>

<script>
import Parcela from '@/services/parcelas'
import Contrato from '@/services/contratos'
import Cliente from '@/services/clientes'
import moment from 'moment';

export default {
    name: 'ParcelaAdd',

    data(){
      return {
        parcela: {
          NumParcela: '',
          DataPrevista: '',
          ValorParcela: '',
          IdContrato: '',
          createdAt: '',
          updatedAt: ''
        },
        contratos: [],
        clientes: [],
        errors: [],
        id_parcelas: [],
        valor_parcelas: [],
        data_parcelas: []
      }
    },
    mounted(){
        this.listarContrato()
    },

    methods:{
        listarContrato(){
            Contrato.listarPorId(this.$router.currentRoute.params.id).then(res => {
            console.log(res.data)
            this.contratos = res.data
            this.contratos.VigenciaInicial = moment(this.contratos.VigenciaInicial, "YYYY-MM-DD").format("DDMMYYYY");
            this.contratos.createdAt = moment(this.contratos.createdAt, "YYYY-MM-DD hh:mm:ss").format("DD/MM/YYYY hh:mm");
            this.contratos.updatedAt = moment(this.contratos.updatedAt, "YYYY-MM-DD hh:mm:ss").format("DD/MM/YYYY hh:mm");
            this.contratos.StatusPacote_Site = JSON.parse(this.contratos.StatusPacote_Site)
            this.contratos.StatusPacote_Lista = JSON.parse(this.contratos.StatusPacote_Lista)
            this.contratos.StatusPacote_RedeSocial = JSON.parse(this.contratos.StatusPacote_RedeSocial)
            this.listarCliente()
            })
        },
        listarCliente(){
            Cliente.listarPorId(this.contratos.IdCliente).then(res => {
                console.log(res.data)
                this.clientes = res.data
                this.clientes.createdAt = moment(this.clientes.createdAt, "YYYY-MM-DD hh:mm:ss").format("DD/MM/YYYY hh:mm");
                this.clientes.updatedAt = moment(this.clientes.updatedAt, "YYYY-MM-DD hh:mm:ss").format("DD/MM/YYYY hh:mm");
            })
        },
        salvarParcela(){

            var now = moment().format('YYYY-MM-DD hh:mm:ss')

            for (var i = 0; i < this.id_parcelas.length; i++){
                this.parcela.NumParcela = this.id_parcelas[i];
                this.parcela.DataPrevista = this.data_parcelas[i];
                this.parcela.ValorParcela = this.valor_parcelas[i];
                
                this.parcela.IdContrato = parseInt(this.$router.currentRoute.params.id)
                this.parcela.createdAt = now
                this.parcela.updatedAt = now

                this.parcela.NumParcela = parseFloat(this.parcela.NumParcela)
                this.parcela.ValorParcela = parseFloat(this.parcela.ValorParcela)
                this.parcela.DataPrevista = moment(this.parcela.DataPrevista, "DD/MM/YYYY").format("YYYY-MM-DD");

                Parcela.salvar(this.parcela).then(res => {
                    this.res = res
                    this.parcela = {}
                    this.errors = []
                }).catch( e => {
                        this.errors = e.response.data.errors
                })
            }
            alert('Parcelas cadastradas com sucesso!') 
            this.$router.push({ path: '/parcelas' })
        },
        adicionarParcelaManual(){
            if(this.id_parcelas.length == 0){
                this.id_parcelas.push(this.contratos.FK_Parcelas_Contratos.length + 1)
            } else{
                this.id_parcelas.push((this.id_parcelas[this.id_parcelas.length - 1])+1)
            }
            
            this.valor_parcelas.push('')
            this.data_parcelas.push('')
        },
        removerParcelaManual(index){
            this.id_parcelas.splice(index, 1)
            this.valor_parcelas.splice(index, 1)
            this.data_parcelas.splice(index, 1)
        },
        removerTodasParcelas(){
            this.id_parcelas = [];
            this.valor_parcelas = [];
            this.data_parcelas = [];
            this.$v.$reset();
        },
        gerarParcelasPadrao() {
            if(
                document.getElementById("VigenciaInicial").value.length == 0 ||
                document.getElementById("QtdeMeses").value.length == 0 ||
                document.getElementById("QtdeParcelas").value.length == 0 ||
                document.getElementById("ValorContrato").value.length == 0 || 
                parseInt(this.contratos.VigenciaInicial) == 0 ||
                parseInt(this.contratos.QtdeMeses) == 0 ||
                parseInt(this.contratos.QtdeParcelas) == 0 ||
                parseInt(this.contratos.ValorContrato) == 0
                ){
                    alert('Os campos: Vigencia Inicial, Qtde Meses, Qtde Parcelas e Valor Contrato não podem ser nulos ou zero!')
            } else {
                var QtdeMeses = parseInt(this.contratos.QtdeMeses)
                var QtdeParcelas = parseInt(this.contratos.QtdeParcelas)
                var ValorContrato = parseFloat(this.contratos.ValorContrato)
                var ValorParcela = Math.round((ValorContrato / QtdeParcelas), 1)
                var DiasPorParcela = ((QtdeMeses * 30) / QtdeParcelas)
                
                for(var i = 0; i < QtdeParcelas; i++){
                    
                    this.id_parcelas.push(this.id_parcelas.length+1)
                    this.valor_parcelas.push(ValorParcela)

                    if(i == 0){
                        var x = moment(this.contratos.VigenciaInicial, 'DDMMYYYY').add(DiasPorParcela, 'days').format("DD/MM/YYYY")
                        this.data_parcelas.push(x)
                    } else {
                        var y = moment(this.data_parcelas[i-1], 'DD/MM/YYYY').add(DiasPorParcela, 'days').format("DD/MM/YYYY")
                        this.data_parcelas.push(y)
                    }
                }
            } 
        }
    }
}
</script>

<style scoped>

    main{
        background-color: var(--color-background);
    }

    form{
        margin-top: 20px;
    }

    #button-save{
        right: 50px;
        position: absolute;
        background-color: var(--color-background-buttons);
        border: none;
        width: 120px;
    }

    #button-gerar-parcelas{
        background-color: #696969;
        border: none;
        margin-bottom: 30px;
        margin-left: 5px;
    }
    #button-apagar-manual{
        background-color: #D0D0D0;
        border-color: #D0D0D0;
    }

    #error-form{
        color: red;
        font-size: 12px;
    }

    .fail-error{
        border: 1px solid red;
    } 
</style>