const express = require('express')
const bodyParser = require('body-parser')
const db = require('./api/cliente')
const app = express()
const port = 3000

app.use('/', bodyParser.urlencoded({extended: true}))

app.get('/clientes', (req, res) => {
    res.send(db.listarClientes())
})

app.get('/clientes/:id', (req, res) => {
    res.send(db.buscarCliente(req.params.id))
})

app.post('/clientes', (req, res) => {
    const clie = {}
    if(req.body.id){clie.id = req.body.id}
    clie.nome = req.body.nome
    clie.idade = req.body.idade
    res.send(db.salvarCliente(clie))
})

app.listen(port, '0.0.0.0', ()=>{
    console.log(`Servidor online na porta ${port}, http://localhost:${port}`)
})