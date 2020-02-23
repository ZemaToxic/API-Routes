const QueryBuilder = require('simple-knex')

module.exports = {
    database: function (dbInfo) {
    const db = new QueryBuilder(dbInfo)
    return (req, res, next) => {
      req.db = db
      next()
    }
  }
}
