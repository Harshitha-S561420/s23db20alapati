const mongoose = require("mongoose")
const jarSchema = mongoose.Schema({
material: {type:String, minlength:5,maxlength:200},
colour: {type:String, minlength:2,maxlength:150},
cost: {type:Number, min:4,max:1500}
})
module.exports = mongoose.model("jar",jarSchema)
