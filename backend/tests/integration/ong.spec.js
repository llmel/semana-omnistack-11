// Cliente HTTP
const request = require('supertest');
// Importando app
const app = require('../../src/app');
// Conexão banco
const conexao = require('../../src/database/conexao');

describe('ONG', () => {
    beforeEach(async () => {
        await conexao.migrate.rollback();
        await conexao.migrate.latest();
    });

    afterAll(async () => {
        await conexao.destroy();
    })

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            "nome" : "Teste supertest" ,
            "email" : "contato@teste.com",
            "whatsapp" : "11964872537",
            "cidade" : "Rio do Sul",
            "uf" : "SC"
        })
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    })
})