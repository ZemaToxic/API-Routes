module.exports = {
    save: async function(req, table, columns = '*') {
        let bot = req.query.bot

        switch (bot) {
            case 'cynet':
                const query1 = req.dbCyNet._knex(table)
                .insert({name: req.body.name, description: req.body.description, cooldown: req.body.cooldown, response: req.body.response})
          
            return query1
            case 'zemabot':
                const query2 = req.dbZema._knex(table)
                .insert({name: req.body.name, description: req.body.description, cooldown: req.body.cooldown, response: req.body.response})
          
            return query2
            case 'dash':
                const query3 = req.dbDash._knex(table)
                .insert({name: req.body.name, description: req.body.description, cooldown: req.body.cooldown, response: req.body.response})
          
            return query3
            default:
                break;
        }
   }
} 