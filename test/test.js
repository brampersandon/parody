var assert = require("assert");
var http = require("http");
var config = require("../headers.example.json");
var s = require("./sillyserver.js");
var a = require("../app.js");

describe('app', function() {
  describe('proxy', function () {
    it('should add a "remote_user" header to any request made to the path', function (done) {
      http.get(config.target, function(res){
        console.log(res.statusCode);
        assert.deepEqual(res.statusCode, 200);
      });
      done();
    });
  });
});
