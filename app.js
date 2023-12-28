 /** 
 * @license Apache-2.0
 * @copyright Caio Vidinha 2023
 */


'use strict'

require('dotenv').config()
const cors = require('cors')
const cookieParser = require('cookie-parser')

const login = require('./src/routes/login.route')

const express = require('express')
const app = express()


app.set('view engine', 'ejs')

app.use(express.static(`${__dirname}/public`))

app.use(cors()).use(cookieParser())

app.use('/login', login)


app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em http://localhost:${process.env.PORT}`)
})