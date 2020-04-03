module.exports = {
    del: async function (req, table, order) {
        let query = req.dbCommands._knex(req.query.bot)
            .where({ name: req.body.name })
            .del()
        return query
    }
}