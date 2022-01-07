const mysql=require("mysql");
const Promise=require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

dbinfo={
host:"localhost",
user:"root",
password:"cdac",
database:"cdac",
};

async function selectAllUser(){
    const connection = mysql.createConnection(dbinfo);
    console.log("connection sucsess...........");
    let sql=`select * from user`;
await connection.queryAsync(sql);
    const list=await connection.queryAsync(sql);
    await connection.endAsync();
    return list;
}

async function addUser(user){
 const connection=mysql.createConnection(dbinfo);
await connection.connectAsync();
let sql=`insert into user (username,password) values(?,?);`
connection.queryAsync(sql,[user.username,user.password]);
console.log("Entry added to database");
await connection.endAsync();
}
module.exports={selectAllUser,addUser};