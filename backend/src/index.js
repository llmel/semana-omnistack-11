// Importando o módulo express para dentro da variável express.
// Essa variável contém todas as funcionalidades do módulo.
const express = require('express');

// Importando o módulo de rotas, que é exportado pelo arquivo routes.js
const routes = require('./routes');

// Importando módulo de segurança, que controla quais origens podem acessar este back-end
const cors = require('cors');

// Instanciando a aplicação
const app = express();

// Chamando o CORS para ser utilizado
app.use(cors());

// Transforma os request body em objetos Javascript
// Tem que estar antes de todas as rotas para funcionar
app.use(express.json());

// Este comando tem que estar após o 'use express.json'
app.use(routes);

// Qual porta a aplicação vai rodar
app.listen(3333);

// Primeiras rotas
// Retornando texto
app.get('/', (requisicao,resposta) => {
    return resposta.send('Hello World');
});

// Retornando json
app.get('/json', (requisicao,resposta) => {
    return resposta.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Leonardo Melo'
    });
});

// Tipos de parâmetros
// -Query
app.get('/users', (req,res) => {
    const params = req.query;
    console.log(params);
    return res.send('Query Params Okkk');
})
// -Route
app.get('/users/:id', (req,res) => {
    const params = req.params;
    console.log(params);
    return res.send('Route Params Okkk');
})
// -Request Body
app.post('/usersbody', (req,res) => {
    const body = req.body;
    console.log(body);
    return res.send('Request Body Okkk');
})
