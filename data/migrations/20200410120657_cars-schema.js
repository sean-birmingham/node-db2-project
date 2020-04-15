exports.up = function (knex) {
  return knex.schema.createTable('cars', (tbl) => {
    tbl.increments();
    tbl.text('VIN', 17).notNullable();
    tbl.text('make', 128).notNullable();
    tbl.text('model', 128).notNullable();
    tbl.integer('mileage').notNullable();
    tbl.text('transmission type', 128);
    tbl.text('status', 128);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars');
};
