const express = require('express')
const router = express.Router()

const {
  postCreateAccount
} = require('../controllers/controller-create-account')

router.route('/')
.post(postCreateAccount)

module.exports = router