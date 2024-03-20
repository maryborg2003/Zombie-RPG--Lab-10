const http = require('http');
const express = require('express');
const path = require('path');

/*
const Pool = require('pg').Pool;

const pool = new Pool({
  database: 'postgres',
  server: 'localhost',
  database: 'postgres',
  password: '$HarrietPorter24',
  port: 3000,
})

app.get("/prices", (req, res) => {

  const sql = "select * from address";

  pool.query(sql, (error, results) => {

      if (error) throw error

      res.status(200).json(results.rows)
  })
});
*/

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
const port = 5050;
server.listen(port);

console.debug('Server listening on port ' + port);