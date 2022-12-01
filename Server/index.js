const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "prashantdb",
    connectionLimit: 10
})

db.connect(function(err){
    if (err) throw err;
    
    console.log("Connected!");

    
    // var sql = "INSERT INTO player (playerID, playerFirst, playerLast, playerClub) VALUES('1','Bruno', 'Fernandes', 'Man. United')"
    // var sqlQuery  = "INSERT INTO employee (empID, empName, empAge) VALUES('6','Bruno','40')"
    // var sqlQuery = "select * from employee"
    // var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";



    var sql = "CREATE TABLE player(playerID INT NOT NULL AUTO_INCREMENT, playerFirst VARCHAR(100) NOT NULL,  playerLast VARCHAR(100) NOT NULL, playerClub VARCHAR(100) NOT NULL, PRIMARY KEY(playerID))"
    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table Created")
        console.log("Result: ", result);
      });
})


app.listen(3000, () => {
    console.log("running on port 3000")
})