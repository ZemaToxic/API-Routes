const fetchFile = require('../utils/fetchFile')

module.exports = {
    post: function (req, res) {
       res.send('Hello?');
    },
    
    get: async function (req, res) {
        try {
            const file = await fetchFile.fetchFile(req, 'bot_bans');
            res.send(file)
        }
        catch (err) {
            res.send(err)
        }
    }
}