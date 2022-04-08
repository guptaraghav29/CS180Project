const next = require('next');
const express = require('express');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const port = 3000
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express()

    server.all('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, (err) => {
        if (err) 
            throw err
        else
            console.log(`Webpage ready on http://localhost:${port}`)
    })

    server.get('*', (req, res) => {
        return res.send('site up')
    })
})

console.log("hello ")