var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'contenet-type':'text/plan'});
    res.end('Hello! .. start new life man...');
    

}).listen(1337,'127.0.0.1')
console.log('Web server started')