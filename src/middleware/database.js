const QueryBuilder = require('simple-knex')

module.exports = {
    database: function (dbDataCyNet, dbDataZema, dbDataDash) {
    const dbCyNet = new QueryBuilder(dbDataCyNet)
    const dbZema = new QueryBuilder(dbDataZema)
    const dbDash = new QueryBuilder(dbDataDash)

    return (req, res, next) => {
      req.dbCyNet = dbCyNet
      req.dbZema = dbZema
      req.dbDash = dbDash
      next()
    }
  }
}
