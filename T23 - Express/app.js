var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/', urlencodedParser, function(req, res){
  console.log(req.body);
  res.render('index-success', {data: req.body});
})

app.set('view engine', 'ejs'); // EJS for views. By default ejs is looking in the views

app.use('/assets', express.static('assets'));

app.get('/', function(req, res){
  // res.sendFile(__dirname + '/index.html');
  res.render('index', {qs: req.query}); // Query strings in browser

});

app.get('/contact', function(req, res){
  // console.log(req.query); // Query strings in browser localhost:3000/contact?dept=marketing&person=joe
  res.send('this is the contact page');
});

// req.params holds the dynamic url
app.get('/profile/:name', function(req, res){
  // res.send('You requested to see a profile with the name of ' + req.params.name)

  // looking in views directory
  var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
  res.render('profile', {person: req.params.name, data: data}); // person will be used in the EJS template
});

// EJS is a template you can use for javascript code in html pages. similar to JSP.
app.listen(3000);
