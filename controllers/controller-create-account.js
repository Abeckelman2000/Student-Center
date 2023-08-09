const bcrypt = require('bcrypt')
const {getStudents, addStudent} = require('../utils/database')
const {generateRandom8Digit} = require('../utils/random')

const getPage = async (req, res)=>{
  res.status(200).send()
}
const postCreateAccount = async (req, res)=>{
  //Authenticate user
  try{
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    console.log(salt)
    console.log(hashedPassword)


    const user = {username: req.body.username, password: hashedPassword, FirstName: req.body.FirstName, LastName: req.body.LastName, studentID: generateRandom8Digit()}

    console.log(user)
    let query = addStudent(user)
    res.status(201).send("Account successfully created")
  }
  catch{
    res.status(500).send("Failed to create account") // status 500: Internal server error
  }
}

module.exports = {
  postCreateAccount,
  getPage
}