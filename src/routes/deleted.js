const fetch = require('../utils/fetchDeleted')
const edit = require('../utils/editDeleted')

module.exports = {
    post: async function (req, res) {
        try {
            await edit.edit(req, 'deleted');
            res.send("Data Added")
        } catch (err) { res.send(err) }
    },

    get: async function (req, res) {

        res.set({
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache",
            Connection: "keep-alive"
        })

        let data = await fetch.fetch(req, 'deleted')
        res.write('data: ' + JSON.stringify(data) + '\n\n')

        setInterval(async () => {
            data = await fetch.fetch(req, 'deleted')
            res.write('data: ' + JSON.stringify(data) + '\n\n')
        }, 2000)
    }
}