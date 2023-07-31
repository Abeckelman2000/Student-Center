const bcrypt = require('bcrypt')
const express = require('express')
const {getStudents} = require('../utils/database')
const jwt = require('jsonwebtoken')

let listStudents = null


const getLogin = async (req, res)=>{
  listStudents = await getStudents()
  res.json(listStudents)

}

const postLogin = async (req, res)=>{
  listStudents = await getStudents((err, results)=>{
    if(err){
      console.log(err)
    }
    else{
      console.log('yoyoyooy')
    }
  })


   const user = listStudents.find(user => user.name === req.body.name)
   if(user == null){
     res.status(404).send('Invalid credentials or email not registered. Please try again or create an account')
   }
   else{
     console.log('User exists in the database, continuing verification...')
   }

   try{
    bcrypt.compare(req.body.password, user.password)
    //res.status(200).send("Password decrypted and verified. Logging in")
   }
   catch{
     res.status(500).send('Internal server error')    // status 500: Internal server error
   }

   //serializing user with JSON webtokens
   console.log(typeof user)
   const accessToken = jwt.sign(req.body.username, process.env.ACCESS_TOKEN_SECRET)
   res.json({accessToken: accessToken})

}

function authenticateToken(req, res, next){
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if(token == null) return res.sendStatus(401)


  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) =>{
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })


}


module.exports = {
  getLogin,
  postLogin,
  authenticateToken
}