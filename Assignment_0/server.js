const http = require('http');

const server = http.createServer((req, res)=>{//Event Emitter
    if(req.url === '/home'){
        res.write('Welcome to homepage..!!!');
        res.end()
    }
    else if(req.url === '/about'){
        res.write('This is the About Page');
        res.end()
    }
    else{
        res.write('Page not Found');
        res.end()
    }
});

//Web Server


server.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})