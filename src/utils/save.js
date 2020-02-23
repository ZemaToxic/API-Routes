module.exports = {
    save: async function(req, table, columns = '*') {
    
    const query = req.db._knex(table)
    .insert({user: req.body.user, message: req.body.message})
  
    return query
   }
} 