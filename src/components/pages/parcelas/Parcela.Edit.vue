<template>
    <main>
        <div class="container">
            <div class="row" id="breadcumb">
                <div class="col-6">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a aria-current="page">Homepage</a></li>
                            <li class="breadcrumb-item"><a aria-current="page">Parcelas</a></li>
                            <li class="breadcrumb-item active"><a aria-current="page">Editar</a></li>
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
                                <label>Nome Representante</label>
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
                                <label>Data de Cancelamento</label>
                                <input disabled type="text" class="form-control" v-mask="'##/##/####'" placeholder="dd/mm/aaaa" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="contratos.DataCancelamento">
                            </div>
                        </div>
                    </div>
                    <div class="row">
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
                        <div class="col-2">
                            <label>Num Parcela</label>
                            <input type="text" disabled class="form-control" v-model="parcela.NumParcela"/>
                        </div>
                        <div class="col-2">
                            <label>Data Prevista</label>
                            <input type="text" v-mask="'##/##/####'" class="form-control" :class="{'fail-error' : $v.parcela.DataPrevista.$error}" v-model="parcela.DataPrevista" @change="$v.parcela.DataPrevista.$touch()"/>
                            <p id="error-form" v-if="$v.parcela.DataPrevista.$error">* Valor nulo ou inválido</p>
                        </div>
                        <div class="col-2">
                            <label>Valor Parcela</label>
                            <input type="text" class="form-control" :class="{'fail-error' : $v.parcela.ValorParcela.$error}" v-model="parcela.ValorParcela" @change="$v.parcela.ValorParcela.$touch()"/>
                            <p id="error-form" v-if="$v.parcela.ValorParcela.$error">* Valor nulo ou inválido</p>
                        </div>
                        <div class="col-2">
                            <label>Gerado em</label>
                            <input disabled type="text" class="form-control" v-model="parcela.createdAt"/>
                        </div>
                        <div class="col-2">
                            <label>Alterado em</label>
                            <input disabled type="text" class="form-control" v-model="parcela.updatedAt"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <button id="button-delete" @click="excluirParcelas()" class="btn btn-primary">Excluir</button>
                        </div>
                        <div class="col-3">
                            <button id="button-save" @click="salvarParcelas()" class="btn btn-primary">Atualizar</button>
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
                <b-tab title="Recebimentos">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Pagamento</th>
                                <th scope="col">Valor</th>
                                <th scope="col">Tipo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="recebimento of parcela.FK_Recebimentos_Parcelas" :key="recebimento.IdRecebimento">
                                <td>{{recebimento.DataPagamento}}</td>
                                <td>{{recebimento.ValorPago}}</td>
                                <td>{{recebimento.TipoPagamento}}</td>
                            </tr>
                        </tbody>
                    </table>
                </b-tab>
            </b-tabs>
        </div>
    </main>
</template>

<script>
import Parcela from '@/services/parcelas'
import Contrato from '@/services/contratos'
import Cliente from '@/services/clientes'
import moment from "moment";
import { required, decimal, minLength } from "vuelidate/lib/validators";

export default {
    name: 'ParcelaEdit',
    
    data(){
      return {
        parcela: {
          IdContrato: '',
          NumParcela: '',
          DataPrevista: '',
          ValorParcela: '',
          createdAt: '',
          updatedAt: '',
          FK_Parcelas_Contratos: '',
          FK_Recebimentos_Parcelas: ''
        },
        errors: [],
        parcelas: [],
        contratos: [],
        clientes: [],
        recebimentos: []
      }
    },
    validations:{
        parcela: {
            DataPrevista: { required, minLength: minLength(10) },
            ValorParcela: { required, decimal },
        }   
    },

    mounted(){
      this.listarParcelas()
    },

    methods:{
        listarParcelas(){
            Parcela.listarPorId(this.$route.params.id).then(res => {
            console.log(res.data)
            this.parcela = res.data
            this.parcela.DataPrevista = moment(this.parcela.DataPrevista, "YYYY-MM-DD").format("DDMMYYYY");
            this.parcela.createdAt = moment(this.parcela.createdAt, "YYYY-MM-DD hh:mm:ss").format("DD/MM/YYYY hh:mm");
            this.parcela.updatedAt = moment(this.parcela.updatedAt, "YYYY-MM-DD hh:mm:ss").format("DD/MM/YYYY hh:mm");
            this.listarContrato(this.parcela.IdContrato)
            })
        },
        listarContrato(Id){
            Contrato.listarPorId(Id).then(res => {
            console.log(res.data)
            this.contratos = res.data
            this.contratos.VigenciaInicial = moment(this.contratos.VigenciaInicial, "YYYY-MM-DD").format("DDMMYYYY");
            this.contratos.createdAt = moment(this.contratos.createdAt, "YYYY-MM-DD hh:mm:ss").format("DD/MM/YYYY hh:mm");
            this.contratos.updatedAt = moment(this.contratos.updatedAt, "YYYY-MM-DD hh:mm:ss").format("DD/MM/YYYY hh:mm");
            this.contratos.StatusPacote_Site = JSON.parse(this.contratos.StatusPacote_Site)
            this.contratos.StatusPacote_Lista = JSON.parse(this.contratos.StatusPacote_Lista)
            this.contratos.StatusPacote_RedeSocial = JSON.parse(this.contratos.StatusPacote_RedeSocial)
            this.contratos.DataCancelamento = moment(this.contratos.DataCancelamento, "YYYY-MM-DD").format("DD/MM/YYYY");
            this.listarCliente(this.contratos.IdCliente)
            })
        },
        listarCliente(Id){
            Cliente.listarPorId(Id).then(res => {
            console.log(res.data)
            this.clientes = res.data
            this.clientes.DataNascimento = moment(this.clientes.DataNascimento, "YYYY-MM-DD").format("DDMMYYYY");
            this.clientes.createdAt = moment(this.clientes.createdAt, "YYYY-MM-DD hh:mm:ss").format("DD/MM/YYYY hh:mm");
            this.clientes.updatedAt = moment(this.clientes.updatedAt, "YYYY-MM-DD hh:mm:ss").format("DD/MM/YYYY hh:mm");
            })
        },
        salvarParcelas(){
            if(this.$v.$invalid == true) {
                this.$v.$touch();
                }
            else {
                var now = moment().format('YYYY-MM-DD hh:mm:ss')
                this.parcela.updatedAt = now
                this.parcela.createdAt = moment(this.parcela.createdAt, "DD/MM/YYYY hh:mm").format("YYYY-MM-DD hh:mm:ss");
                this.parcela.DataPrevista = moment(this.parcela.DataPrevista, "DDMMYYYY").format("YYYY-MM-DD");
                Parcela.atualizar(this.parcela).then(res => {
                this.res = res
                alert('Atualizado com sucesso!')
                this.errors = []
                }).catch( e => {
                    this.errors = e.response.data.errors
                }) 

                this.$router.push({ path: '/parcelas' })
            }      
        },
        excluirParcelas(){
            Parcela.apagar(this.parcela.IdParcela)
            alert('Parcela excluida com sucesso!')
            this.$router.push({ path: '/parcelas' })
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

    #error-form{
        color: red;
        font-size: 12px;
    }

    .fail-error{
        border: 1px solid red;
    }    
</style>