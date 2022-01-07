const express = require("express");
const app = express();

const {selectAllUser}= require("./user");

app.get("/user",async (req, res) =>{
    const list = await selectAllUser();
    res.json(list);
});



app.listen(4000, () => console.log("server started"));