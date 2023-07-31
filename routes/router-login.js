const express = require('express')
const router = express.Router()

const{
  getLogin,
  postLogin,
} = require('../controllers/controller-login')

router.route('/')
.get(getLogin)
.post(postLogin)


module.exports = router