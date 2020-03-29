const conexao = require('../database/conexao');

module.exports = {
    async create(req,res) {
        const {id} = req.body;

        // O método first(), faz com que o resultado da consulta retorne um resultado, não um array.
        const ong = await conexao('ongs').where('id', id).select('nome').first();

        if (!ong) {
            return res.status(400).json({
                erro : "Nenhuma ong encontrada com esse ID"
            });
        }

        return res.json(ong);
    }
}