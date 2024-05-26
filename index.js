const express = require('express')
const bodyParser = require('body-parser')
const cliente = require('./api/cliente')
const usuario = require('./api/usuario')
const app = express()
const port = 3000

// app.use(bodyParser.text())
// app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true})) // para envio de formulário do front

// Cliente
app.get('/clientes', (req, res) => {
    res.send(cliente.listarClientes())
})

app.get('/clientes/:id', (req, res) => {
    res.send(cliente.buscarCliente(req.params.id))
})

app.post('/clientes', (req, res) => {
    const clie = {}
    if(req.body.id){clie.id = req.body.id}
    clie.nome = req.body.nome
    clie.idade = req.body.idade
    res.send(cliente.salvarCliente(clie))
})

// Usuário - padrão mais reduzido. Função que retorna um middleware
app.post('/usuarios', usuario.salvar)
app.get('/usuarios', usuario.obter)

app.listen(port, '0.0.0.0', ()=>{
    console.log(`Servidor online na porta ${port}, http://localhost:${port}`)
})