module.exports = {
    save: async function(req, table, columns = '*') {
    
    const table = req.db._knex(table)
    .insert({user: req.user, message: req.message})
  
    return table
   }
} 