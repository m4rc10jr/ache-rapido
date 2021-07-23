<template>
    <main>
        <div class="container">
            <div class="row" id="breadcumb">
                <div class="col-6">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a aria-current="page">Homepage</a></li>
                            <li class="breadcrumb-item"><a aria-current="page">Clientes</a></li>
                            <li class="breadcrumb-item active"><a aria-current="page">Adicionar</a></li>
                        </ol>
                    </nav>
                </div>
            </div>
            <b-tabs content-class="mt-3">
                <b-tab title="Cliente" active>
                    <form @submit.prevent="salvarCliente">
                        <div class="row">
                            <div class="col-2">
                                <label>Origem do Cliente</label>
                                <select class="form-select" :class="{'fail-error' : $v.cliente.TipoOrigem.$error}" aria-label="Default select example" v-model="cliente.TipoOrigem" @change="$v.cliente.TipoOrigem.$touch()">
                                    <option value="" disabled selected>Nenhum</option>
                                    <option value="Indicação"> Indicação </option>
                                    <option value="Venda corrida"> Venda corrida </option>
                                    <option value="Desconhecida"> Desconhecida </option>
                                </select>
                                <p id="error-form" v-if="$v.cliente.TipoOrigem.$error">* Valor nulo ou inválido</p>
                            </div>
                            <div class="col-2">
                                <label>Tipo de Cliente</label>
                                <select class="form-select" :class="{'fail-error' : $v.cliente.TipoCliente.$error}" aria-label="Default select example" v-model="cliente.TipoCliente" @change="$v.cliente.TipoCliente.$touch()">
                                    <option value="" disabled selected>Nenhum</option>
                                    <option value="Pessoa física"> Pessoa física </option>
                                    <option value="Pessoa jurídica"> Pessoa jurídica </option>
                                </select>
                                <p id="error-form" v-if="$v.cliente.TipoCliente.$error">* Valor nulo ou inválido</p>
                            </div>
                            <div class="col-2">
                                <label>Tipo de Documento</label>
                                <select class="form-select" :class="{'fail-error' : $v.cliente.TipoDocumento.$error}" aria-label="Default select example" v-model="cliente.TipoDocumento" @change="$v.cliente.TipoDocumento.$touch()">
                                    <option value="" disabled selected>Nenhum</option>
                                    <option value="RG"> RG </option>
                                    <option value="CPF"> CPF </option>
                                    <option value="CNPJ"> CNPJ </option>
                                </select>
                                <p id="error-form" v-if="$v.cliente.TipoDocumento.$error">* Valor nulo ou inválido</p>
                            </div>
                            <div class="col-2">
                                <div class="form-group mb-2">
                                    <label>Documento</label>
                                    <input type="text" class="form-control" :class="{'fail-error' : $v.cliente.NumDocumento.$error}" placeholder="Somente números" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="cliente.NumDocumento" @change="$v.cliente.NumDocumento.$touch()">
                                    <p id="error-form" v-if="$v.cliente.NumDocumento.$error">* Valor nulo ou inválido</p>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group mb-3">
                                    <label>Nome do Cliente / Razão Social</label>
                                    <input type="text" class="form-control" :class="{'fail-error' : $v.cliente.NomeCliente.$error}" placeholder="Digite um nome" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="cliente.NomeCliente" @change="$v.cliente.NomeCliente.$touch()">
                                    <p id="error-form" v-if="$v.cliente.NomeCliente.$error">* Valor nulo ou inválido</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <div class="form-group mb-3">
                                    <label>Apelido Cliente / Nome Fantasia </label>
                                    <input type="text" class="form-control" :class="{'fail-error' : $v.cliente.ApelidoCliente.$error}" placeholder="Digite um apelido" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="cliente.ApelidoCliente" @change="$v.cliente.ApelidoCliente.$touch()">
                                    <p id="error-form" v-if="$v.cliente.ApelidoCliente.$error">* Valor nulo ou inválido</p>
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="form-group mb-3">
                                    <label>Contato Principal</label>
                                    <input type="text" class="form-control" :class="{'fail-error' : $v.cliente.NomeRepresentante.$error}" placeholder="Digite um Representante" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="cliente.NomeRepresentante" @change="$v.cliente.NomeRepresentante.$touch()">
                                    <p id="error-form" v-if="$v.cliente.NomeRepresentante.$error">* Valor nulo ou inválido</p>
                                </div>
                            </div>
                            <div class="col-2">
                                <label>Sexo</label>
                                <select class="form-select" :class="{'fail-error' : $v.cliente.SexoRepresentante.$error}" aria-label="Default select example" v-model="cliente.SexoRepresentante" @change="$v.cliente.SexoRepresentante.$touch()">
                                    <option value="" disabled selected>Nenhum</option>
                                    <option value="Masculino"> Masculino </option>
                                    <option value="Feminino"> Feminino </option>
                                </select>
                                <p id="error-form" v-if="$v.cliente.SexoRepresentante.$error">* Valor nulo ou inválido</p>
                            </div>
                            <div class="col-2">
                                <div class="form-group mb-3">
                                    <label>Data de Nascimento</label>
                                    <input type="text" class="form-control" :class="{'fail-error' : $v.cliente.DataNascimento.$error}" v-mask="'##/##/####'" placeholder="dd/mm/aaaa" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="cliente.DataNascimento" @change="$v.cliente.DataNascimento.$touch()">
                                    <p id="error-form" v-if="$v.cliente.DataNascimento.$error">* Valor inválido</p>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="form-group mb-3">
                                    <label>Telefone Fixo</label>
                                    <input type="text" class="form-control" :class="{'fail-error' : $v.cliente.TelefoneRepresentante.$error}" v-mask="'(###) ####-####'" placeholder="(000) 0000-0000" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="cliente.TelefoneRepresentante" @change="$v.cliente.TelefoneRepresentante.$touch()">
                                    <p id="error-form" v-if="$v.cliente.TelefoneRepresentante.$error">* Valor inválido</p>
                                </div>
                            </div>                
                        </div>
                        <div class="row">
                            <div class="col-2">
                                <div class="form-group mb-3">
                                    <label>Celular</label>
                                    <input type="text" class="form-control" :class="{'fail-error' : $v.cliente.CelularRepresentante.$error}" v-mask="'(###) #####-####'" placeholder="(000) 00000-0000" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="cliente.CelularRepresentante" @change="$v.cliente.CelularRepresentante.$touch()">
                                    <p id="error-form" v-if="$v.cliente.CelularRepresentante.$error">* Valor inválido</p>
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="form-group mb-3">
                                    <label>Endereço do Cliente</label>
                                    <input type="text" class="form-control" :class="{'fail-error' : $v.cliente.EnderecoCliente.$error}" placeholder="Digite o endereço completo" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="cliente.EnderecoCliente" @change="$v.cliente.EnderecoCliente.$touch()">
                                    <p id="error-form" v-if="$v.cliente.EnderecoCliente.$error">* Valor inválido</p>
                                </div>
                            </div>
                            <div class="col-2">
                                <label>Município</label>
                                <select class="form-select" :class="{'fail-error' : $v.cliente.MunicipioCliente.$error}" aria-label="Default select example" v-model="cliente.MunicipioCliente" @change="$v.cliente.EnderecoCliente.$touch()">
                                    <option value="" disabled selected>Nenhum</option>
                                    <option value="Catalão"> Catalão </option>
                                    <option value="Formosa"> Formosa </option>
                                    <option value="Jataí"> Jataí </option>
                                </select>
                                <p id="error-form" v-if="$v.cliente.MunicipioCliente.$error">* Valor nulo ou inválido</p>
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
                <b-tab title="Contratos" disabled>
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
import Cliente from '@/services/clientes'
import moment from "moment";
import { required, minLength } from "vuelidate/lib/validators";

