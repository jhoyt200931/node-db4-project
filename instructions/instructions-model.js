const db = require('../data/db-config.js');

module.exports = {
    find
}

async function find(id) {
    try {  
        return await db('instructions')
            .where({recipe_id: id})
    } catch (err) {
        throw err;
    }
}