const bcrypt = require('bcrypt')
const express = require('express')
const {getStudents} = require('../utils/database')
const {generateToken, authenticateToken} = require('../utils/JWT')

let listStudents = null


const getLogin = async (req, res)=>{
  listStudents = await getStudents()
  res.json(listStudents)

}

const postLogin = async (req, res) =>{
  listStudents = await getStudents((err, results)=>{
    if(err){
      console.log(err)
    }
  })

   const user = listStudents.find(user => user.username === req.body.username)
   if(user == null){
     res.status(404).send('Invalid credentials or email not registered. Please try again or create an account')
   }
   else{
     console.log('User exists in the database, continuing verification...')
   }

   console.log(user)

   try{
    bcrypt.compare(req.body.password, user.password)
    //res.status(200).send("Password decrypted and verified. Logging in")
   }
   catch{
     res.status(500).send('Internal server error')    // status 500: Internal server error
   }

   //serializing user with JSON webtokens
   const accessToken = generateToken({username: user.username})
   res.json({accessToken: accessToken})
}




module.exports = {
  getLogin,
  postLogin
}