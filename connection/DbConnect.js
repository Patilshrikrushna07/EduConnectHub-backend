const mysql = require('mysql')

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "edublog",
})

const Sequelize = require('sequelize');

const sequelize = new Sequelize('edublog', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

con.connect((err)=>{
    if(err){
        console.warn("error");
    }
    else{
        console.log("Database Connect Sucessfully");
    }
})

module.exports = {con,sequelize};

