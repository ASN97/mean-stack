var express = require('express');
var app = express();
var fs = require("fs");
var foo = require('./rbooks.json');

app.get('/listbooks', function (req, res) {
   fs.readFile( __dirname + "/" + "rbooks.json", 'utf8', function (err, data) {
      console.log( data );
     // res.end( data );
     
         res.send(foo);
     
   });
})
app.get('/writebooks',function(req,res){


   'use strict';

   const fs = require('fs');
   
   let book4 = {  
      "name" : "CCPT",
      "author" : "abhirami",
      "price" : "300",
      "genre": "Fiction"
   };
   
   let data = JSON.stringify(book4);  
   fs.writeFileSync('wbooks.json', data);  

   console.log('Books being written')

});



var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})