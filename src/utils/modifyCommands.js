module.exports = {
    modify: async function(req, table, order) {
        let bot = req.query.bot

        switch (bot) {
            case 'cynet':
                let query1 = req.dbCyNet._knex(table)
                .where({name: req.body.name})
                .update({name: req.body.name, description: req.body.description, cooldown: req.body.cooldown, response: req.body.response})
    
            return query1
            case 'zemabot':
                let query2 = req.dbZema._knex(table)
                .where({name: req.body.name})
                .update({name: req.body.name, description: req.body.description, cooldown: req.body.cooldown, response: req.body.response})
    
            return query2
            case 'dash':
                let query3 = req.dbDash._knex(table)
                .where({name: req.body.name})
                .update({name: req.body.name, description: req.body.description, cooldown: req.body.cooldown, response: req.body.response})
    
            return query3
            default:
                break;
        }
   }
}