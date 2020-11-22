const express = require('express');

const db = require('./ingredients-model');

const router = express();

router.get('/', async (req, res) => {
    const id = req.params;
    try {
        const ingredients = await db.find({id});
        if(ingredients) {
            console.log(ingredients);
            res.status(200).json(ingredients)
        } else {
            res.status(404).json({message: 'error retrieving ingredients'})
        }
    } catch (error) {
        res.status(500).json({message: 'There was a problem with the database', error})
    }
})

module.exports = router;