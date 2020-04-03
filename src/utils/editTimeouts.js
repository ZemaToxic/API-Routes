module.exports = {
    edit: async function (req, table, columns = '*') {

        const query = req.dbTimeouts._knex(req.query.bot)
            .select()
            .where('date', req.body.date)
            .then(function (rows) {
                if (rows.length === 0) {
                    return req.dbTimeouts._knex(req.query.bot).insert({ date: req.body.date, Total: req.body.Total })
                } else {
                    return req.dbTimeouts._knex(req.query.bot).increment('Total').where('date', req.body.date)
                }
            })
            .catch(function (err) {
                console.log(err)
            })
    }
} 