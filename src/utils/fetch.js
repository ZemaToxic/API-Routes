module.exports = {
    fetch: async function(req, table, columns = '*') {
    
    const query = req.db._knex(table)
    .first()
  
    return query
   }
} 