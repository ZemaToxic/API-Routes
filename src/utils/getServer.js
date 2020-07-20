module.exports = {
    get: async function (req, table) {
        let query = req.dbDiscord._knex(table)
      return query
    }
}