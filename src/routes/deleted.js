const fetch = require('../utils/fetchDeleted')
const edit = require('../utils/editDeleted')

module.exports = {
    post: async function (req, res) {
        try {
            await edit.edit(req, 'deleted');
            res.send("Data Added")
        }
        catch (err) {
            res.send(err)
        }
    },
    
    get: async function (req, res) {
        try {
            const data = await fetch.fetch(req, 'deleted');
            res.send(data)
        }
        catch (err) {
            res.send(err)
        }
    }
}