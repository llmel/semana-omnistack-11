const express = require('express');
//
const { celebrate , Segments , Joi } = require('celebrate');
// Importando Controllers
const OngController = require('./controllers/OngController');
const CasoController = require('./controllers/CasoController');
const PerfilController = require('./controllers/PerfilController');
const SessionController = require('./controllers/SessionController');

// Desacoplando o módulo de rotas para dentro de uma variável
const router = express.Router();

// Cadastrar Ongs
router.post('/ongs', celebrate({ // Entre [] porque é um objeto que a chave é uma variável
    [Segments.BODY]: Joi.object().keys({
        nome: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        cidade: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })       
}) , OngController.create);

// Buscar todas as ONGS
router.get('/ongs', OngController.index);

// Criar Caso de Ong
router.post('/casos', CasoController.create);

// Buscar Casos
router.get('/casos', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}) , CasoController.index);

// Deletar Caso
router.delete('/casos/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}) , CasoController.delete);

// Buscar casos de determinada ong
router.get('/perfil', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown()
}) , PerfilController.index);

// Logar
router.post('/sessao', SessionController.create);

// Deixar rotas disponíveis para que o Index.js possa acessá-las.
module.exports = router;