const express = require('express')
const router = express.Router()

const {
  postCreateAccount,
  getPage
} = require('../controllers/controller-create-account')


router.route('/')
.get(getPage)
.post(postCreateAccount)

module.exports = router