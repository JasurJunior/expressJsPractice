const express = require('express')
const router = require('./routes/router')

// config ejs -->
const ejs = require('ejs')
ejs.delimiter = ' '
ejs.openDelimiter = '{{'
ejs.closeDelimiter = '}}'
// <-- end config ejs

const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.set('views', __dirname+'/views')

let PORT = process.env.PORT || 3000
app.use(router)
app.listen(PORT, e => console.log('http://localhost:'+PORT))