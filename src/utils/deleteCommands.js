module.exports = {
    del: async function(req, table, order) {

        let bot = req.query.bot

        // let query = req.dbCyNet._knex(table)
        switch (bot) {
            case 'cynet':
                let query1 = req.dbCyNet._knex(table)
                    .where({name: req.body.name})
                    .del()
                return query1

            case 'zemabot':
                // let query = req.dbZema._knex(table)
                let query2 = req.dbZema._knex(table)
                    .where({name: req.body.name})
                    .del()
                return query2

            case 'dash':
                // let query = req.dbDash._knex(table)
                let query3 = req.dbDash._knex(table)
                    .where({name: req.body.name})
                    .del()
                return query3  
            
            default:
                break;
        }
   }
}