const express = require('express');

const db = require('./recipes-model.js');

const router = express();

router.get('/', async (req, res) => {
    try {
        const recipes = await db.find();
        if(recipes) {
            res.status(200).json(recipes)
        } else {
            res.status(404).json({message: 'Error retrieving recipes'})
        }
    } catch (error) {
        res.status(500).json({message: 'There was an error with a database', error})
    }
})


module.exports = router;