const QueryBuilder = require('simple-knex')

module.exports = {
    database: function (_dbCommands, _dbTimeouts, _dbDeleted, _dbBans) {
    const dbCommands = new QueryBuilder(_dbCommands)
    const dbTimeouts = new QueryBuilder(_dbTimeouts)
    const dbDeleted = new QueryBuilder(_dbDeleted)
    const dbBans = new QueryBuilder(_dbBans)

    return (req, res, next) => {
      req.dbCommands = dbCommands
      req.dbTimeouts = dbTimeouts
      req.dbDeleted = dbDeleted
      req.dbBans = dbBans
      next()
    }
  }
}
