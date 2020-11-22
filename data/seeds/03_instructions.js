
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {instructions: 'Do Stuff', recipe_id: 1},
        {instructions: 'Do Stuff', recipe_id: 2},
        {instructions: 'Do Stuff', recipe_id: 3}
      ]);
    });
};
