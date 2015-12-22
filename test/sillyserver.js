/**
  *
  * sillyserver.js
  * An HTTP server that will complain unless you introduce yourself
  * with a remote_user header.
  *
  * Created by Brandon Johnson <b@johnsonmn.org> for use with
  * [parody](http://github.com/skylineproject/parody)
  *
  **/
var http = require('http');

http.createServer(function(req,res){
  if (req.headers['remote_user'] == "blerg") {
    res.writeHead(200);
    res.write("hi, pal!");
  } else {
    res.writeHead(403);
    res.write("boo");
  }
  res.end();
}).listen(4567);
