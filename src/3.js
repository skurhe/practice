const mysql=require("mysql");

const dbinfo={
 
    host:"localhost",
    user:"root",
    password:"cdac",
    database:"cdac",
};

const connection=mysql.createConnection(dbinfo);

connection.connect();

user={username:"sidkabhai",password:"sidkapass"};

let sql=`insert into user (username,password) values("${user.username}","${user.password}");`

connection.query(sql);

console.log("Connection Succsessfull...........");


connection.end();