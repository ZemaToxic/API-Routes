module.exports = {
    fetch: async function(req, table, order) {
    
    const query = req.db._knex(table)
        .orderBy(order, 'desc')
  
    return query
   }
} 