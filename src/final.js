const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const { addUser, selectAllUser } = require("./user");

app.get("/1",  async(req, res) => {
  const list = await selectAllUser();

  res.json(list);
});

app.post("/add-user", async (req, res) => {
  const user = req.body;
  await addUser(user);
  res.json({ message: "User Added Successfully" });
});

app.listen(4000, () => console.log("cls server started"));