module.exports = {
    fetch: async function(req, table, order) {
        let bot = req.query.bot
        switch (bot) {
            case 'cynet':
            let query1 = req.dbCyNet._knex(table)
                .orderBy(order, 'asc')
            return query1
    
            case 'zemabot':
                let query2 = req.dbZema._knex(table)
                .orderBy(order, 'asc')
            return query2
    
            case 'dash':
                let query3 = req.dbDash._knex(table)
                .orderBy(order, 'asc')
            return query3
    
            default:
                break;
        }
   }
}