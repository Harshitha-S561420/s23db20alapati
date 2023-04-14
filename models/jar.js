const mongoose = require("mongoose")
const jarSchema = mongoose.Schema({
material: String,
color: String,
cost: Number
})
module.exports = mongoose.model("jar",jarSchema)