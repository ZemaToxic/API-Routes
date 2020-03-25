module.exports = {
    del: async function(req, table, order) {
    
        let query = req.db._knex(table)
        query = req.db._knex(table)
            .where({name: req.body.name})
            .del()
        return query
   }
}