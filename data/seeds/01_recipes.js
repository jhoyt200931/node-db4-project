
exports.seed = function(knex) {
      return knex('recipes').insert([
        {recipe_name: 'pizza'},
        {recipe_name: 'pizza rolls'},
        {recipe_name: 'hot pockets'}
      ]);
};
