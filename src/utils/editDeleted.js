module.exports = {
    edit: async function(req, table, columns = '*') {
    
        let bot = req.query.bot

        switch (bot) {
            case 'cynet':
                const query1 = req.dbCyNet._knex(table)
                .select()
                .where('date', req.body.date)
                .then(function(rows) {
                    if (rows.length === 0) {
                        return req.dbCyNet._knex(table).insert({date: req.body.date, Total: req.body.Total})
                    } else {
                        return req.dbCyNet._knex(table).increment('Total').where('date', req.body.date)
                    }
                })
                .catch(function(err) {
                    console.log(err)
                })
                break;
            case 'zemabot':
                const query2 = req.dbZema._knex(table)
                .select()
                .where('date', req.body.date)
                .then(function(rows) {
                    if (rows.length === 0) {
                        return req.dbZema._knex(table).insert({date: req.body.date, Total: req.body.Total})
                    } else {
                        return req.dbZema._knex(table).increment('Total').where('date', req.body.date)
                    }
                })
                .catch(function(err) {
                    console.log(err)
                })
                break;
            case 'dash':
                const query3 = req.dbDash._knex(table)
                .select()
                .where('date', req.body.date)
                .then(function(rows) {
                    if (rows.length === 0) {
                        return req.dbDash._knex(table).insert({date: req.body.date, Total: req.body.Total})
                    } else {
                        return req.dbDash._knex(table).increment('Total').where('date', req.body.date)
                    }
                })
                .catch(function(err) {
                    console.log(err)
                })
                break;
            default:
                break;
        }
   }
} 