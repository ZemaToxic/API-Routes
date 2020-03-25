const fetch = require('../utils/fetchBans')
const save = require('../utils/saveBans')

module.exports = {
    post: async function (req, res) {
        try {
            await save.save(req, 'bot_bans');
            res.send("Data Added")
        }
        catch (err) {
            res.send(err)
        }
    },
    
    get: async function (req, res) {
        try {
            const data = await fetch.fetch(req, 'bot_bans', 'ID');
            res.send(data)
        }
        catch (err) {
            res.send(err)
        }
    }
}