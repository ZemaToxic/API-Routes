module.exports = {
    fetch: async function (req, table, order) {
        return new Promise((resolve, reject) => {
            let query = req.dbBans._knex(req.query.bot)
                .orderBy(order, 'desc')
            resolve(query)
        })
    }
}