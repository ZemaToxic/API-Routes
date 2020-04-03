module.exports = {
    fetch: async function (req, table, order) {
        let query = req.dbCommands._knex(req.query.bot)
            .orderBy(order, 'asc')
        return query
    }
}