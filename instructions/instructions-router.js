const express = require('express');

const db = require('./instructions-model');

const router = express();

router.get('/', async (req, res) => {
    const id = req.params;
    try {
        const instructions = await db.find({id})
        if(instructions) {
            res.status(200).json(instructions);
        } else {
            res.status(404).json({message: 'There was an error retrieving the instructions'})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'There was an error with the database', error})
    }
})


module.exports = router;