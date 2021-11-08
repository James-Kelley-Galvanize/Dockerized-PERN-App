
exports.up = function(knex) {
  return knex.schema.createTable('cats', (table)=>{
    table.increments('id');
    table.string(`name`).notNullable();
    table.string(`breed`);
    table.string('color');
    table.string('favorite_treat');
    table.timestamps(true,true);
  })
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists('cats');
};
