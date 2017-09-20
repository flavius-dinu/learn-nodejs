var events = require('events');
var util = require('util');

var Person = function(name){
  this.name = name;
};

util.inherits(Person, events.EventEmitter); // Person Objected inherited EventEmitter

var james = new Person('james');
var manny = new Person('manny');
var ryu = new Person('ryu');

var people = [james, manny, ryu];

people.forEach(function(person){
  person.on('speak', function(mssg){
    console.log(person.name + ' said: ' + mssg);
  });
});

james.emit('speak', 'hey dudes');
ryu.emit('speak', 'I want some chilli');

// var myEmitter = new events.EventEmitter();
//
// myEmitter.on('someEvent', function(mssg){ // Listening for someEvent
//   console.log(mssg);
// });
//
// myEmitter.emit('someEvent', 'the event was emitted'); // Emitting someEvent
