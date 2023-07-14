const bcrypt = require('bcrypt')


const postCreateAccount = async (req, res)=>{
  // Authenticate user
  // try{
  //   const salt = await bcrypt.genSalt()
  //   const hashedPassword = await bcrypt.hash(req.body.password, salt)
  //   console.log(salt)
  //   console.log(hashedPassword)
  //   const user = {name: req.body.name, password: hashedPassword}

  //   res.status(201).send("Account successfully created")
  // }
  // catch{
  //   res.status(500).send("Failed to create account") // status 500: Internal server error
  // }
}

module.exports = {
  postCreateAccount
}