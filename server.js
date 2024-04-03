
const express = require('express');
const path = require('path');
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: true}));
const Pool = require('pg').Pool;

const pool = new Pool({
  database: 'postgres',
  server: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
})

app.get("/prices", (req, res) => {

  const sql = "select * from address";

  pool.query(sql, (error, results) => {

      if (error) throw error

      res.status(200).json(results.rows)
  })
});


const app = express();
app.use(express.static("."));

app.listen(8383, function(){
  console.log("Server running on port 8383")
})
