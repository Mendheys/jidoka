const mongoose = require("mongoose")

const graphSchema = new mongoose.Schema({
    time : String,
    qty : Number
})

const graphModel = mongoose.model("graph", graphSchema)
module.exports = graphModel