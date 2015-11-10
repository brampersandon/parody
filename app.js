var httpProxy = require('http-proxy');
var config = require('./headers.example.json');
var port = process.env.PORT || 8080;

proxy = httpProxy.createProxyServer({target: config.target}).listen(port, function(){
  console.log("listening on port " + port);
});

proxy.on('proxyReq', function(proxyReq, req, res, options) {
  if (config.debug) {
    console.log(`Proxying request to %s`, config.target);
    console.log("With headers: ");
  }
  for (header in config.headers) {
    proxyReq.setHeader(header, config.headers[header]);
    if (config.debug) {
      console.log(`\t%s = %s`, header, config.headers[header]);
    }
  }
});

proxy.on('error', function(err, req, res) {
 res.writeHead(500, {
      'Content-Type': 'text/plain'
    });
 
  res.end('Something went wrong -- reload.'); 
});
