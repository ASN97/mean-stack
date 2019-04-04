var express = require('express')
var app = express()
var standard_input = process.stdin;
standard_input.setEncoding('utf-8');
var readline = require('readline-sync');

var name = readline.question("What is your name?");

console.log("Hi " + name + ", nice to meet you.");
console.log('Enter Your age')
 var age=readline.question("Please?");
var checkage = function (req, res, next) {
 
  
   if(age>18){
	        //res.send("Valid");
			console.log("Valid age");
			//res.end()
   }
		else
		{
			//res.send("InValid");
			console.log("Invalid age");
			//res.end();
		}
  next()
}

app.use(checkage)

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000)