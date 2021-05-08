const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/', function (req, res) {
    res.sendFile(__dirname+"/index.html")
  })
  
  app.get('/about', function (req, res) {
    res.sendFile(__dirname+"/About.html")
  })
  app.listen(PORT, function(){
      console.log("Server started on "+PORT);
  })