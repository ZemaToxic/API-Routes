module.exports = {
    fetchFile: async function(req, table, columns = '*') {
    
    const query = req.db.select(table)

    return query
  }
} 