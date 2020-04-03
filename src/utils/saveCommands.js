module.exports = {
    save: async function (req, table, columns = '*') {
        const query = req.dbCommands._knex(req.query.bot)
            .insert({ name: req.body.name, description: req.body.description, cooldown: req.body.cooldown, response: req.body.response })

        return query
    }
} 