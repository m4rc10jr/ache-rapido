import { http } from './config'

export default {
    listar:() => {
        return http.get('recebimentos')
    },

    listarPorId:(id) => {
        return http.get('recebimentos/' + id)
    },

    listarPorContrato:(id) => {
        return http.get('recebimentos/contrato/' + id)
    },

    listarPorCliente:(id) => {
        return http.get('recebimentos/cliente/' + id)
    },

    salvar:(recebimento) => {
        return http.post('recebimentos', recebimento)
    },

    atualizar:(recebimento) => {
        return http.put('recebimentos/' + recebimento.IdRecebimento, recebimento)
    },

    apagar:(IdRecebimento) => {
        return http.delete('recebimentos/' + IdRecebimento)
    }
}