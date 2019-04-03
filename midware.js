
var express = require('express');
 
var app = express();
function logger(req,res,next){
  console.log(new Date(), req.method, req.url);
  next();
}
app.use(logger);
app.get('/hello',hello);

function hello(req,res,next){
  res.write('Hello \n');
   res.end();
}
var server = app.listen(3000);