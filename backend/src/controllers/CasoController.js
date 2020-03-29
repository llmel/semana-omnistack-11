const conexao = require('../database/conexao');

module.exports = {
    async index(req,res) {
        // Isso é para paginação.
        const {page = 1} = req.query;

        // Saber o total de casos
        const [count] = await conexao('casos').count();

        console.log(count);

        const casos = await conexao('casos')
        .join('ongs', 'ongs.id', '=', 'casos.ong_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select([
            'casos.*',
            'ongs.nome',
            'ongs.email',
            'ongs.whatsapp',
            'ongs.cidade',
            'ongs.uf'
        ]);

        // Adicionando o total de casos no cabeçalho da resposta.
        res.header('X-Total-Count', count['count(*)']);

        return res.json(casos);
    },
    
    async create(req,res) {
        const {titulo,descricao,valor} = req.body;
        const ong_id = req.headers.authorization;

        // O insert retorna um vetor, que no caso é o id gerado automaticamente após o insert. Como é só um registro, ele retorna só um id, que é a pos. 0 do vetor.
        const [id] = await conexao('casos').insert({
            titulo,
            descricao,
            valor,
            ong_id
        })

        return res.json({id});
    },

    async delete(req,res) {
        const {id} = req.params;
        const ong_id = req.headers.authorization;

        const caso = await conexao('casos').where('id', id).select('ong_id').first();

        if (caso.ong_id != ong_id) {
            return res.status(401).json({
                erro : "Operação não permitida."
            })
        }

        await conexao('casos').where('id', id).delete();

        return res.status(204).send();
    }
}