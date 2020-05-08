const express = require('express')
const app_port = process.env.PORT || 3000
const app = express()
app.get('/', (req, res) => {
 res.send('Welcome To Super-Sami')
})

app.get('/signup', (req, res) => {
 res.send('signup here')
})
app.listen(app_port)
console.log(`app is running. port: ${app_port}`)
console.log(`http://127.0.0.1:${app_port}/`)
