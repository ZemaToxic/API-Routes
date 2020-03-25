module.exports = {
    edit: async function(req, table, columns = '*') {
    
    const query = req.db._knex(table)
        .select()
        .where('date', req.body.date)
        .then(function(rows) {
            if (rows.length === 0) {
                return req.db._knex(table).insert({date: req.body.date, Total: req.body.Total})
            } else {
                return req.db._knex(table).increment('Total').where('date', req.body.date)
            }
        })
        .catch(function(err) {
            console.log(err)
        })
   }
} 