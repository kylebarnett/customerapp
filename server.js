const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

// const logger = (req, res, next) => {
//   console.log("Logging")
//   next()
// }
// app.use(logger) //Middleware. order of the middleware is very important

// View Engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//Body Parser Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

//Set static path

app.use(express.static(path.join(__dirname, 'public')))

// var person = [
//   {
//     name: "Kyle",
//     age: 23
//   },
//   {
//     name: "John",
//     age: 25
//   }
// ]
// You could do an app.get('/', (req, res) => {
//   res.json(person)
// })

app.get("/", (req, res) => {
  res.render('index', {
    title: 'Customers'
  })
})

const port = 7000
app.listen(port, () => {
  console.log("Listening on port", port)
})