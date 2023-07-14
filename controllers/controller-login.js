const bcrypt = require('bcrypt')
const express = require('express')
const {getStudents} = require('../utils/database')

let listStudents = null

const getLogin = async (req, res)=>{
  listStudents = await getStudents()
  console.log(listStudents)
  res.json(listStudents)

}

const postLogin = async (req, res)=>{
   if(!listStudents){
    listStudents = await getStudents((err, results)=>{
      if(err){
        console.log(err)
      }
      else{
        console.log('yoyoyooy')
      }
    })
   }


   let {username, password, FirstName, LastName} = req.body
   console.log(req.body)
  if(!listStudents.includes(username)){
    res.status(404).send('Email not registered. Please try again or create an account')
  }
  else{
    res.status(201).send('User exists in database')
  }
  








  // try{
  //   const salt = await bcrypt.genSalt()
  //   const hashedPassword = await bcrypt.hash(req.body.password, salt)
  //   console.log(salt)
  //   console.log(hashedPassword)
  //   const user = {name: req.body.name, password: hashedPassword}
  //   res.status(201).send()
  // }
  // catch{
  //   res.status(500).send()    // status 500: Internal server error
  // }
}

module.exports = {
  getLogin,
  postLogin
}