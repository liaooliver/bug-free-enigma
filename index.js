const express = require('express');
const app = express();
require('dotenv').config()

app.get('/', (request, response) => {
    response.send(`
        < h1 > Hello, I'm Larry.</h1>
        < h2 > HELLO, TEST　CICS DONE</h2 >
        <p>ENV VAR: ${ process.env.NODE_ENV }, ENV VAR: ${ process.env.NODE_ENV }</p>
    `)
})

app.listen(process.env.PORT || 8080, () => {
    console.log(process.env.NODE_ENV)
    console.log(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL)
    console.log(process.env.GOOGLE_PRIVATE_KEY)
});