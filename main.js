// Import events
// var events = require('events');

// var eventEmitter = new events.EventEmitter();

// // Bind event and event  handler as follows
// eventEmitter.on('eventName', eventHandler);

// // Fire an event 
// eventEmitter.emit('eventName');

const EventEmitter = require('node:events');

const eventEmitter = new EventEmitter();

var https = require('node:https');
var fs = require('fs');

var options = {
    pfx:fs.readFileSync('server.pfx')
};
listener = function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/html
   response.writeHead(200, {'Content-Type': 'text/html'});
  
   // Send the response body as "Hello World"
   response.end('<h2 style="text-align: center;">Hello World</h2>');
};

server = https.createServer(options, listener);
server.listen(3000);

// Console will print the message

console.log('Server running at https://127.0.0.1:3000/');