exports.up = function(knex) {
    return knex.schema.table('users', tbl => {
      tbl.string('joke', 80);
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.table('users', tbl => {
        // delete (drop) the column
        tbl.dropColumn('joke');
    })
  };
  