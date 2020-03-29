// Conexão com o banco de dados
const conexao = require('../database/conexao');
// Módulo de Criptografia - Apenas para gerar IDs aleatórios
const crypto = require('crypto');

module.exports = {
    async index (req,res)  {
        const ongs = await conexao('ongs').select('*');
    
        return res.json(ongs);
    },
    
    async create (req,res) {
        const data = req.body;
        // ou
        const {nome,email,whatsapp,cidade,uf} = req.body;
    
        // Gerar id aleatório
        const id = crypto.randomBytes(4).toString('HEX');
    
        await conexao('ongs').insert({
            id,
            nome,
            email,
            whatsapp,
            cidade,
            uf
        })
        
        return res.json({ id });
    }
}