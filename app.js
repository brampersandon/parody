#!/usr/bin/env node

var httpProxy = require('http-proxy');
var path = require('path');
var fs = require('fs');
var argv = require('minimist')(process.argv.slice(2));

/* Configure things */
var file = argv._[0] || './parody.json';
var config = require(path.join(process.cwd(), file));
config.port = config.port || process.env.PORT || 8080;
config.debug = config.debug || false;

/* Initialize the server */
proxy = httpProxy.createProxyServer({target: config.target}).listen(config.port,
  function(){
    console.log("Listening on port " + config.port);
  }
);

/* When an HTTP request is made to the proxy, add headers */
proxy.on('proxyReq', function(proxyReq, req, res, options) {
  console.log(`Adding headers on requests from %s to %s`, config.port, config.target);
  if (config.debug) {
    console.log("With headers: ");
  }
  /* TODO: use forEach or some other ES6 goodness */
  for (header in config.headers) {
    proxyReq.setHeader(header, config.headers[header]);
    if (config.debug) {
      console.log(`\t%s = %s`, header, config.headers[header]);
    }
  }
});

/* Notify on error */
proxy.on('error', function(err, req, res) {
 res.writeHead(500, {
      'Content-Type': 'text/plain'
    });

  res.end('Something went wrong -- reload.');
});
