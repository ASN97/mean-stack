var express = require('express');
var app = express();


app.get('/hello', function(req, res){
   res.send("Hello World!");
  });



var things = require('./things.js');

app.use('/things', things);
//he function is executed every time the app receives a request.



app.use(function (req, res, next) {
   console.log('Time:', Date.now())
   next()
 });



 app.get('/demomid',first,second);
 msg='The first user is Aromal-Roll number 34'
 mgs='The first user is Priyanka-Roll number 20'
 function first(req,res,next)
 {
   console.log(msg);
   //res.write(msg);
   finalmsg=msg+' '+mgs;
   next();
 }

 function second(req,res,next)
 {   console.log(finalmsg);
  res.send(finalmsg);
 
   
 }

app.get('/bookname/:bname/author/:auth',function(req,res){
  res.send('You requested book with bookname '+req.params.bname+' of author '+req.params.auth);
}

);





app.listen(3000);