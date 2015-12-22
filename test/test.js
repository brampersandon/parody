var assert = require("assert");
var http = require("http");
var config = {
  target: "http://localhost:4567",
  headers: {
    "remote_user": "blerg"
  },
  port: 8080
}
var s = require("./sillyserver.js");
var a = require("../app.js");
var exec = require('child_process').exec;

describe('app', function() {
  describe('proxy', function () {
    it('should add a "remote_user" header to any request made to the path', function (done) {
      http.get(config.target, function(res){
        assert.deepEqual(res.statusCode, 200);
      });
      done();
    });
    it('should use "spheaders" if passed in as an argument', function (done) {
      config = require('./spheaders.json');
      exec('node ../app.js spheaders.json', function(err, stdout, stderr){
        assert.notEqual(config.target, undefined);
        assert((config.target).test(stdout));
      });
      done();
    });
    it('should use "headers" if no argument passed', function (done) {
      config = require('../parody.json');
      exec('node ../app.js', function(err, stdout, stderr){
        assert.notEqual(config.target, undefined);
        assert((config.target).test(stdout));
      });
      done();
    });
  });
});
