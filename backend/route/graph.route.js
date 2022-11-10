const express = require("express");
const graphModel = require("../models/graph.model");


const graphController = express.Router();

graphController.post("/add", async (req,res) => {
    const payload = req.body;

    const {time,qty} = payload

    const graph = new graphModel({
        time,
        qty
    })
    await graph.save()
    res.send("data saved")

})

graphController.get("/fetch", async (req,res) => {
    const graphData = await graphModel.find({})
    res.send(graphData)
})

module.exports = graphController