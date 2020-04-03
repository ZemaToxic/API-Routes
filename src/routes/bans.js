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

        res.set({
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache",
            Connection: "keep-alive"
        })
        setInterval(async () => {
            let data = await fetch.fetch(req, 'bot_bans', 'ID')
            res.write('data: ' + JSON.stringify(data) + '\n\n')
        }, 2000)
    }
}