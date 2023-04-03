require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const departmentRoutes = require('./routes/Department')
const personalinfoRoutes = require('./routes/PersonalInfo')
const dependentRoutes = require('./routes/Dependent')
const cors = require('cors')

// express app
const app = express()

// middleware
app.use(express.json())
app.use(cors())


// routes
app.use('/api/department/', departmentRoutes)
app.use('/api/personalinfo/', personalinfoRoutes)
app.use('/api/dependent/', dependentRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
  
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 