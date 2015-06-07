var time = require('./timer.js');

var timer = [];
var index = 0;
var defaultNum = 3000;

timer[index] = new time();
timer[index].setTimeout(function(){
	console.log("FOOBAR");
},defaultNum);
index ++;


timer[0].add(defaultNum);
