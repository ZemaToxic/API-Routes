module.exports = {
    modify: async function (req, table, order) {
        let query = req.dbCommands._knex(req.query.bot)
            .where({ name: req.body.name })
            .update({ name: req.body.name, description: req.body.description, cooldown: req.body.cooldown, response: req.body.response })
    }
}