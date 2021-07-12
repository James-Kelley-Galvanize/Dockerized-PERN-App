
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cats').del()
    .then(function () {
      // Inserts seed entries
      return knex('cats').insert([
        {id: 1, name: 'Hanzo', breed:`American Shorthair`, color:`black`, favorite_treat:`salmon`},
        {id: 2, name: 'Midori', breed:`American Shorthair`, color:``, favorite_treat:`squid jerky`},
      ]);
    });
};
