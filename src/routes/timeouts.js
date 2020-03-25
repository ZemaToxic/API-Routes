const fetch = require('../utils/fetchTimeouts')
const edit = require('../utils/editTimeouts')

module.exports = {
    post: async function (req, res) {
        try {
            await edit.edit(req, 'timeouts');
            res.send("Data Added")
        }
        catch (err) {
            res.send(err)
        }
    },
    
    get: async function (req, res) {
        try {
            const data = await fetch.fetch(req, 'timeouts');
            res.send(data)
        }
        catch (err) {
            res.send(err)
        }
    }
}