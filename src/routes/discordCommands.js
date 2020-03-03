const fetch = require('../utils/fetch')
const save = require('../utils/save')

module.exports = {
    post: async function (req, res) {
        try {
            const data = await save.save(req, 'DiscordCommands');
            res.send("Data Added")
        }
        catch (err) {
            res.send(err)
        }
    },
    
    get: async function (req, res) {
        try {
            const data = await fetch.fetch(req, 'DiscordCommands', 'CommandName');
            res.send(data)
        }
        catch (err) {
            res.send(err)
        }
    }
}