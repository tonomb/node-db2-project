
exports.up = function(knex) {
  return knex.schema.createTable('cars', table=>{
    table.increments('id');
    table.string('vin').notNullable().unique();
    table.string('make', 256).notNullable();
    table.string('model').notNullable();
    table.float('mileage').notNullable();
    table.string('transmition');
    table.string('status')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
