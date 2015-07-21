//Problem: We need a simple way to look at a user's badge count and Javascript points from a web browser
//Solution: Use Node.js to perform the profile look ups and server our template via HTTP

var router = require('./router.js');


// Create a web server

var http = require('http');
http.createServer(function(request, response) {
  //response.end('Hello World\n');
  router.home(request, response);
  router.user(request, response);
}).listen(3000);
console.log('Server running at port:3000/');
