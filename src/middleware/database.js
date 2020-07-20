const QueryBuilder = require('simple-knex')

module.exports = {
    database: function (_dbCommands, _dbTimeouts, _dbDeleted, _dbBans, _dbDiscord) {
    const dbCommands = new QueryBuilder(_dbCommands)
    const dbTimeouts = new QueryBuilder(_dbTimeouts)
    const dbDeleted = new QueryBuilder(_dbDeleted)
    const dbBans = new QueryBuilder(_dbBans)
    const dbDiscord = new QueryBuilder(_dbDiscord)

    return (req, res, next) => {
      req.dbCommands = dbCommands
      req.dbTimeouts = dbTimeouts
      req.dbDeleted = dbDeleted
      req.dbBans = dbBans
      req.dbDiscord = dbDiscord
      next()
    }
  }
}
