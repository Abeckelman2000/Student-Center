const express = require('express')
const dotenv = require('dotenv')
dotenv.config({path: './.env'})
//create connection
const mysql = require('mysql')
const dbPool = mysql.createPool({
  host:     process.env.DATABASE_HOST,
  user:     process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  port:     process.env.DATABASE_PORT
});


async function getStudents(){
  console.log('here')
  const results = await new Promise((resolve, reject)=>{
    dbPool.query('SELECT * FROM student', (err, results)=>{
      if(err){
        reject(err)
      }
      resolve(results)
    })
  })

  return results
}

const students = getStudents()
console.log(students)

module.exports = {
  getStudents
}
