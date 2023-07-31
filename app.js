const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const login = require('./routes/router-login')
const createAccount = require('./routes/router-create-account')
const profile = require(`./routes/router-profile`)



// static assets
app.use(express.static(`./methods-public`))

// parse form data
app.use(express.urlencoded({ extended: false }))
// parse JSON
app.use(express.json())



// Define Routes
app.use(`/api/login`, login)
app.use(`/api/createaccount`, createAccount)
app.use(`/profile`, profile)


app.listen(3000, ()=>{
  console.log('Server listening on port 3000...')
})