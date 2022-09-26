require('dotenv').config(); 
const express = require ("express");
const { dbConnect } = require('./utils/dbConnection');
const cors = require("cors");
const bodypaser = require("body-parser");
const bankRouter = require("./routes/bank.router")


App = express();

App.use(cors());
App.use(bodypaser.json());
App.use("/api/Bank",bankRouter)
 



const PORT = process.env.PORT;  //env eke port eka gnnwa

App.listen(PORT, () =>{
    console.log(`backend running on http://localhost:${PORT}`);
    dbConnect(); //db connection eka blnwa
})