 /** 
 * @license Apache-2.0
 * @copyright Caio Vidinha 2023
 */

 'use strict'

 const router = require('express').Router()


 const { login } = require('../controllers/login.controller')
 
 router.get('/', login)

 module.exports = router