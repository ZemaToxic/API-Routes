module.exports = {
    save: async function (req, table, columns = '*') {
        const query = req.dbBans._knex(req.query.bot)
            .insert({ user: req.body.user, message: req.body.message })

        return query
    }
} 