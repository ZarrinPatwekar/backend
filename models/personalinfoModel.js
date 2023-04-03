const mongoose = require('mongoose')

const Schema = mongoose.Schema

const personalinfoSchema = new Schema({
    fname: {
    type: String,
    required: true
  },

   mname: {
    type: String,
    required: true
  },

   lname: {
    type: String,
    required: true
  },

   gender: {
    type: String,
    required: true
  },

   contact: {
    type: Number,
    required: true
  },

   date: {
    type: String,
    required: true
  },

   hobbies: {
    type: String,
    required: true
  },

   address: {
    type: String,
    required: true
  }
}) 

module.exports = mongoose.model("PersonalInfo", personalinfoSchema)
