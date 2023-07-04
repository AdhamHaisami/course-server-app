
const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.send('<h1>it is working </h1>')
})

server.get('/test', (req, res) => {
    res.json({
        'message': 'hello world',
            'status': '200'
    })
})

server.listen(4040, () => {
    console.log('Server is running!');
})