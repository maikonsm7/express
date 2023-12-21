// o express usa o padrão chain of responsability (cadeia de rsponsabilidade), baseado em camadas middleware
const express = require('express')
const saudacao = require('./saudacao')
const app = express()
const porta = 3000

app.use(saudacao('Maikon'))

app.use((req, res, next) => {
    res.send('<h1>Bem vindo!!</h1>')
    next()
})

app.use((req, res) => {
    console.log('Fim')
})

app.get('/cliente/:id', (req, res) => {
    res.send(`cliente ${req.params.id} selecionado!`)
})

app.listen(porta, () => {
    console.log(`Executando servidor na porta ${porta}`)
})