const next = require('next');
const express = require('express');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const port = process.env.PORT || 3000
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
            console.log('Listening on port ' + port)
            // console.log(server.)
    })

    server.get('', (req, res) => {
        return res.send('site up')
        console.log(res.status(200))
    })
})
