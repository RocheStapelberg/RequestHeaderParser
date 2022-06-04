let express = require('express');
const whoamiRouter = express.Router();

whoamiRouter.get('/whoami', (req, res) => {
    //Fetch ip from request header.
    const ip = req.ip;
    //Fetch language from request header.
    const language = req.headers['accept-language'];
    //Fetch user Agent info from request header.
    const userAgent = req.headers['user-agent'];
    //Store data in a JSON object.
    const data = {"ipaddress": ip, "language": language,"software": userAgent }
    //Send response as JSON
    res.json(data);
});

module.exports = whoamiRouter;