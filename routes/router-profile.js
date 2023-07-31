const express = require('express')
const router = express.Router()

const {getProfile} = require('../controllers/controller-profile')
const { authenticateToken } = require('../controllers/controller-login')


router.route('/')
.get(authenticateToken, getProfile)

module.exports = router