
exports.seed = function(knex) {
      return knex('ingredients').insert([
        {ingredient_name: 'pepperoni', quantity: 5, recipe_id: 1},
        {ingredient_name: 'mozzarella', quantity: 2, recipe_id: 1},
        {ingredient_name: 'dough', quantity: 4, recipe_id: 1},
        {ingredient_name: 'pepperoni', quantity: 2, recipe_id: 2},
        {ingredient_name: 'mozzarella', quantity: 1, recipe_id: 2},
        {ingredient_name: 'dough', quantity: 1, recipe_id: 2},
        {ingredient_name: 'pepperoni', quantity: 3, recipe_id: 3},
        {ingredient_name: 'mozzarella', quantity: 3, recipe_id: 3},
        {ingredient_name: 'dough', quantity: 2, recipe_id: 3}
      ]);
};
