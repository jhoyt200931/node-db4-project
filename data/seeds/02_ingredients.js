
exports.seed = function(knex) {
      return knex('ingredients').insert([
        {ingredient_name: 'pepperoni', recipe_id: 1},
        {ingredient_name: 'mozzarella', recipe_id: 1},
        {ingredient_name: 'dough', recipe_id: 1},
        {ingredient_name: 'pepperoni', recipe_id: 2},
        {ingredient_name: 'mozzarella', recipe_id: 2},
        {ingredient_name: 'dough', recipe_id: 2},
        {ingredient_name: 'pepperoni', recipe_id: 3},
        {ingredient_name: 'mozzarella', recipe_id: 3},
        {ingredient_name: 'dough', recipe_id: 3}
      ]);
};