export default {
    name: 'ClienteAdd',

    data(){
      return {
        cliente: {
          TipoCliente: '',
          TipoOrigem: '',
          TipoDocumento: '',
          NumDocumento: '',
          NomeCliente: '',
          ApelidoCliente: '',
          NomeRepresentante: '',
          SexoRepresentante: '',
          DataNascimento: '',
          TelefoneRepresentante: '',
          CelularRepresentante: '',
          EnderecoCliente: '',
          MunicipioCliente: '',
          CreatedAt: '',
          UpdatedAt: ''
        },
        errors: []
      }
    },
    validations:{
        cliente: {
            TipoCliente: { required },
            TipoOrigem: { required },
            TipoDocumento: { required },
            NumDocumento: { required, minLength: minLength(9) },
            NomeCliente: { required },
            ApelidoCliente: { required },
            NomeRepresentante: { required },
            SexoRepresentante: { required },
            DataNascimento: { minLength: minLength(6) },
            TelefoneRepresentante: { minLength: minLength(11) },
            CelularRepresentante: { minLength: minLength(12) },
            EnderecoCliente: { required = false },
            MunicipioCliente: { required }
        }   
    },
    methods:{
        salvarCliente(){
                if(this.$v.$invalid == true) {
                    this.$v.$touch();
                }else {
                    var now = moment().format('YYYY-MM-DD hh:mm:ss')
                    this.cliente.CreatedAt = now
                    this.cliente.UpdatedAt = now
                    
                    this.cliente.DataNascimento = moment(this.cliente.DataNascimento, "DDMMYYYY").format("YYYY-MM-DD");

                    Cliente.salvar(this.cliente).then(res => {
                    this.res = res
                    this.cliente = {}
                    alert('Salvo com sucesso!')
                    this.errors = []
                    }).catch( e => {
                        this.errors = e.response.data.errors
                })
            this.$router.push({ path: '/clientes' })
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

    #error-form{
        color: red;
        font-size: 12px;
    }

    .fail-error{
        border: 1px solid red;
    }
    
</style>