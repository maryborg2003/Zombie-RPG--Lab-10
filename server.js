
const express = require('express');
const path = require('path');

/*
const Pool = require('pg').Pool;

const pool = new Pool({
  database: 'postgres',
  server: 'localhost',
  database: 'postgres',
  password: '$HarrietPorter24',
  port: 5432,
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
app.use(express.static("."));

app.get("/mary-info", function(req, res){

    res.json("Mary Borg");

})

app.listen(5050, function(){
  console.log("Server running")
})
