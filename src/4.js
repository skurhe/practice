const mysql=require("mysql");
//const Connection = require("mysql/lib/Connection");

const process=require("process");

const dbinfo={
    host:"localhost",
    user:"root",
    password:"cdac",
    database:"cdac",
};

const conection=mysql.createConnection(dbinfo);

conection.connect();

const user={username:process.argv[2],password:process.argv[3]};

let sql=`insert into user(username,password) values("${user.username}","${user.password}");`

conection.query(sql);

conection.end();