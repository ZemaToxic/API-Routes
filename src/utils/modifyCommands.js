module.exports = {
    modify: async function(req, table, order) {
    
        let query = req.db._knex(table)
        query = req.db._knex(table)
            .where({name: req.body.name})
            .update({name: req.body.name, description: req.body.description, cooldown: req.body.cooldown, response: req.body.response})

        return query
   }
}