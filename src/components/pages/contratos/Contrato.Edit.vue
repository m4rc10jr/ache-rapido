<template>
    <main>
        <div class="container">
            <div class="row" id="breadcumb">
                <div class="col-6">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a aria-current="page">Homepage</a></li>
                            <li class="breadcrumb-item"><a aria-current="page">Contratos</a></li>
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
                            <select disabled class="form-select" aria-label="Default select example" v-model="contrato.FK_Contratos_Clientes.TipoOrigem">
                                <option value="" disabled selected>Nenhum</option>
                                <option value="Indicação"> Indicação </option>
                                <option value="Venda corrida"> Venda corrida </option>
                                <option value="Desconhecida"> Desconhecida </option>
                            </select>
                        </div>
                        <div class="col-2">
                            <label>Tipo de Cliente</label>
                            <select disabled class="form-select" aria-label="Default select example" v-model="contrato.FK_Contratos_Clientes.TipoCliente">
                                <option value="" disabled selected>Nenhum</option>
                                <option value="Pessoa física"> Pessoa física </option>
                                <option value="Pessoa jurídica"> Pessoa jurídica </option>
                            </select>
                        </div>
                        <div class="col-2">
                            <label>Tipo de Documento</label>
                            <select disabled class="form-select" aria-label="Default select example" v-model="contrato.FK_Contratos_Clientes.TipoDocumento">
                                <option value="" disabled selected>Nenhum</option>
                                <option value="RG"> RG </option>
                                <option value="CPF"> CPF </option>
                                <option value="CNPJ"> CNPJ </option>
                            </select>
                        </div>
                        <div class="col-2">
                            <div class="form-group mb-2">
                                <label>Documento</label>
                                <input disabled type="text" class="form-control" placeholder="Somente números" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="contrato.FK_Contratos_Clientes.NumDocumento">
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="form-group mb-3">
                                <label>Nome do Cliente / Razão Social</label>
                                <input disabled type="text" class="form-control" placeholder="Digite um nome" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="contrato.FK_Contratos_Clientes.NomeCliente">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <div class="form-group mb-3">
                                <label>Apelido Cliente / Nome Fantasia </label>
                                <input disabled type="text" class="form-control" placeholder="Digite um apelido" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="contrato.FK_Contratos_Clientes.ApelidoCliente">
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="form-group mb-3">
                                <label>Contato Principal</label>
                                <input disabled type="text" class="form-control" placeholder="Digite um Representante" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="contrato.FK_Contratos_Clientes.NomeRepresentante">
                            </div>
                        </div>
                        <div class="col-2">
                            <label>Sexo</label>
                            <select disabled class="form-select" aria-label="Default select example" v-model="contrato.FK_Contratos_Clientes.SexoRepresentante">
                                <option value="" disabled selected>Nenhum</option>
                                <option value="Masculino"> Masculino </option>
                                <option value="Feminino"> Feminino </option>
                            </select>
                        </div>
                        <div class="col-2">
                            <div class="form-group mb-3">
                                <label>Data de Nascimento</label>
                                <input disabled type="text" class="form-control" v-mask="'##/##/####'" placeholder="dd/mm/aaaa" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="contrato.FK_Contratos_Clientes.DataNascimento">
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="form-group mb-3">
                                <label>Telefone Fixo</label>
                                <input disabled type="text" class="form-control" v-mask="'(###) ####-####'" placeholder="(000) 0000-0000" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="contrato.FK_Contratos_Clientes.TelefoneRepresentante">
                            </div>
                        </div>                
                    </div>
                    <div class="row">
                        <div class="col-2">
                            <div class="form-group mb-3">
                                <label>Celular</label>
                                <input disabled type="text" class="form-control"  v-mask="'(###) #####-####'" placeholder="(000) 00000-0000" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="contrato.FK_Contratos_Clientes.CelularRepresentante">
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="form-group mb-3">
                                <label>Endereço do Cliente</label>
                                <input disabled type="text" class="form-control" placeholder="Digite o endereço completo" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="contrato.FK_Contratos_Clientes.EnderecoCliente">
                            </div>
                        </div>
                        <div class="col-2">
                            <label>Município</label>
                            <select disabled class="form-select" aria-label="Default select example" v-model="contrato.FK_Contratos_Clientes.MunicipioCliente">
                                <option value="" disabled selected>Nenhum</option>
                                <option value="Catalão"> Catalão </option>
                                <option value="Formosa"> Formosa </option>
                                <option value="Jataí"> Jataí </option>
                            </select>
                        </div>
                        <div class="col-2">
                            <div class="form-group mb-3">
                                <label>Registrado em</label>
                                <input disabled type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="contrato.FK_Contratos_Clientes.createdAt">
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="form-group mb-3">
                                <label>Alterado em</label>
                                <input disabled type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="contrato.FK_Contratos_Clientes.updatedAt">
                            </div>
                        </div>
                    </div>
                </b-tab>
                <b-tab title="Contrato" active>
                    <div class="row">
                        <div class="col-4">
                            <label>Pacote Contratado</label>
                            <div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" :class="{'fail-error' : $v.StatusPacote.$error}" type="checkbox" name="inlineRadioOptions" id="inlineRadio1" value="option1" v-model="contrato.StatusPacote_Lista" @change="$v.StatusPacote.$touch()">
                                    <label class="form-check-label" for="inlineRadio1">Lista</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" :class="{'fail-error' : $v.StatusPacote.$error}" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="option2" v-model="contrato.StatusPacote_Site" @change="$v.StatusPacote.$touch()">
                                    <label class="form-check-label" for="inlineRadio2">Site</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" :class="{'fail-error' : $v.StatusPacote.$error}" type="checkbox" name="inlineRadioOptions" id="inlineRadio3" value="option3" v-model="contrato.StatusPacote_RedeSocial" @change="$v.StatusPacote.$touch()">
                                    <label class="form-check-label" for="inlineRadio3">Rede Social</label>
                                </div>
                            </div>
                        <p id="error-form" v-if="$v.StatusPacote.$error">* Valor nulo ou inválido</p>
                        </div>
                        <div class="col-3">
                            <div class="form-group mb-2">
                                <label>Código Contrato</label>
                                <input type="text" class="form-control" :class="{'fail-error' : $v.contrato.CodContrato.$error}" placeholder="Código físico" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="contrato.CodContrato" @change="$v.contrato.CodContrato.$touch()">
                                <p id="error-form" v-if="$v.contrato.CodContrato.$error">* Valor nulo ou inválido</p>
                            </div>
                        </div>
                        <div class="col-2">
                            <label>Vendedor</label>
                            <select class="form-select" :class="{'fail-error' : $v.contrato.IdVendedor.$error}" aria-label="Default select example" v-model="contrato.IdVendedor" @change="$v.contrato.IdVendedor.$touch()">
                                <option value="" disabled selected>Nenhum</option>
                                <option value="1"> Guilherme </option>
                                <option value="2"> Luizemar </option>
                                <option value="3"> Desconhecido </option>
                            </select>
                            <p id="error-form" v-if="$v.contrato.IdVendedor.$error">* Valor nulo ou inválido</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-2">
                            <div class="form-group mb-3">
                                <label>Vigência Inicial</label>
                                <input id="VigenciaInicial" type="text" class="form-control" :class="{'fail-error' : $v.contrato.VigenciaInicial.$error}" v-mask="'##/##/####'" placeholder="dd/mm/aaaa" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="contrato.VigenciaInicial" @change="$v.contrato.VigenciaInicial.$touch()">
                                <p id="error-form" v-if="$v.contrato.VigenciaInicial.$error">* Valor nulo ou inválido</p>
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="form-group mb-3">
                                <label>Qtde Meses</label>
                                <input id="QtdeMeses" type="number" class="form-control" :class="{'fail-error' : $v.contrato.QtdeMeses.$error}" placeholder="0" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="contrato.QtdeMeses" @change="$v.contrato.QtdeMeses.$touch()">
                                <p id="error-form" v-if="$v.contrato.QtdeMeses.$error">* Valor nulo ou inválido</p>
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="form-group mb-3">
                                <label>Qtde Parcelas</label>
                                <input id="QtdeParcelas" type="number" class="form-control" :class="{'fail-error' : $v.contrato.QtdeParcelas.$error}" placeholder="0" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="contrato.QtdeParcelas" @change="$v.contrato.QtdeParcelas.$touch()">
                                <p id="error-form" v-if="$v.contrato.QtdeParcelas.$error">* Valor nulo ou inválido</p>
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="form-group mb-3">
                                <label>Valor Contrato</label>
                                <input id="ValorContrato" type="text" class="form-control" :class="{'fail-error' : $v.contrato.ValorContrato.$error}" placeholder="R$" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="contrato.ValorContrato" @change="$v.contrato.ValorContrato.$touch()">
                                <p id="error-form" v-if="$v.contrato.ValorContrato.$error">* Valor nulo ou inválido</p>
                            </div>
                        </div>              
                        <div class="col-2">
                            <div class="form-group mb-3">
                                <label>Registrado em</label>
                                <input disabled type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="contrato.createdAt">
                            </div>
                        </div> 
                        <div class="col-2">
                            <div class="form-group mb-3">
                                <label>Alterado em</label>
                                <input disabled type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="contrato.updatedAt">
                            </div>
                        </div>               
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <button id="button-save" @click="salvarContrato()" class="btn btn-primary">Atualizar</button>
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
                <b-tab title="Parcelas">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Parcela</th>
                                <th scope="col">Data Prevista</th>
                                <th scope="col">Valor Parcela</th>
                                <th scope="col">Valor Pago</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="parcela of parcelas" :key="parcela.IdParcela">
                                <td>{{parcela.NumParcela}}</td>
                                <td>{{parcela.DataPrevista}}</td>
                                <td>{{parcela.ValorParcela}}</td>
                                <td>{{parcela.TotalValorPago}}</td>
                                <td>{{parcela.StatusPagamento}}</td>
                            </tr>
                        </tbody>
                    </table>
                </b-tab>
                <b-tab title="Recebimentos">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Parcela</th>
                                <th scope="col">Pagamento</th>
                                <th scope="col">Valor</th>
                                <th scope="col">Tipo</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="recebimento of recebimentos" :key="recebimento.IdRecebimento">
                                <td>{{recebimento.NumParcela}}</td>
                                <td>{{recebimento.DataPagamento}}</td>
                                <td>{{recebimento.ValorPago}}</td>
                                <td>{{recebimento.TipoPagamento}}</td>
                                <td>{{recebimento.StatusPagamento}}</td>
                            </tr>
                        </tbody>
                    </table>
                </b-tab>
            </b-tabs>  
        </div>
    </main>
