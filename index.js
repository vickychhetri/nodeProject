var express = require('express')
var app = express()
app.get('/', function (req, res) {
    res.sendFile(__dirname+"/index.html")
  })
  
  app.get('/about', function (req, res) {
    res.sendFile(__dirname+"/About.html")
  })
  app.listen(3000, function(){
      console.log("Server started on 3000");
  })