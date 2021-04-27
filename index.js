const express = require('express');
const path = require('path');
const app = express();

require('dotenv').config()

app.use(express.static(__dirname + '/my-app/build'));

app.get('/', function (req, res) {
    console.log(path.join(__dirname+ '/my-app/build'))
    res.sendFile(path.join(__dirname));
});

app.listen(process.env.PORT || 8080, () => {
    console.log(path.join(__dirname+ '/my-app/build'))
    console.log(process.env.NODE_ENV)
    console.log(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL)
    console.log(process.env.GOOGLE_PRIVATE_KEY)
});