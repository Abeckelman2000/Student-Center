const express = require('express')

const getProfile = async (req, res) =>{
  res.json()
  res.status(200).send('made it')
}

module.exports = {getProfile}