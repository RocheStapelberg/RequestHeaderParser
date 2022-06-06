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
    
    let now = new Date();
    console.log('\x1b[36m%s\x1b[0m', `New request from ${ ip } | Time: ${now} `);
    //Send response as JSON
    res.json(data);
});

module.exports = whoamiRouter;