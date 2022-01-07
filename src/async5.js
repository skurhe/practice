const mysql=require("mysql");
const Promise=require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo={
    host:"localhost",
    user:"root",
    password:"cdac",
    database:"cdac",
};

const checkConnection= async()=>{
    const connection=mysql.createConnection(dbinfo);
    
    await connection.connectAsync();

    console.log("connection succsided");

    await connection.endAsync();
};

checkConnection();
