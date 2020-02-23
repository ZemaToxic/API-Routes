module.exports = {
    save: async function(req, table, columns = '*') {
    
    const query = req.db._knex(table)
    .insert({user: req.user, message: req.message})
  
    return query
   }
} 