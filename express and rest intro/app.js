const http = require('http')

const fs = require('fs');

const server = http.createServer((req,res)=>{
   if(req.url === '/'){
    res.setHeader('Content-Type','text/html');
    res.write("<form action='/products' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form>");
   }
   else if(req.url === '/products' && req.method === 'POST'){
    const body = [];
    req.on('data',(chunk)=>{
        body.push(chunk);
        console.log(body);
    });

    req.on('end',()=>{
        const parsedBody = Buffer.concat(body).toString();
        console.log(parsedBody);
    });
    res.write("<h1>Laptop</h1>");
   }
    res.end();
});

server.listen(3000);