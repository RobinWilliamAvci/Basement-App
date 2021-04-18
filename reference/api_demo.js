const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        const users = [
            {name: 'Bob Smith', age:40},
            {name: 'John Doe', age:22},
            {name: 'Michael Hammerhead', age:77}

        ]

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(content);

    }
    console.log(req.url)

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log('Server runnung on '+ PORT))