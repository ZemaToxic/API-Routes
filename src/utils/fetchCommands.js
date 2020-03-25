module.exports = {
    fetch: async function(req, table, order) {
    
        let query = req.db._knex(table)
        query = req.db._knex(table)
            .orderBy(order, 'asc')
        return query
   }
}