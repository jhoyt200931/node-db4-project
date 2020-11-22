const express = require('express');
const RecipesRouter = require('./recipes/recipes-router.js');
const IngredientsRouter = require('./ingredients/ingredients-router.js');
const InstructionsRouter = require('./instructions/instructions-router.js');
const server = express();

server.use(express.json());
server.use('/recipes', RecipesRouter);
server.use('/recipes/:id/ingredients', IngredientsRouter );
server.use('/recipes/:id/instructions', InstructionsRouter);

module.exports = server;