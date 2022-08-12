/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('contact', table => {
        table.string('name').notNull();
        table.string('phone').notNull();
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('contact', function(t) {
        t.dropColumn('name');
        t.dropColumn('phone');
    });
};
