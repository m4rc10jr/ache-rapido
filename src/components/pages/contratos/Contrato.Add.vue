<template>
    <main>
        <div class="container">
            <div class="row" id="breadcumb">
                <div class="col-6">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a aria-current="page">Homepage</a></li>
                            <li class="breadcrumb-item"><a aria-current="page">Contratos</a></li>
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
                                <input disabled type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="clientes.createdAt">
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="form-group mb-3">
                                <label>Alterado em</label>
                                <input disabled type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="clientes.updatedAt">
                            </div>
                        </div>
                    </div>
                </b-tab>
                <b-tab title="Contrato" active>
                <form @submit.prevent="salvarContrato">
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
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <button id="button-save" type="submit" class="btn btn-primary">Criar</button>
                        </div>
                    </div>
                </form>
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
                <b-tab title="Parcelas" disabled>
                </b-tab>
                <b-tab title="Recebimentos" disabled>
                </b-tab>
            </b-tabs>
        </div>
    </main>
</template>

<script>
import Contrato from '@/services/contratos'
import Cliente from '@/services/clientes'
import moment from 'moment';
import { required, minLength, integer, minValue, decimal, requiredIf } from "vuelidate/lib/validators";

export default {
    name: 'ContratoAdd',

    data(){
      return {
        contrato: {
          IdCliente: '',
          StatusPacote_Site: false,
          StatusPacote_Lista: false,
          StatusPacote_RedeSocial: false,
          CodContrato: '',
          IdVendedor: '',
          VigenciaInicial: '',
          QtdeMeses: null,
          QtdeParcelas: null,
          ValorContrato: null,
          createdAt: '',
          updatedAt: ''
        },
        clientes: [],
        errors: [],
        StatusPacote: ''
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
        this.listarCliente()
    },

    methods:{
        listarCliente(){
            Cliente.listarPorId(this.$router.currentRoute.params.id).then(res => {
            console.log(res.data)
            this.clientes = res.data
            this.clientes.createdAt = moment(this.clientes.createdAt, "YYYY-MM-DD hh:mm:ss").format("DD/MM/YYYY hh:mm");
            this.clientes.updatedAt = moment(this.clientes.updatedAt, "YYYY-MM-DD hh:mm:ss").format("DD/MM/YYYY hh:mm");
            })
        },
        salvarContrato(){
            if(this.$v.$invalid == true) {
                this.$v.$touch();
                
            }else {
            
                var now = moment().format('YYYY-MM-DD hh:mm:ss')
                this.contrato.createdAt = now
                this.contrato.updatedAt = now

                this.contrato.IdCliente = parseInt(this.$router.currentRoute.params.id)
                this.contrato.StatusPacote_Site = this.contrato.StatusPacote_Site.toString()
                this.contrato.StatusPacote_Lista = this.contrato.StatusPacote_Lista.toString()
                this.contrato.StatusPacote_RedeSocial = this.contrato.StatusPacote_RedeSocial.toString()
                this.contrato.IdVendedor = parseInt(this.contrato.IdVendedor)
                this.contrato.VigenciaInicial = moment(this.contrato.VigenciaInicial, "DDMMYYYY").format("YYYY-MM-DD")
                this.contrato.QtdeMeses = parseInt(this.contrato.QtdeMeses)
                this.contrato.QtdeParcelas = parseInt(this.contrato.QtdeParcelas)
                this.contrato.ValorContrato = parseFloat(this.contrato.ValorContrato)
                
                Contrato.salvar(this.contrato).then(res => {
                this.res = res
                this.contrato = {}
                alert('Contrato cadastrado com sucesso!')
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

    #button-save{
        right: 50px;
        position: absolute;
        background-color: var(--color-background-buttons);
        border: none;
        width: 120px;
    }

    #button-gerar-parcelas{
        background-color: var(--color-background-buttons-yellow);
        border: none;
        margin-bottom: 30px;
    }

    #error-form{
        color: red;
        font-size: 12px;
    }

    .fail-error{
        border: 1px solid red;
    }
    
</style>