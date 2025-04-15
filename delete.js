var events = require('events');
var http = require('http');

const eventEmitters = new events.EventEmitter();


function listener(){
    
    var x = setTimeout(()=>{
         console.log("This is setTimout callback function ");
    },500);
    // clearTimeout(x);
}

eventEmitters.on('connection', listener);


http.createServer(function(req, res){
     if(req.url === '/fire'){
        res.writeHead(200, {'content-type' : 'text/html'});
        eventEmitters.emit('connection');

        res.end();
     }else{
        res.writeHead(400,{'Content-Type' : 'text/html'});
        res.write("event not fired");
        res.end();
     } 

}).listen(8000);