</template>

<script>

import Contrato from '@/services/contratos'
import Recebimento from '@/services/recebimentos'
import Parcela from '@/services/parcelas'
import moment from 'moment';
import { required, minLength, integer, minValue, decimal, requiredIf } from "vuelidate/lib/validators";

export default {
    name: 'ContratoEdit',
    
    data(){
      return {
        contrato: {
          IdContrato: '',
          IdCliente: '',
          CodContrato: '',
          IdVendedor: '',
          VigenciaInicial: '',
          QtdeMeses: '',
          QtdeParcelas: '',
          ValorContrato: '',
          StatusPacote_Site: '',
          StatusPacote_Lista: '',
          StatusPacote_RedeSocial: '',
          FK_Contratos_Clientes: '',
          FK_Contratos_Vendedores: '',
          FK_Parcelas_Contratos: '',
          FK_Recebimentos_Parcelas: '',
          CreatedAt: '',
          UpdatedAt: '',
          DeletedAt: ''
        },
        errors: [],
        recebimentos: [],
        parcelas: []
      }
    },
    validations:{
        StatusPacote: { required: requiredIf(function(){return (!this.contrato.StatusPacote_Site && !this.contrato.StatusPacote_Lista && !this.contrato.StatusPacote_RedeSocial)}) },
        contrato: {
            CodContrato: { required },
            IdVendedor: { required, integer },
            VigenciaInicial: { required, minLength: minLength(10) },
            QtdeMeses: { required, minValue: minValue(1), integer },
            QtdeParcelas: { required, minValue: minValue(1), integer },
            ValorContrato: { required, decimal }
        }   
    },

    mounted(){
        this.listarContratos()
    },
    methods:{
        listarContratos(){
            Contrato.listarPorId(this.$route.params.id).then(res => {
            console.log(res.data)
            this.contrato = res.data
            this.contrato.VigenciaInicial = moment(this.contrato.VigenciaInicial, "YYYY-MM-DD").format("DDMMYYYY");
            this.contrato.createdAt = moment(this.contrato.createdAt, "YYYY-MM-DD hh:mm:ss").format("DD/MM/YYYY hh:mm");
            this.contrato.updatedAt = moment(this.contrato.updatedAt, "YYYY-MM-DD hh:mm:ss").format("DD/MM/YYYY hh:mm");
            this.contrato.FK_Contratos_Clientes.createdAt = moment(this.contrato.FK_Contratos_Clientes.createdAt, "YYYY-MM-DD hh:mm:ss").format("DD/MM/YYYY hh:mm");
            this.contrato.FK_Contratos_Clientes.updatedAt = moment(this.contrato.FK_Contratos_Clientes.updatedAt, "YYYY-MM-DD hh:mm:ss").format("DD/MM/YYYY hh:mm");
            this.contrato.StatusPacote_Site = JSON.parse(this.contrato.StatusPacote_Site)
            this.contrato.StatusPacote_Lista = JSON.parse(this.contrato.StatusPacote_Lista)
            this.contrato.StatusPacote_RedeSocial = JSON.parse(this.contrato.StatusPacote_RedeSocial)
            this.listarRecebimentos(this.contrato.IdContrato)
            this.listarParcelas(this.contrato.IdContrato)
            })
        },
        listarRecebimentos(Id){
            Recebimento.listarPorContrato(Id).then(res => {
            console.log(res.data)
            this.recebimentos = res.data
            })
        },
        listarParcelas(Id){
            Parcela.listarPorContrato(Id).then(res => {
            console.log(res.data)
            this.parcelas = res.data
            })
        },
        salvarContrato(){
            if(this.$v.$invalid == true) {
                    this.$v.$touch();
                }
            else {
                var now = moment().format('YYYY-MM-DD hh:mm:ss')
                this.contrato.UpdatedAt = now
                
                this.contrato.IdCliente = parseInt(this.contrato.IdCliente)
                this.contrato.StatusPacote_Site = this.contrato.StatusPacote_Site.toString()
                this.contrato.StatusPacote_Lista = this.contrato.StatusPacote_Lista.toString()
                this.contrato.StatusPacote_RedeSocial = this.contrato.StatusPacote_RedeSocial.toString()
                this.contrato.IdVendedor = parseInt(this.contrato.IdVendedor)
                this.contrato.VigenciaInicial = moment(this.contrato.VigenciaInicial, "DDMMYYYY").format("YYYY-MM-DD")
                this.contrato.QtdeMeses = parseInt(this.contrato.QtdeMeses)
                this.contrato.QtdeParcelas = parseInt(this.contrato.QtdeParcelas)
                this.contrato.ValorContrato = parseFloat(this.contrato.ValorContrato)

                Contrato.atualizar(this.contrato).then(res => {
                this.res = res
                alert('Atualizado com sucesso!')
                this.errors = []
                }).catch( e => {
                    this.errors = e.response.data.errors
                })  
        
                this.$router.push({ path: '/contratos' })
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

    #error-form{
        color: red;
        font-size: 12px;
    }

    .fail-error{
        border: 1px solid red;
    }

    #button-save{
        right: 50px;
        position: absolute;
        background-color: var(--color-background-buttons);
        border: none;
        width: 120px;
    }

</style>