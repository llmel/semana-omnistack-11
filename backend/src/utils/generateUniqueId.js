// Módulo de Criptografia - Apenas para gerar IDs aleatórios
const crypto = require('crypto');

function generateUniqueId () {
    return crypto.randomBytes(4).toString('HEX');
}

module.exports = generateUniqueId;