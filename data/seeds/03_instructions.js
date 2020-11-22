
exports.seed = function(knex) {
      return knex('instructions').insert([
        {instructions: 'Do Stuff', recipe_id: 1},
        {instructions: 'Do Stuff', recipe_id: 2},
        {instructions: 'Do Stuff', recipe_id: 3}
      ]);
};
