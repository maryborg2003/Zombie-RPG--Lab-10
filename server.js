const express = require("express");
const bodyParser = require("body-parser");
const Pool = require('pg').Pool;
const app = express();
//const path = require('path');

app.use(express.static('.'));
app.use(bodyParser.urlencoded({extended: true}));

const pool = new Pool({
   user: 'postgres',
   host: 'localhost',
   database: 'postgres',
   password: '$HarrietPorter24',
   port: 3000,
});

app.get("/api/person", (req, res) => {
   const sql = "SELECT * FROM person";

   pool.query(sql, (error, results) => {
       if (error) throw error;

       res.status(200).json(results.rows);
   });
});

app.post("/api/person/create", (req, res) => {
   console.log(req.body);

   const name = req.body.name;
   const email = req.body.email; 
   const donation = req.body.donation;

   const sql = "INSERT INTO person (name, email, donation) VALUES ($1, $2, $3)";
   const data = [name, email, donation]; 

   pool.query(sql, data, (error, results) => {
       if (error) throw error;

       
       pool.query('COMMIT', (err) => {
           if (err) {
               
               throw err;
           }
           console.log('Transaction completed.');
       });

       res.status(200).send("ok");
   });
});

app.listen(5500, () => {
   console.log("Listening on port 5500");
});


