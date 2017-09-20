var fs = require('fs');

// Sync
// var readMe = fs.readFileSync('readMe.txt', 'utf8'); //blocks the code until the reading is finished
//
// fs.writeFileSync('writeMe.txt', readMe);

// console.log(readMe);


// Async --> non blocking code.
fs.readFile('readMe.txt', 'utf8', function(err, data){
  // console.log(data)
  fs.writeFile('writeMe.txt', data);
});

// fs.unlink('writeMe.txt'); // deletes file

console.log('test')
