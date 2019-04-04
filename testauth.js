var msg = require('./Module/index.js');
var readline = require('readline-sync');

var uname = readline.question("Enter username");
var pass=readline.question("Enter password");


msg.authenticate(uname,pass);
