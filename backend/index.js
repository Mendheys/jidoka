const express = require("express");
const connection = require("./config/db");
const graphController = require("./route/graph.route");
const cors = require("cors")

const app = express();

app.use(express.json())
app.use(cors())

app.get("/", (req,res) => {
    res.send("Home Page")
})

app.use("/graph", graphController)

app.listen(8080, async () => {
    try{
        await connection
        console.log("connetcted on port 8080")
    }
    catch(err){
        console.log("not connected",err)
    }
})