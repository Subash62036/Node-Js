var formidable = require("formidable");
var http = require("http");
var fs = require("fs");


http.createServer(function(req, res){

    if(req.url =='/fileupload'){
        
        var form = new formidable.IncomingForm();
        form.parse(req, function(error, field, files){
            //res.write('file has upload');
        
            var oldpath = files.filetoupload.filepath;
       
            var newpath = 'C:\\Users\\Codeclouds-Subashp\\Desktop\\Codeclouds\\Shopify\\Mens\\Test' + files.filetoupload.originalFilename;
            fs.rename(oldpath, newpath, function(error){
                 if(error) throw error;
                 res.write('file uploaded successfully');
                 res.end();
            })
            
        })
        
    }else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();

    }

   
}).listen(8000);