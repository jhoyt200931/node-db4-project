const db = require('../data/db-config.js');

module.exports = {
    find
}

async function find() {
    try {
        return await db('recipes');
    } catch (err) {
        throw err;
    }
}