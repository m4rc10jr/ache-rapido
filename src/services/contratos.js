import { http } from './config'

export default {
    listar:() => {
        return http.get('contratos')
    },

    listarPorId:(id) => {
        return http.get('contratos/' + id)
    },

    listarPorCliente:(id) => {
        return http.get('contratos/cliente/' + id)
    },

    salvar:(contrato) => {
        return http.post('contratos', contrato)
    },

    atualizar:(contrato) => {
        return http.put('contratos/' + contrato.IdContrato, contrato)
    },

    apagar:(contrato) => {
        return http.delete('contratos/' + contrato.IdContrato)
    }
}