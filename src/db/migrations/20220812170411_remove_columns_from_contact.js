/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('contact', function(t) {
        t.dropColumn('nome');
        t.dropColumn('telefone');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('contact', function(t) {
        t.enum('nome', ['email'], 'telefone').notNull();
    });
};
