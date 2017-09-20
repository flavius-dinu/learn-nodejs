var fs = require('fs');

// SYNC

// fs.mkdirSync('stuff');
// fs.rmdirSync('stuff');

// ASYNC
// fs.mkdir('stuff', function(){
//   fs.readFile('readMe.txt', 'utf8', function(err, data){
//     fs.writeFile('./stuff/writeMe.txt', data);
//   });
// });

// Remove File first, and after that remove the directory
fs.unlink('./stuff/writeMe.txt', function(){
  fs.rmdir('stuff');
});
