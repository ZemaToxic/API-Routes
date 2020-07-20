module.exports = {
    fetch: async function (req, table, order) {
        return new Promise((resolve, reject) => {
            let query = req.dbDeleted._knex(req.query.bot)
                .orderBy('ID', 'desc')
                .limit(7)
            resolve(query)
        })
    }
}