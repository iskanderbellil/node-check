let http = require('http');
let t2m = require('through2-map')
 
let server = http.createServer(function(req, res){
   req.pipe(t2m(function(chunk){
       return chunk.toString().toUpperCase();
   })).pipe(res);
});
server.listen(process.argv[2]);