const fetch = require('../utils/fetchTimeouts')
const edit = require('../utils/editTimeouts')

module.exports = {
    post: async function (req, res) {
        try {
            await edit.edit(req, 'timeouts');
            res.send("Data Added")
        } catch (err) { res.send(err) }
    },

    get: async function (req, res) {
        try{
            let data = await fetch.fetch(req, 'timeouts')
            res.send(data)
        } catch (err) { res.send(err) }
    },

    stream: async function (req, res) {

        res.set({
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache",
            Connection: "keep-alive"
        })

        let data = await fetch.fetch(req, 'timeouts')
        res.write('data: ' + JSON.stringify(data) + '\n\n')

        setInterval(async () => {
            data = await fetch.fetch(req, 'timeouts')
            res.write('data: ' + JSON.stringify(data) + '\n\n')
        }, 2000)
    }
}