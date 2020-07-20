const getServer = require('../utils/getServer')

module.exports = {
    get: async function (req, res) {
        try {
            const data = await getServer.get(req, req.query.serverID)
            res.send(data)
        } catch (err) { res.send(err) }
    },
    post: async function (req, res) {
        res.send('Not implemented yet.')
    }
}