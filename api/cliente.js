const sequencia = {
    _id: 1,
    get valor(){ this._id++}
}

const clientes = {}

function salvarCliente(cliente){
    const clie = {
        id: cliente.id || sequencia._id,
        nome: cliente.nome,
        idade: cliente.idade
    }
    clientes[clie.id] = clie
    return clie
}

function buscarCliente(id){
    return clientes[id] || {}
}

function listarClientes(){
    return clientes
}

module.exports = {salvarCliente, listarClientes, buscarCliente}