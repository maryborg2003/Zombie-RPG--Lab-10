const http = require('http');
const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static("express"));

app.use('/home', function(req,res){
    res.sendFile(path.join(__dirname+'/express/js/zomb1.html'));
  });

app.use('/game', function(req,res){
  res.sendFile(path.join(__dirname+'/express/js/zomb2.html'));
});

app.use('/about', function(req,res){
  res.sendFile(path.join(__dirname+'/express/js/zombieaboutpage.html'));
});

const server = http.createServer(app);
const port = 8383;
server.listen(port);

console.debug('Server listening on port ' + port);