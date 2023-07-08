const bcrypt = require('bcrypt')
const getLogin = (req, res)=>{
  res.status(200).send('Please enter your username and password')
}

const postLogin = async (req, res)=>{
  // Authenticate user
  try{
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    console.log(salt)
    console.log(hashedPassword)
    const user = {name: req.body.name, password: hashedPassword}
  }
  catch{
    res.status(500).send()    // status 500: Internal server error
  }
}

module.exports = {
  getLogin,
  postLogin
}