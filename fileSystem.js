var http = require("http");
var fs = require("fs");
var url = require("url");
http.createServer( function(req, res){
    var urlPath = url.parse(req.url, true);
    var fileName = "." + urlPath.path;
    console.log(fileName);
    
    fs.readFile(fileName, function(error, data){
        if(error){
            res.writeHead(400, { 'Content-Type' : 'text/html'});
            res.write("erorr");
            return(res.end());
        }
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(data);
        res.end();
    });

}).listen(8000);