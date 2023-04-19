const mongoose = require("mongoose")
const jarSchema = mongoose.Schema({
material: String,
colour: String,
cost: Number
})
module.exports = mongoose.model("jar",jarSchema)