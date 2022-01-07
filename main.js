const express = require("express");
//const res = require("express/lib/response");
const app = express();
app.use(express.json());

const {addRecord, getRecord} = require("./example.js")

const cors = require("cors");
app.use(cors());

app.post("/add-records", async (req, res) => {


    const example = req.body;
    await addMessage(example);
    res.json({ message: "message Added Successfully" });

   });

app.get("/get-records", async (req, res) => {
    const list = await getRecord();
    res.json(list);
  });

app.listen(4900, () => console.log("Apne ko kya..."));
