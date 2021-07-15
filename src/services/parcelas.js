import { http } from './config'

export default {
    listar:() => {
        return http.get('parcelas')
    },

    listarPorId:(id) => {
        return http.get('parcelas/' + id)
    },

    listarPorContrato:(id) => {
        return http.get('parcelas/contrato/' + id)
    },

    listarPorCliente:(id) => {
        return http.get('parcelas/cliente/' + id)
    },

    salvar:(parcela) => {
        return http.post('parcelas', parcela)
    },

    atualizar:(parcela) => {
        return http.put('parcelas/' + parcela.IdParcela, parcela)
    },

    apagar:(parcela) => {
        return http.delete('parcelas/' + parcela.IdParcela)
    },
    listarAtrasos:() => {
        return http.get('parcelas/relatorios/atrasos')
    },
    listarProximosVencimento:() => {
        return http.get('parcelas/relatorios/proximos_vencimentos')
    },
}