const fetch = require('../utils/fetchCommands')
const save = require('../utils/saveCommands')

const del = require('../utils/deleteCommands')
const modify = require('../utils/modifyCommands')

module.exports = {
    post: async function (req, res) {
        try {
            const data = await save.save(req, 'commands');
            res.send("Data Added")
        }
        catch (err) {
            res.send('Error' + err)
        }
    },
    
    get: async function (req, res) {
        try {
            const data = await fetch.fetch(req, 'commands', 'name');
            res.send(data)
        }
        catch (err) {
            res.send(err)
        }
    },

    del: async function (req, res) {
        try {
            const data = await del.del(req, 'commands', 'name');
            res.send("Data Removed")
        }
        catch (err) {
            res.send(err)
        }
    },

    patch: async function (req, res) {
        try {
            const data = await modify.modify(req, 'commands', 'name');
            res.send("Data Modified")
        }
        catch (err) {
            res.send(err)
        }
    }
}