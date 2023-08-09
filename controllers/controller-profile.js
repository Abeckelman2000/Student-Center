const express = require('express')
const {getStudents} = require('../utils/database')

const getProfile = async (req, res) =>{
  listStudents = await getStudents()
  
  let student = listStudents.filter(stud => stud.username === req.user.username)

  res.status(200).json(student)
}

module.exports = {getProfile}