module.exports = {
    fetch: async function(req, table, order) {
    
    let query = req.db._knex(table)

    query = req.db._knex(table)
        .orderBy('date', 'desc')
        .limit(7)

    return query
   }
}