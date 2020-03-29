const express = require('express');
// Importando Controllers
const OngController = require('./controllers/OngController');
const CasoController = require('./controllers/CasoController');
const PerfilController = require('./controllers/PerfilController');
const SessionController = require('./controllers/SessionController');

// Desacoplando o módulo de rotas para dentro de uma variável
const router = express.Router();

// Cadastrar Ongs
router.post('/ongs', OngController.create);

// Buscar todas as ONGS
router.get('/ongs', OngController.index);

// Criar Caso de Ong
router.post('/casos', CasoController.create);

// Buscar Casos
router.get('/casos', CasoController.index);

// Deletar Caso
router.delete('/casos/:id', CasoController.delete);

// Buscar casos de determinada ong
router.get('/perfil', PerfilController.index);

// Logar
router.post('/sessao', SessionController.create);

// Deixar rotas disponíveis para que o Index.js possa acessá-las.
module.exports = router;