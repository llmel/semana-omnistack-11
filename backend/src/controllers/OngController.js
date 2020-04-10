// Conexão com o banco de dados
const conexao = require('../database/conexao');
// Importando função da pasta "Utils"
const generateUniqueId = require('../utils/generateUniqueId');

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
        const id = generateUniqueId();
    
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