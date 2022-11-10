const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb+srv://mendhey_atlas:atlasmendheys@cluster0.1tktooq.mongodb.net/jidoka")

module.exports = connection