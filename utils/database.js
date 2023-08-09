express = require('express')
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

async function addStudent(student) {
  const insertQuery = `INSERT INTO student SET ?`
  let query = dbPool.query(insertQuery, student, (err, result) =>{
    if(err) throw err
    console.log(result)
  })
}

// Close the database pool when your application is shutting down
process.on('SIGINT', () => {
  dbPool.end((err) => {
    if (err) {
      console.error('Error closing the database pool:', err);
    } else {
      console.log('Database pool closed.');
    }
    process.exit();
  });
});

module.exports = {
  getStudents,
  addStudent
}