const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
// create connection
const mysql = require('mysql')
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1942',
  database : 'myDB',
  port     : '3306'
})

// connect
db.connect((err)=>{
  if(err){
    throw err
  }
  console.log("MySQL connected...")
})
const login = require('./routes/router-login')

// static assets
app.use(express.static(`./methods-public`))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse JSON
app.use(express.json())

app.use(`/login`, login)

app.listen(3000, ()=>{
  console.log('Server listening on port 3000...')
})