import { http } from './config'

export default {
    listar:() => {
        return http.get('clientes')
    },

    listarPorId:(id) => {
        return http.get('clientes/' + id)
    },

    salvar:(cliente) => {
        return http.post('clientes', cliente)
    },

    atualizar:(cliente) => {
        return http.put('clientes/' + cliente.IdCliente, cliente)
    },

    apagar:(cliente) => {
        return http.delete('clientes/' + cliente.IdCliente)
    }
}