const mongoose = require('mongoose')

const Schema = mongoose.Schema

const departmentSchema = new Schema({
  company: {
    type: String,
    required: true
  },

  position: {
    type: String,
    required: true
  }
}) 

module.exports = mongoose.model("Department", departmentSchema)