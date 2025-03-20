exports.seed = async function (knex) {
  // Deletes ALL existing entries
  return knex("cats")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("cats").insert([
        {
          id: 1,
          name: "Hanzo",
          breed: `American Shorthair`,
          color: `black`,
          favorite_treat: `salmon`,
        },
        {
          id: 2,
          name: "Midori",
          breed: `American Shorthair`,
          color: `tabby`,
          favorite_treat: `squid jerky`,
        },
        {
          id: 3,
          name: "Danzo",
          breed: `Maine Coon`,
          color: `smoky black`,
          favorite_treat: `dog food`,
        },
      ]);
    });
};
