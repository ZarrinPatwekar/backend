const mongoose = require('mongoose')

const Schema = mongoose.Schema

const dependentSchema = new Schema({
    fullname: {
    type: String,
    required: true
  },

  rel: {
    type: String,
    required: true
  },

   date: {
    type: String,
    required: true
  },

  occ: {
    type: String,   
    required: true
  }
}) 

module.exports = mongoose.model("Dependent", dependentSchema)


