var http = require('http');
var fs = require('fs');

// Simple Example

// var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
// var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

// myReadStream.on('data', function(chunk){
//   console.log('NEW CHUNK RECEIVED:');
//   // console.log(chunk);
//   myWriteStream.write(chunk);
// });

// myReadStream.pipe(myWriteStream);

// Server Example
var server = http.createServer(function(req, res){
  console.log('request was made: ' + req.url);
  // SENDING PLAIN TEXT
  // res.writeHead(200, {'Content-Type': 'text/plain'});
  // var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
  // myReadStream.pipe(res);

  // SENDING HTML
  // res.writeHead(200, {'Content-Type': 'text/html'});
  // var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
  // myReadStream.pipe(res);

  // SENDING JSON
  res.writeHead(200, {'Content-Type': 'application/json'});
  var myObj = {
    name: 'Ryu',
    job: 'Ninja',
    age: 29
  };
  res.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1');
console.log('yo dawgs, now listening to port 3000');
