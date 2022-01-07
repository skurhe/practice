const mysql=require("mysql");
const Promise =require("bluebird");

Promise.promisifyAll(require("mysql/lib/Connection").prototype)

const dbinfo={
    host:"localhost",
    user:"root",
    password:"cdac",
    database:"cdac",
};

async function connectionCheck(){
    const connection=mysql.createConnection(dbinfo);
    await connectAsync();
    console.log("connection success!!!!!!!!!!!!!!!!");
    await connection.endAsync();

}
connectionCheck();

// const connection=mysql.createConnection(dbinfo);

// connection.connect();

// console.log("connection success!!!!!!!!!!!!!!!!");

// connection.end();

