module.exports = {
    fetchFile: async function(req, table, columns = '*') {
    
    const query = req.db._knex(table)
    .first()
  
    return query
   }
} 