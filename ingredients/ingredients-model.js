const db = require('../data/db-config.js');

module.exports = {
    find
}

async function find(id) {
    try {
        return await db('ingredients')
            .where({recipe_id: id})
    } catch (err) {
        console.log(err);
        throw err
    }
}