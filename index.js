const express = require('express');
const path = require('path');
const app = express();

require('dotenv').config()

app.use(express.static(path.join(__dirname, 'my-app/build')));

app.get('/', function (req, res) {
    
  res.sendFile(path.join(__dirname, 'my-app/build', 'index.html'));
});

app.listen(process.env.PORT || 8080, () => {
    console.log(__dirname, 'my-app/build', 'index.html')
    console.log(process.env.NODE_ENV)
    console.log(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL)
    console.log(process.env.GOOGLE_PRIVATE_KEY)
});