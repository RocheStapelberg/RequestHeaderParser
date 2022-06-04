let express = require('express');
const whoamiRouter = express.Router();

whoamiRouter.get('/whoami', (req, res) => {
    const ip = req.ip;
    const language = req.headers['accept-language'];
    const userAgent = req.headers['user-agent'];
    const data = {"ipaddress": ip, "language": language,"software": userAgent }
    res.json(data);
});

module.exports = whoamiRouter;