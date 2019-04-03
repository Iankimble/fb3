// Calling express
const express = require('express');
const app = express();

const path = require('path');

const router = express.Router();

// using all html, css, and js files
app.use(express.static('public'))

// "/" goes to home page
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/', router);
app.listen(process.env.port || 8080);

console.log('Running at Port 8080');